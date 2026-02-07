import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Atom, Factory, Zap, CheckCircle2, Ruler, ShieldCheck, Lock } from 'lucide-react';
import { ProcessSchematic } from '../components/ProcessSchematic';

// --- NEW SUB-COMPONENTS FOR BENTO ICONS ---

const RichGlassIcon = ({ type, color = "emerald" }: { type: 'shield' | 'doc' | 'factory' | 'check', color?: string }) => {

    const colors = {
        emerald: { light: '#34d399', base: '#10b981', dark: '#064e3b' },
        blue: { light: '#60a5fa', base: '#3b82f6', dark: '#1e3a8a' },
    };
    const c = colors[color as keyof typeof colors] || colors.emerald;

    return (
        <div className="relative w-24 h-24 flex items-center justify-center preserve-3d">
            {/* Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[2rem] blur-xl opacity-50" />

            {/* Main Glass Shape */}
            <div
                className="relative w-20 h-20 rounded-[1.5rem] flex items-center justify-center border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-md"
                style={{
                    background: `linear-gradient(135deg, ${c.base}20, ${c.base}05)`,
                    boxShadow: `inset 0 0 20px ${c.base}10, 0 10px 20px rgba(0, 0, 0, 0.2)`
                }}
            >
                {/* Internal Geometry/Icon */}
                <div className="relative z-10">
                    {type === 'shield' && (
                        <div className="relative">
                            <ShieldCheck className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" strokeWidth={1.5} />
                            <motion.div
                                className="absolute -inset-2 bg-white/20 blur-lg rounded-full"
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </div>
                    )}
                    {type === 'doc' && (
                        <div className="relative">
                            <Ruler className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" strokeWidth={1.5} />
                            <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border border-black">
                                <CheckCircle2 className="w-3 h-3 text-white" />
                            </div>
                        </div>
                    )}
                    {type === 'factory' && (
                        <div className="relative">
                            <Factory className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" strokeWidth={1.5} />
                            <motion.div
                                className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full shadow-[0_0_5px_white]"
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                    )}
                </div>

                {/* Glass Highlights */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.5rem] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-white/5 to-transparent rounded-br-[1.5rem] pointer-events-none" />
            </div>

            {/* Floating Elements */}
            <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-2 h-2 rounded-full" style={{ background: c.light }} />
            </motion.div>
        </div>
    );
};


const processSteps = [
    {
        icon: Atom,
        title: "Oxygen-Free Processing",
        desc: "Proprietary CODE™ catalytic decomposition operates in a completely oxygen-free environment, preventing combustion and eliminating toxic emissions.",
        color: "from-emerald-400 to-cyan-400"
    },
    {
        icon: Factory,
        title: "Versatile Feedstock",
        desc: "Robust intake system processes mixed inputs including MSW, plastics, tires, and medical waste without extensive pre-sorting.",
        color: "from-emerald-400 to-emerald-600"
    },
    {
        icon: Zap,
        title: "High-Value Output",
        desc: "Generates premium Euro-5 standard diesel, high-grade carbon black, and syngas used to power the facility itself.",
        color: "from-teal-400 to-emerald-400"
    }
];

