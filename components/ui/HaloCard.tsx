import React from 'react';
import { motion } from 'framer-motion';

interface HaloCardProps {
  children: React.ReactNode;
  className?: string;
}

export const HaloCard: React.FC<HaloCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden p-[1px] bg-gradient-to-br from-neutral-800 via-neutral-900 to-black ${className}`}
    >
      {/* Moving halo */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none"
        animate={{
          top: ["-10%", "-10%", "90%", "90%", "-10%"],
          left: ["-10%", "90%", "90%", "-10%", "-10%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner Card */}
      <div className="relative flex flex-col w-full h-full rounded-[23px] border border-white/5 bg-gradient-to-br from-neutral-900/90 to-black/90 backdrop-blur-md overflow-hidden">
        {/* Rotating Ray */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100px] rounded-full bg-emerald-500/5 blur-[80px] pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Subtle lines */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
          animate={{ opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full">
            {children}
        </div>
      </div>
    </div>
  );
}