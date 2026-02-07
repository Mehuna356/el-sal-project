import React from 'react';
import { motion } from 'framer-motion';

export const ElSalvadorMap: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1000px] overflow-visible">
      
      {/* Base glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full" />

      <motion.div
        initial={{ rotateX: 20, rotateY: -10, scale: 0.9, opacity: 0 }}
        animate={{ rotateX: 25, rotateY: 10, scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <svg
          viewBox="0 0 200 120"
          className="w-[110%] h-[110%] overflow-visible"
        >
            <defs>
                <pattern id="dotPattern" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.25" fill="rgba(255, 255, 255, 0.2)" />
                </pattern>
                
                {/* Scanning Gradient */}
                <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="rgba(16, 185, 129, 0.8)" />
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>

                <filter id="glow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            {/* El Salvador Outline - Dotted Fill */}
            <g transform="translate(10, 10) scale(0.9)">
                <path
                    d="M 20,50 L 40,48 L 50,45 L 70,42 L 90,40 L 110,41 L 120,42 L 140,41 L 150,40 L 170,45 L 180,55 L 185,60 L 175,65 L 160,65 L 150,62 L 140,60 L 130,62 L 120,65 L 110,63 L 100,60 L 85,62 L 70,65 L 60,63 L 50,60 L 40,58 L 30,55 Z"
                    fill="url(#dotPattern)"
                    stroke="rgba(16, 185, 129, 0.3)"
                    strokeWidth="0.5"
                    filter="url(#glow)"
                />
                
                {/* Scanning Effect Overlay */}
                <motion.path
                    d="M 20,50 L 40,48 L 50,45 L 70,42 L 90,40 L 110,41 L 120,42 L 140,41 L 150,40 L 170,45 L 180,55 L 185,60 L 175,65 L 160,65 L 150,62 L 140,60 L 130,62 L 120,65 L 110,63 L 100,60 L 85,62 L 70,65 L 60,63 L 50,60 L 40,58 L 30,55 Z"
                    fill="url(#scanGradient)"
                    stroke="none"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 200, opacity: [0, 0.3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    style={{ mixBlendMode: 'overlay' }}
                />
            </g>

            {/* San Salvador Node */}
            <g transform="translate(85, 58)">
                {/* Radar Rings - Smoother */}
                <circle r="8" fill="none" stroke="#10b981" strokeWidth="0.1" opacity="0.2">
                    <animate attributeName="r" from="0" to="12" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.4" to="0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="4" fill="none" stroke="#34d399" strokeWidth="0.1" opacity="0.4">
                    <animate attributeName="r" from="0" to="8" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                    <animate attributeName="opacity" from="0.6" to="0" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                </circle>
                
                {/* Core Dot */}
                <circle r="1.5" fill="#10b981" className="drop-shadow-[0_0_8px_#10b981]" />
                
                {/* Vertical Data Line */}
                <motion.line 
                    x1="0" y1="0" x2="0" y2="-25" 
                    stroke="#10b981" 
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Data Card - Glassmorphism */}
                <foreignObject x="-40" y="-45" width="80" height="20">
                    <div className="flex justify-center">
                         <div className="bg-emerald-950/40 backdrop-blur-md border border-emerald-500/30 px-2 py-0.5 rounded-full text-[4px] text-emerald-300 font-mono tracking-widest shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            SAN SALVADOR HQ
                        </div>
                    </div>
                </foreignObject>
            </g>

            {/* Abstract Connection Lines */}
            <path d="M 85,58 L 140,45" stroke="url(#lineGrad)" strokeWidth="0.2" strokeDasharray="1 1" opacity="0.5" />
            <path d="M 85,58 L 40,52" stroke="url(#lineGrad)" strokeWidth="0.2" strokeDasharray="1 1" opacity="0.5" />
            
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="transparent" />
            </linearGradient>

        </svg>
      </motion.div>
    </div>
  );
};