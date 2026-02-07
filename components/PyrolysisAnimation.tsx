import React, { useRef } from 'react';
import { motion, useTime, useTransform } from 'framer-motion';

export const PyrolysisAnimation: React.FC = () => {
  const time = useTime();
  const rotateX = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const rotateY = useTransform(time, [0, 6000], [0, 360], { clamp: false });
  const pulse = useTransform(time, [0, 2000], [0.8, 1.1]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-[1000px]">
      
      {/* Container for the 3D scene */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 preserve-3d">
        
        {/* Core Reactor Glow */}
        <motion.div 
          style={{ scale: pulse }}
          className="absolute inset-0 m-auto w-32 h-32 rounded-full bg-emerald-400 blur-[40px] opacity-40"
        />

        {/* Central Reactor Core (The Cylinder) */}
        <motion.div 
            className="absolute inset-0 m-auto w-40 h-40 border-2 border-emerald-500/30 rounded-full bg-emerald-950/80 backdrop-blur-sm flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
             <div className="w-24 h-24 border border-emerald-400/20 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full border border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
             </div>
        </motion.div>

        {/* Orbital Rings representing Chemical Breakdown */}
        {[1, 2, 3].map((ring) => (
            <motion.div
                key={ring}
                style={{ 
                    rotateX: ring === 1 ? rotateX : ring === 2 ? rotateY : 0,
                    rotateY: ring === 1 ? rotateY : ring === 2 ? rotateX : rotateX,
                }}
                className={`absolute inset-0 border border-emerald-500/${40 - ring * 10} rounded-full`}
            />
        ))}

        {/* Floating Particles System */}
        {/* Input Waste (Left) -> Output Diesel (Right) Simulation */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Input Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`in-${i}`}
                    className="absolute top-1/2 left-0 w-2 h-2 bg-gray-500 rounded-sm"
                    initial={{ x: -100, opacity: 0, scale: 0.5 }}
                    animate={{ 
                        x: [ -150, 40 ], 
                        y: [ (i % 2 === 0 ? -20 : 20), 0 ],
                        opacity: [0, 1, 0],
                        scale: [0.8, 1, 0]
                    }}
                    transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.5, 
                        ease: "easeInOut" 
                    }}
                />
            ))}

            {/* Processing Flash */}
            <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-md"
                animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Output Particles (Diesel Drops) */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`out-${i}`}
                    className="absolute top-1/2 right-0 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_5px_#34d399]"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ 
                        x: [ -20, 150 ], 
                        y: [ 0, (i % 2 === 0 ? -30 : 30) ],
                        opacity: [0, 1, 0],
                    }}
                    transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.5 + 1.5, 
                        ease: "easeOut" 
                    }}
                />
            ))}
        </div>

        {/* Labels floating in 3D space */}
        <motion.div 
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur border border-emerald-500/30 px-3 py-1 rounded text-xs text-emerald-400 whitespace-nowrap"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
        >
            CODE™ Process Active
        </motion.div>
        <motion.div 
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur border border-white/10 px-3 py-1 rounded text-xs text-white/60 whitespace-nowrap"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
            O₂ Free Decomposition
        </motion.div>
      </div>
      
      {/* Background Grid specifically for the illustration area */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />
    </div>
  );
};