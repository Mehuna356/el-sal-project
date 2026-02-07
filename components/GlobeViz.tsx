import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const GlobeViz: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    // Handle DPI
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let rotation = 0;
    const dots: {x: number, y: number, z: number}[] = [];
    const DOT_COUNT = 400;
    const GLOBE_RADIUS = Math.min(width, height) * 0.35;

    // Initialize Fibonacci Sphere
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < DOT_COUNT; i++) {
        const y = 1 - (i / (DOT_COUNT - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const theta = phi * i;
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;
        dots.push({ x: x * GLOBE_RADIUS, y: y * GLOBE_RADIUS, z: z * GLOBE_RADIUS });
    }

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        
        // Center of canvas
        const cx = width / 2;
        const cy = height / 2;

        rotation += 0.005;

        // Draw connecting lines (Back hemisphere)
        ctx.beginPath();
        dots.forEach(dot => {
            // Rotate around Y axis
            const x = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
            const z = dot.z * Math.cos(rotation) + dot.x * Math.sin(rotation);
            
            if (z < 0) return; // Only draw back if specifically needed, but we focus on dots
        });

        // Draw Dots
        dots.forEach(dot => {
            // Rotate around Y axis
            const x = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
            const z = dot.z * Math.cos(rotation) + dot.x * Math.sin(rotation);
            
            // Perspective scale
            const scale = (z + GLOBE_RADIUS * 2) / (GLOBE_RADIUS * 2.5);
            const alpha = (z + GLOBE_RADIUS) / (GLOBE_RADIUS * 2);

            // Draw Dubai Node (static approx position rotated)
            // Just for visual flair, we make a few random nodes pulse
            
            ctx.beginPath();
            ctx.arc(cx + x, cy + dot.y, 1.5 * scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(16, 185, 129, ${Math.max(0.1, alpha)})`;
            ctx.fill();

            // Draw connection to center if it simulates a network
            if (Math.random() > 0.995) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + x, cy + dot.y);
                ctx.strokeStyle = `rgba(52, 211, 153, ${0.2 * alpha})`;
                ctx.stroke();
            }
        });

        // Draw Halo
        const gradient = ctx.createRadialGradient(cx, cy, GLOBE_RADIUS * 0.8, cx, cy, GLOBE_RADIUS * 1.5);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.05)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] relative flex items-center justify-center bg-[#050505] overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Floating Tags */}
        <motion.div 
            className="absolute top-1/4 right-1/4 bg-black/80 border border-emerald-500/30 px-3 py-1 rounded-full text-xs text-emerald-400 backdrop-blur-md z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            Dubai HQ
        </motion.div>
        
         <motion.div 
            className="absolute bottom-1/3 left-1/4 bg-black/80 border border-white/10 px-3 py-1 rounded-full text-xs text-white/60 backdrop-blur-md z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
            El Salvador Facility
        </motion.div>
    </div>
  );
};