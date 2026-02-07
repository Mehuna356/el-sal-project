import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface DottedGlowBackgroundProps {
  className?: string;
  dotColor?: string;
  glowColor?: string;
}

export const DottedGlowBackground: React.FC<DottedGlowBackgroundProps> = ({ 
  className = "",
  dotColor = "#333",
  glowColor = "rgba(16, 185, 129, 0.3)" // Emerald glow
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={`absolute inset-0 z-0 overflow-hidden bg-black ${className}`}
    >
      {/* The Dot Pattern */}
      <div 
        className="absolute inset-0 z-10"
        style={{
            backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            maskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      />
      
      {/* Base Dots (Always visible but dim) */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
            backgroundImage: `radial-gradient(#222 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
        }}
      />

      {/* The Glow Orb Following Mouse (Underneath) */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none transition-opacity duration-300"
        style={{
            background: glowColor,
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            opacity: 0.6
        }}
      />
    </div>
  );
};
