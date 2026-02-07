import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Droplet, Cpu } from 'lucide-react';

export const Hero3D: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1200px]">
      
      {/* Central Machine Cell */}
      <div className="relative w-80 h-80 flex items-center justify-center preserve-3d">
        
        {/* Outer Rotating Ring */}
        <motion.div 
            className="absolute inset-0 rounded-full border border-emerald-500/30 border-t-emerald-400 border-l-transparent border-r-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
            className="absolute inset-4 rounded-full border border-emerald-500/20 border-b-emerald-400 border-r-transparent"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* The Core "Cell" - Optimized Size */}
        <motion.div 
            className="relative w-40 h-40 bg-[#0a0a0a] backdrop-blur-md rounded-2xl border border-emerald-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden"
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.95, 1, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            {/* Internal Mechanics */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent)]" />
            
            {/* Spinning Element */}
            <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <div className="w-32 h-32 border-2 border-dashed border-emerald-500/50 rounded-full" />
            </motion.div>

            {/* Central Content */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="relative mb-2">
                    <Cpu className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <motion.div 
                        className="absolute -inset-2 bg-emerald-500/20 blur-lg rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
                <div className="text-xl font-display font-bold text-white tracking-widest">CODE</div>
                <div className="flex items-center gap-1 mt-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[8px] font-mono text-emerald-500/80 tracking-widest uppercase">Active</span>
                </div>
            </div>

            {/* Energy Arcs */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div 
                    className="absolute top-1/2 left-1/2 w-full h-[1px] bg-emerald-400/30 origin-left"
                    style={{ width: '60%' }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </motion.div>

        {/* Input Pipeline (Left) */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 w-32 h-24 overflow-hidden flex items-center justify-end pr-4">
             {/* Particles */}
             {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`in-${i}`}
                    className="absolute right-0 flex items-center justify-center"
                    initial={{ x: -150, opacity: 0, scale: 0.5, rotate: 0 }}
                    animate={{ 
                        x: 20, 
                        opacity: [0, 1, 1, 0], 
                        scale: [0.8, 1, 0.5],
                        rotate: 90
                    }}
                    transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.75, 
                        ease: "linear" 
                    }}
                >
                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 shadow-lg">
                        <Trash2 className="w-4 h-4 text-gray-500" />
                    </div>
                </motion.div>
             ))}
             {/* Guide Line */}
             <div className="absolute left-0 right-4 h-[1px] bg-gradient-to-r from-transparent to-white/10" />
        </div>

        {/* Output Pipeline (Right) */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 w-32 h-24 overflow-hidden flex items-center pl-4">
             {/* Particles */}
             {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`out-${i}`}
                    className="absolute left-0 flex items-center justify-center"
                    initial={{ x: -20, opacity: 0, scale: 0.5 }}
                    animate={{ 
                        x: 150, 
                        opacity: [0, 1, 1, 0], 
                        scale: [0.5, 1, 1]
                    }}
                    transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.75 + 1.5, // Sync with input
                        ease: "linear" 
                    }}
                >
                    <div className="w-8 h-8 bg-emerald-950 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        <Droplet className="w-4 h-4 text-emerald-400 fill-emerald-400/50" />
                    </div>
                </motion.div>
             ))}
              {/* Guide Line */}
             <div className="absolute left-4 right-0 h-[1px] bg-gradient-to-r from-emerald-500/20 to-transparent" />
        </div>

      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none -z-10" />

    </div>
  );
};