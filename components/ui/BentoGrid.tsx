import React, { useRef, useState, useEffect } from "react";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

const BentoCard: React.FC<{ item: BentoItem }> = ({ item }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return;
  
      const div = divRef.current;
      const rect = div.getBoundingClientRect();
  
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
  
    const handleFocus = () => {
      setIsFocused(true);
      setOpacity(1);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      setOpacity(0);
    };
  
    const handleMouseEnter = () => {
      setOpacity(1);
    };
  
    const handleMouseLeave = () => {
      setOpacity(0);
    };
  
    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] px-6 py-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${item.colSpan === 2 ? "md:col-span-2" : "col-span-1"}`}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/5 text-emerald-400">
                    {item.icon}
                </div>
                {item.status && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-400">
                        {item.status}
                    </span>
                )}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{item.description}</p>

            <div className="mt-auto pt-6 border-t border-white/5 flex gap-2">
                {item.tags?.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold text-white/30 bg-white/5 px-2 py-1 rounded">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </div>
    );
  };

export function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {items.map((item, index) => (
                <BentoCard key={index} item={item} />
            ))}
        </div>
    );
}