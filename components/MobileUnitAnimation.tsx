import React from 'react';
import { motion } from 'framer-motion';

export const MobileUnitAnimation: React.FC = () => {
    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-black/20 rounded-3xl border border-white/5 overflow-hidden">

            {/* Abstract Map Background */}
            <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" className="text-emerald-900" />
                </svg>
            </div>

            {/* Center Unit - "The Node" */}
            <div className="relative">
                {/* Radar Pulse */}
                <motion.div
                    animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 bg-emerald-500/30 rounded-full blur-md"
                />
                <motion.div
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-emerald-400/20 rounded-full border border-emerald-500/50"
                />

                {/* The Box (Mobile Unit) */}
                <div className="relative w-32 h-32 bg-gradient-to-br from-gray-900 to-black border border-emerald-500/50 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)] z-10">
                    <div className="absolute top-2 left-2 w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_3px_rgba(52,211,153,0.6)]" />
                    <div className="absolute bottom-2 right-2 flex gap-1">
                        <div className="w-1 h-3 bg-emerald-500/50 rounded-sm" />
                        <div className="w-1 h-3 bg-emerald-500 rounded-sm" />
                        <div className="w-1 h-3 bg-emerald-400 rounded-sm" />
                    </div>

                    <div className="text-emerald-400 font-mono text-xs text-center">
                        <div className="text-[10px] text-white/50 mb-1">NODE ID</div>
                        #X9-22
                    </div>
                </div>

                {/* Satellite Connection (Starlink) */}
                <motion.div
                    className="absolute -top-24 -right-12"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-12 h-12 border border-white/10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
                    </div>
                    {/* Beam */}
                    <motion.div
                        className="absolute top-6 left-6 w-[2px] h-24 bg-gradient-to-b from-white/50 to-transparent origin-top"
                        style={{ rotate: 145, height: 100 }}
                    />
                </motion.div>

                {/* Floating Data Points */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-black/80 border border-emerald-500/30 px-2 py-1 rounded text-[10px] text-emerald-300 font-mono"
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            x: Math.cos(i * 2) * 80,
                            y: Math.sin(i * 2) * 80
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 1.5 }}
                    >
                        {['TEMP: 450°C', 'YIELD: 98%', 'UPLINK: OK'][i]}
                    </motion.div>
                ))}
            </div>

        </div>
    );
};