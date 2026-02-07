import React, { useEffect, useRef } from 'react';

interface BentoItemProps {
    className?: string;
    children: React.ReactNode;
}

const BentoItem: React.FC<BentoItemProps> = ({ className = '', children }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        item.addEventListener('mousemove', handleMouseMove);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div 
            ref={itemRef} 
            className={`relative overflow-hidden bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 group hover:border-white/20 transition-all duration-300 ${className}`}
            style={{
                // @ts-ignore
                "--mouse-x": "-100px",
                "--mouse-y": "-100px"
            }}
        >
            {/* Spotlight Effect */}
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.06), transparent 40%)`
                }}
            />
            
            {/* Content relative z-index */}
            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </div>
    );
};

interface GridItem {
    title: string;
    description: string;
    icon?: React.ReactNode;
    colSpan?: number;
    rowSpan?: number;
    tags?: string[];
    status?: string;
}

export const CyberneticBentoGrid: React.FC<{ items: GridItem[] }> = ({ items }) => {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min">
                {items.map((item, idx) => (
                    <BentoItem 
                        key={idx} 
                        className={`
                            ${item.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"}
                            ${item.rowSpan === 2 ? "md:row-span-2" : "md:row-span-1"}
                        `}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                {item.icon && (
                                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-emerald-400">
                                        {item.icon}
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            </div>
                            {item.status && (
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    {item.status}
                                </span>
                            )}
                        </div>
                        
                        <p className="text-white/60 text-sm leading-relaxed mb-auto">
                            {item.description}
                        </p>

                        {item.tags && (
                            <div className="mt-8 flex flex-wrap gap-2">
                                {item.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] uppercase font-bold text-white/30 bg-white/5 px-2 py-1 rounded border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </BentoItem>
                ))}
            </div>
        </div>
    );
};