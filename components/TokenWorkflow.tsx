
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Factory, ShieldCheck, Coins, Globe } from 'lucide-react';

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
        description: "Third-party auditors validate the sensor data and physical mass balance before minting occurs.",
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
    return (
        <div className="w-full relative">
            {/* Grid Container - All Steps Visible */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-6 md:px-0">
                {steps.map((step, idx) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 relative overflow-hidden group hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-500 flex flex-col"
                    >
                        {/* Dynamic Gradient Glow */}
                        <div className={`absolute -inset-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-3xl bg-gradient-to-r ${step.color === 'emerald' ? 'from-emerald-500/10' : step.color === 'blue' ? 'from-blue-500/10' : step.color === 'purple' ? 'from-purple-500/10' : step.color === 'amber' ? 'from-amber-500/10' : 'from-cyan-500/10'} via-transparent to-transparent`} />

                        {/* Large Step Number */}
                        <div className="absolute -right-4 -top-6 text-[120px] font-display font-bold text-white/[0.04] group-hover:text-white/[0.08] transition-all duration-700 leading-none select-none z-0 pointer-events-none tracking-tighter">
                            {step.id}
                        </div>

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-xl backdrop-blur-md text-white group-hover:${step.color === 'emerald' ? 'text-emerald-400' : step.color === 'blue' ? 'text-blue-400' : step.color === 'purple' ? 'text-purple-400' : step.color === 'amber' ? 'text-amber-400' : 'text-cyan-400'}`}>
                                    <step.icon className="w-5 h-5 drop-shadow-lg" strokeWidth={1.5} />
                                </div>
                                <div className="px-2 py-1 rounded-full border border-white/10 bg-black/20 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 backdrop-blur-md">
                                    {step.type}
                                </div>
                            </div>

                            {/* Title */}
                            <div className="mb-4">
                                <span className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 block ${step.color === 'emerald' ? 'text-emerald-400' : step.color === 'blue' ? 'text-blue-400' : step.color === 'purple' ? 'text-purple-400' : step.color === 'amber' ? 'text-amber-400' : 'text-cyan-400'}`}>{step.subtitle}</span>
                                <h3 className="text-xl font-display font-bold text-white leading-tight">{step.title}</h3>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="relative z-10 mt-auto">
                            <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-4" />
                            <p className="text-white/60 text-sm font-light leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
