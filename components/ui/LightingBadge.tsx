import React from 'react';

interface LightingBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const LightingBadge: React.FC<LightingBadgeProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1.5px] ${className}`}>

      {/* 
         Spinning Gradient Layer
         We use a conic gradient with narrow color stops to create 'beams' rather than wide wedges.
         inset-[-100%] ensures the rotating square covers the container at all angles.
      */}
      <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#000000_10%,#374151_20%,#000000_30%,#000000_60%,#10b981_70%,#000000_80%)]" />

      {/* 
        Content Mask
        Background color covers the center, leaving only the p-[1.5px] gap visible as the border.
      */}
      <div className="relative z-10 bg-[#050505] rounded-full px-8 py-3 w-full h-full flex items-center justify-center">
        {/* Subtle internal highlight for depth */}
        <div className="absolute inset-0 rounded-full bg-white/[0.02] pointer-events-none" />

        <div className="relative text-[#9ca3af] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3">
          {children}
        </div>
      </div>
    </div>
  );
};