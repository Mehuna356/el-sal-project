import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

export default function RotatingEarth({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const container = containerRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = container.clientWidth
    let height = container.clientHeight
    let globeRadius = Math.min(width, height) / 2.8 // Smaller radius relative to container

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = entry.contentRect.width
        height = entry.contentRect.height
        globeRadius = Math.min(width, height) / 2.8
        updateDimensions()
      }
    })
    resizeObserver.observe(container)

    function updateDimensions() {
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx?.scale(dpr, dpr)
    }

    updateDimensions()

    const projection = d3.geoOrthographic().clipAngle(90)
    const path = d3.geoPath(projection, ctx)

    let land: any = null
    let rotation = 0
    let isMounted = true

    // Fetch simple land data
    fetch(
      "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/master/110m/physical/ne_110m_land.json",
    )
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          land = data
          requestAnimationFrame(animate)
        }
      })
      .catch((err) => console.error("Failed to load globe data", err))

    function animate() {
      if (!isMounted || !ctx) return

      rotation += 0.3 // Smooth constant rotation
      projection.rotate([rotation, -15]).translate([width / 2, height / 2]).scale(globeRadius)

      ctx.clearRect(0, 0, width, height)

      // 1. Atmosphere/Glow (Subtle)
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        globeRadius * 0.8,
        width / 2,
        height / 2,
        globeRadius * 1.5,
      )
      gradient.addColorStop(0, "rgba(16, 185, 129, 0.1)")
      gradient.addColorStop(1, "transparent")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // 2. Ocean (Sphere background)
      ctx.beginPath()
      path({ type: "Sphere" } as any)
      ctx.fillStyle = "#020402"
      ctx.fill()
      ctx.strokeStyle = "rgba(16, 185, 129, 0.2)"
      ctx.lineWidth = 1
      ctx.stroke()

      // 3. Graticule
      const graticule = d3.geoGraticule()
      ctx.beginPath()
      path(graticule())
      ctx.strokeStyle = "rgba(16, 185, 129, 0.05)"
      ctx.lineWidth = 0.5
      ctx.stroke()

      // 4. Land
      if (land) {
        ctx.beginPath()
        path(land)
        ctx.fillStyle = "rgba(16, 185, 129, 0.15)"
        ctx.fill()
        ctx.strokeStyle = "rgba(16, 185, 129, 0.5)"
        ctx.lineWidth = 1
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    return () => {
      isMounted = false
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className={`w-full h-full min-h-[300px] flex items-center justify-center ${className}`}>
      <canvas ref={canvasRef} />
    </div>
  )
}
