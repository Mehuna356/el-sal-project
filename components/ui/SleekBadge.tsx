
import React from 'react';
import { motion } from 'framer-motion';

interface SleekBadgeProps {
  children: React.ReactNode;
  color?: 'emerald' | 'blue' | 'amber' | 'neutral' | 'platinum';
  className?: string;
}

export const SleekBadge: React.FC<SleekBadgeProps> = ({ children, color = 'emerald', className = '' }) => {
  const styles = {
    emerald: {
        container: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
        dot: "bg-emerald-500"
    },
    blue: {
        container: "bg-blue-500/10 border-blue-500/20 text-blue-400",
        dot: "bg-blue-500"
    },
    amber: {
        container: "bg-amber-500/10 border-amber-500/20 text-amber-400",
        dot: "bg-amber-500"
    },
    neutral: {
        container: "bg-white/5 border-white/10 text-white/60",
        dot: "bg-white"
    },
    platinum: {
        container: "bg-white/5 border-white/20 text-gray-300 border-t-white/40 border-l-white/30 shadow-inner",
        dot: "bg-gray-300"
    }
  };

  const activeStyle = styles[color] || styles.emerald;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md ${activeStyle.container} ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${activeStyle.dot}`}></span>
        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${activeStyle.dot}`}></span>
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] leading-none pt-px">
        {children}
      </span>
    </motion.div>
  );
};
