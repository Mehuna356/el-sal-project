import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noHover?: boolean;
  spotlight?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', noHover = false, spotlight = true }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !spotlight) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    if (spotlight) setOpacity(1);
  };

  const handleMouseLeave = () => {
    if (spotlight) setOpacity(0);
  };

  return (
    <motion.div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={noHover ? {} : { y: -5, boxShadow: "0 20px 40px -20px rgba(16,185,129,0.15)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative overflow-hidden bg-[#080808] border border-white/5 rounded-2xl transition-colors duration-500 group ${className}`}
    >
      {/* Top Highlight Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
      
      {/* Spotlight Effect */}
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.04), transparent 40%)`,
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </motion.div>
  );
};