import React, { useState, useEffect } from "react"

interface LocationTagProps {
  city?: string
  country?: string
  timezone?: string
}

export function LocationTag({ city = "San Salvador", country = "El Salvador", timezone = "CST" }: LocationTagProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      // Create date object for El Salvador time (UTC-6)
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const svTime = new Date(utc - (3600000 * 6));

      setCurrentTime(
        svTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hidden lg:flex group relative items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 transition-all duration-500 ease-out hover:border-emerald-500/20 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,0,0,0.04)]"
    >
      {/* Live pulse indicator */}
      <div className="relative flex items-center justify-center">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      </div>

      {/* Location text */}
      <div className="flex items-center gap-2 overflow-hidden h-5 w-32 relative">
        <span
          className="absolute left-0 text-xs font-medium text-white transition-all duration-500 whitespace-nowrap"
          style={{
            transform: isHovered ? "translateY(-150%)" : "translateY(0)",
            opacity: isHovered ? 0 : 1,
          }}
        >
          {city}, {country}
        </span>

        <span
          className="absolute left-0 text-xs font-medium text-emerald-400 transition-all duration-500 whitespace-nowrap"
          style={{
            transform: isHovered ? "translateY(0)" : "translateY(150%)",
            opacity: isHovered ? 1 : 0,
          }}
        >
          {currentTime} {timezone}
        </span>
      </div>

      {/* Arrow indicator */}
      <svg
        className="h-3 w-3 text-white/50 transition-all duration-300"
        style={{
          transform: isHovered ? "translateX(2px) rotate(-45deg)" : "translateX(0) rotate(0)",
          opacity: isHovered ? 1 : 0.5,
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </button>
  )
}