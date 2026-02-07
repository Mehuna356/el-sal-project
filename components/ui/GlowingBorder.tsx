import React from 'react';

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const GlowingBorder: React.FC<GlowingBorderProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative group isolate ${className}`}>
      {/* The Container for the border effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        {/* The rotating gradient */}
        <div 
            className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2"
            style={{
                background: `conic-gradient(
                    transparent 0deg, 
                    transparent 80deg, 
                    #10b981 100deg, 
                    transparent 120deg,
                    transparent 260deg,
                    #34d399 280deg,
                    transparent 300deg
                )`,
                animation: 'rotate 4s linear infinite'
            }}
        />
      </div>

      {/* Inner dark background to mask the center, leaving only the border */}
      <div className="absolute inset-[1px] bg-[#080808] rounded-2xl -z-10" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 -z-20 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

      <div className="relative z-10 h-full">
        {children}
      </div>

      <style>{`
        @keyframes rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};