export const TechnologyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-black">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[conic-gradient(from_180deg_at_50%_-20%,transparent_0deg,rgba(16,185,129,0.05)_30deg,transparent_60deg)] opacity-60 pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[11px] font-bold tracking-widest text-white/70 uppercase">Patented Technology</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.05] mb-8"
                    >
                        Advanced Catalytic <br />
                        <span className="text-white/40">Decomposition</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-normal"
                    >
                        The CODE™ system leverages molecular restructuring to convert mixed waste streams into high-value energy assets.
                    </motion.p>
                </div>
            </section>

            {/* 2. PROCESS SCHEMATIC */}
            <section className="relative py-24 px-6 bg-black">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 px-4">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Process Architecture</h2>
                            <p className="text-white/50 text-base max-w-md">Real-time flow from mixed inputs to value-add outputs.</p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <ProcessSchematic />
                    </motion.div>
                </div>
            </section>

            {/* 3. CORE ADVANTAGES */}
            <section className="relative py-24 px-6 border-t border-white/10">
                <div className="relative z-10 max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-white mb-20">Core Advantages</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                            >
                                <div className="h-full relative group">
                                    <Card className="h-full p-8 bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-500">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-all duration-300">
                                            <step.icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                                        <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. VALIDATION BENTO GRID - REDESIGNED */}
            <section className="relative py-32 px-6 bg-black border-t border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Industrial Validation</h2>
                        <p className="text-xl text-white/50 max-w-2xl font-light">Engineered for reliability, certified for compliance. Meeting global standards for safety and performance.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

                        {/* 1. OEM CERTIFIED - Large Card */}
                        <div className="md:col-span-2 relative bg-[#080808] border border-white/10 rounded-[2rem] p-10 overflow-hidden group hover:border-white/20 transition-colors duration-500 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="relative z-10 max-w-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">Manufacturing</span>
                                </div>
                                <h3 className="text-3xl font-semibold text-white tracking-tight mb-4">OEM Certified Infrastructure</h3>
                                <p className="text-white/60 leading-relaxed">
                                    Built by vetted North American partners ensuring industrial-grade durability. Decentralized models for rapid scaling.
                                </p>
                            </div>
                            {/* Animated Icon */}
                            <div className="shrink-0 scale-125">
                                <RichGlassIcon type="factory" color="emerald" />
                            </div>

                            {/* Background Light */}
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
                        </div>

                        {/* 2. EURO-5 STANDARD */}
                        <div className="relative bg-[#080808] border border-white/10 rounded-[2rem] p-8 overflow-hidden group hover:border-white/20 transition-colors duration-500 flex flex-col justify-between">
                            <div className="mb-6 flex justify-between items-start">
                                <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">Output</div>
                                <RichGlassIcon type="shield" color="blue" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white tracking-tight mb-4">Euro-5 Diesel</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                                        <span className="text-white/40">Sulfur</span>
                                        <span className="text-white font-mono">&lt; 10ppm</span>
                                    </div>
                                    <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                                        <span className="text-white/40">Cetane</span>
                                        <span className="text-white font-mono">&gt; 51</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. STANTEC VALIDATION */}
                        <div className="relative bg-[#080808] border border-white/10 rounded-[2rem] p-8 overflow-hidden group hover:border-white/20 transition-colors duration-500">
                            <div className="mb-8 flex justify-between items-start">
                                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">Audit</div>
                                <RichGlassIcon type="doc" color="emerald" />
                            </div>
                            <h3 className="text-xl font-semibold text-white tracking-tight mb-2">Stantec Validated</h3>
                            <p className="text-white/60 text-sm mb-6 leading-relaxed">
                                Independent engineering review confirms mass balance efficiency and output quality specifications.
                            </p>
                            <button className="text-sm font-semibold text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors">
                                Read Engineering Report
                            </button>
                        </div>

                        {/* 4. SAFETY & COMPLIANCE - Wide */}
                        <div className="md:col-span-2 relative bg-[#080808] border border-white/10 rounded-[2rem] p-10 overflow-hidden group hover:border-white/20 transition-colors duration-500">
                            <div className="flex flex-col md:flex-row gap-10 items-center">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">Safety</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Global Compliance Standards</h3>
                                    <p className="text-white/60 leading-relaxed mb-6">
                                        Operates under strict North American and EU safety directives. Automated shutdown protocols and continuous emissions monitoring.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {["ISO 9001", "CE Marked", "ASME", "ATEX"].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-semibold text-white/80 border border-white/5">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                {/* Abstract Safety Viz */}
                                <div className="w-full md:w-64 h-32 rounded-xl bg-black/50 border border-white/5 relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:10px_10px]" />
                                    <Lock className="w-10 h-10 text-emerald-500/50" />
                                    <div className="absolute bottom-2 left-3 text-[10px] font-mono text-emerald-500">SYSTEM SECURE</div>
                                    <div className="absolute top-2 right-3 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};