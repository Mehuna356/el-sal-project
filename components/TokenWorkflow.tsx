import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, Factory, ShieldCheck, Coins, Globe, ArrowRight } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Feedstock Sourcing",
        subtitle: "Verification",
        type: "Off-Chain",
        description: "Physical waste is sourced and verified. Origin data is logged to ensure only valid inputs enter the system.",
        icon: Search,
        color: "emerald"
    },
    {
        id: 2,
        title: "Pyrolysis Production",
        subtitle: "Processing",
        type: "On-Equipment",
        description: "Waste is processed via CODE™ technology. IoT sensors track input mass vs. output fuel volume in real-time.",
        icon: Factory,
        color: "blue"
    },
    {
        id: 3,
        title: "Independent Audit",
        subtitle: "Verification",
        type: "Off-Chain",
        description: "Third-party auditors (E&Y) validate the sensor data and physical mass balance before minting occurs.",
        icon: ShieldCheck,
        color: "purple"
    },
    {
        id: 4,
        title: "Token Minting",
        subtitle: "Issuance",
        type: "On-Chain",
        description: "Smart contracts mint LPT tokens corresponding exactly to verified production data. 1 Token = 1 Tonne.",
        icon: Coins,
        color: "amber"
    },
    {
        id: 5,
        title: "Market Settlement",
        subtitle: "Liquidity",
        type: "On-Chain",
        description: "Tokens are listed for trading or retired by corporate buyers for offset credits. Complete transparency.",
        icon: Globe,
        color: "cyan"
    }
];

export const TokenWorkflow: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 380; // Adjusted card width
            current.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full relative group/container">
            
            {/* Scroll Controls */}
            <div className="flex justify-end gap-2 mb-6 px-6 md:px-0 max-w-7xl mx-auto">
                <button onClick={() => scroll('left')} className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-white/50 hover:text-white backdrop-blur-sm">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                <button onClick={() => scroll('right')} className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-white/50 hover:text-white backdrop-blur-sm">
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Horizontal Scroll Container */}
            <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-12 pt-4 px-6 snap-x snap-mandatory hide-scrollbar max-w-7xl mx-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {steps.map((step, idx) => (
                    <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="snap-center shrink-0 w-[340px] md:w-[380px] h-[480px] bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between"
                    >
                        {/* Dynamic Gradient Glow */}
                        <div className={`absolute -inset-[100px] bg-gradient-to-r from-${step.color}-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`} />
                        
                        {/* Large Sleek Numbering */}
                        <div className="absolute -right-8 -bottom-16 text-[200px] font-display font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-all duration-700 leading-none select-none z-0 pointer-events-none">
                            {step.id}
                        </div>

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-10">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-2xl backdrop-blur-md text-${step.color === 'emerald' ? 'emerald-400' : 'white'}`}>
                                    <step.icon className="w-7 h-7 drop-shadow-lg" strokeWidth={1.5} />
                                </div>
                                <div className="px-3 py-1.5 rounded-full border border-white/10 bg-black/20 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 backdrop-blur-md">
                                    {step.type}
                                </div>
                            </div>

                            {/* Title */}
                            <div className="mb-4">
                                <span className={`text-xs font-bold text-${step.color}-400 uppercase tracking-widest mb-2 block`}>{step.subtitle}</span>
                                <h3 className="text-3xl font-display font-bold text-white leading-tight">{step.title}</h3>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="relative z-10 mt-auto">
                            <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6" />
                            <p className="text-white/60 text-base font-light leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};