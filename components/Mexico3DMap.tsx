import React from 'react';
import { motion } from 'framer-motion';

export const Mexico3DMap: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1000px] overflow-visible">
      
      {/* Base glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/10 blur-[80px] rounded-full" />

      <motion.div
        initial={{ rotateX: 20, rotateY: -10, scale: 0.9, opacity: 0 }}
        animate={{ rotateX: 25, rotateY: 10, scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 w-full h-full flex items-center justify-center drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
      >
        <svg
          viewBox="0 0 100 70"
          className="w-[120%] h-[120%] fill-black/40 stroke-emerald-500 stroke-[0.2]"
          style={{ overflow: 'visible' }}
        >
            <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0.0)" />
                </linearGradient>
            </defs>

            {/* Grid Pattern overlay on map */}
            <pattern id="grid" width="2" height="2" patternUnits="userSpaceOnUse">
                 <circle cx="1" cy="1" r="0.1" fill="rgba(52, 211, 153, 0.3)" />
            </pattern>

            {/* Silhouette Layer - Bottom (Shadow) */}
            <path
                d="M10,10 L25,15 L35,25 L50,30 L65,25 L80,20 L90,15 L95,25 L85,40 L70,55 L60,60 L50,55 L45,65 L35,60 L30,50 L20,45 L10,35 Z"
                fill="black"
                transform="translate(0, 5)"
                className="blur-sm opacity-50"
            />

            {/* Main Map Shape */}
            <path
                d="M10,10 L25,15 L35,25 L50,30 L65,25 L80,20 L90,15 L95,25 L85,40 L70,55 L60,60 L50,55 L45,65 L35,60 L30,50 L20,45 L10,35 Z"
                fill="url(#mapGradient)"
                stroke="#10b981"
                strokeWidth="0.3"
                className="drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]"
            />
            
            {/* Grid fill */}
            <path
                d="M10,10 L25,15 L35,25 L50,30 L65,25 L80,20 L90,15 L95,25 L85,40 L70,55 L60,60 L50,55 L45,65 L35,60 L30,50 L20,45 L10,35 Z"
                fill="url(#grid)"
                className="opacity-50"
            />

            {/* Location Pin: Mexico City */}
            <g transform="translate(58, 48)">
                {/* Ping Animation */}
                <circle r="6" fill="none" stroke="#34d399" strokeWidth="0.1" opacity="0.5">
                    <animate attributeName="r" from="0" to="6" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.8" to="0" dur="3s" repeatCount="indefinite" />
                </circle>
                
                {/* Core Dot */}
                <circle r="1" fill="#10b981" className="drop-shadow-[0_0_5px_#10b981]" />
                
                {/* Vertical Data Line */}
                <motion.line 
                    x1="0" y1="0" x2="0" y2="-20" 
                    stroke="url(#lineGrad)" 
                    strokeWidth="0.2"
                />
                
                {/* Floating Label */}
                <foreignObject x="-20" y="-30" width="60" height="20">
                    <div className="flex justify-center">
                         <div className="bg-black/90 border border-emerald-500/50 px-2 py-0.5 rounded text-[3px] text-emerald-400 font-mono shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                            MPTP FACILITY
                        </div>
                    </div>
                </foreignObject>
            </g>
            
             <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
        </svg>
      </motion.div>
    </div>
  );
};