import React from 'react';
import { motion } from 'framer-motion';

interface SleekBadgeProps {
  children: React.ReactNode;
  color?: 'emerald' | 'blue' | 'amber' | 'neutral';
  className?: string;
}

export const SleekBadge: React.FC<SleekBadgeProps> = ({ children, color = 'emerald', className = '' }) => {
  const colors = {
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    neutral: "bg-white/5 border-white/10 text-white/60"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md ${colors[color]} ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${color === 'neutral' ? 'bg-white' : `bg-${color}-500`}`}></span>
        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${color === 'neutral' ? 'bg-white' : `bg-${color}-500`}`}></span>
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] leading-none pt-px">
        {children}
      </span>
    </motion.div>
  );
};