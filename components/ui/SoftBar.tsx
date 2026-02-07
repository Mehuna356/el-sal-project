import React from 'react';
import { motion } from 'framer-motion';

interface SoftBarProps {
  percentage: number;
  color?: 'emerald' | 'red' | 'blue';
  height?: string;
  className?: string;
  label?: string;
  value?: string;
}

export const SoftBar: React.FC<SoftBarProps> = ({ 
  percentage, 
  color = 'emerald', 
  height = 'h-4',
  className = '',
  label,
  value
}) => {
  
  const colors = {
    emerald: { bg: 'bg-emerald-500', shadow: 'shadow-[0_0_15px_rgba(16,185,129,0.4)]' },
    red: { bg: 'bg-red-500', shadow: 'shadow-[0_0_15px_rgba(239,68,68,0.4)]' },
    blue: { bg: 'bg-blue-500', shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.4)]' }
  };

  const selectedColor = colors[color];

  return (
    <div className={`w-full ${className}`}>
      {(label || value) && (
        <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-white/60">
            <span>{label}</span>
            <span className={color === 'emerald' ? 'text-emerald-400' : 'text-white'}>{value}</span>
        </div>
      )}
      
      {/* Track - Inset Shadow for "Pressed" Look */}
      <div className={`w-full ${height} bg-[#050505] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_1px_rgba(255,255,255,0.05)] border border-white/5 relative overflow-hidden`}>
        
        {/* Fill - Extruded Look */}
        <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`absolute top-0 left-0 bottom-0 rounded-full ${selectedColor.bg} ${selectedColor.shadow}`}
        >
            {/* Glossy Top Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[40%] bg-white/30 rounded-t-full" />
            
            {/* Animated Striped Pattern */}
            <div 
                className="absolute inset-0 w-full h-full opacity-30"
                style={{
                    backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
                    backgroundSize: '1rem 1rem',
                    animation: 'progress-bar-stripes 1s linear infinite'
                }}
            />
        </motion.div>
      </div>
      
      <style>{`
        @keyframes progress-bar-stripes {
            0% { background-position: 1rem 0; }
            100% { background-position: 0 0; }
        }
      `}</style>
    </div>
  );
};