
import React from 'react';
import { motion } from 'framer-motion';
import { ElSalvadorGlobe } from '../components/ElSalvadorGlobe';
import { Button } from '../components/ui/Button';
import { RoadmapCard } from '../components/ui/RoadmapCard';
import { StrategicValueCards } from '../components/StrategicValueCards';
import { TokenWorkflow } from '../components/TokenWorkflow';
import { GovernanceBento } from '../components/GovernanceBento';
import { SleekBadge } from '../components/ui/SleekBadge';
import { LightingBadge } from '../components/ui/LightingBadge';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { DottedGlowBackground } from '../components/ui/DottedGlowBackground';
import { FeaturedSection } from '../components/FeaturedSection';
import {
    ArrowRight,
    Coins,
    Recycle,
    Zap,
    Leaf,
    AlertTriangle,
    CheckCircle2,
    TrendingUp,
    Scale,
    BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const roadmapItems = [
    {
        quarter: "Q1 2026",
        title: "Development & Finance",
        description: "Completion of project development and capitalization phase.",
        status: "in-progress" as const
    },
    {
        quarter: "Q2 2026",
        title: "Permitting",
        description: "EIA approval and regulatory education finalization.",
        status: "upcoming" as const
    },
    {
        quarter: "Q3 2026",
        title: "Construction",
        description: "Site preparation and CODE™ System installation begins.",
        status: "upcoming" as const
    },
    {
        quarter: "Q4 2026",
        title: "Commercial Ops",
        description: "Commissioning and delivery of first sovereign fuel batch.",
        status: "upcoming" as const
    }
];

export const ElSalvadorPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="pt-24 pb-20 min-h-screen bg-black font-sans text-white antialiased selection:bg-emerald-500/30">

            {/* SECTION 1: HERO */}
            <section className="relative px-6 mb-0 pt-10 pb-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 order-2 lg:order-1"
                    >
                        <div className="mb-8">
                            <LightingBadge>El Salvador Pyrolysis Project</LightingBadge>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.05] tracking-tight">
                            Sovereign Energy <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-emerald-200 filter drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                Asset Tokenization.
                            </span>
                        </h1>

                        <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed font-light tracking-wide">
                            Solving structural economic vulnerability by converting a national liability—waste—into a strategic fuel asset.
                        </p>

                        <div className="flex gap-4">
                            <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                                Invest Now <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>

                        <div className="mt-12 flex gap-12 border-t border-white/5 pt-8">
                            <div>
                                <div className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Capacity</div>
                                <div className="text-3xl font-bold text-white font-display flex items-baseline">
                                    <AnimatedCounter value={35} /> <span className="text-sm text-white/50 ml-1 font-medium">TPD</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Monthly Output</div>
                                <div className="text-3xl font-bold text-emerald-400 font-display flex items-baseline">
                                    ~<AnimatedCounter value={900} /> <span className="text-sm text-emerald-400/50 ml-1 font-medium">k Liters</span>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Map Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative order-1 lg:order-2"
                    >
                        <ElSalvadorGlobe />
                    </motion.div>
                </div>
            </section>

            {/* SECTION 1.5: FEATURED CONTEXT */}
            <FeaturedSection />

            {/* SECTION 2: THREE PILLARS (STRATEGIC VALUE) */}
            <section className="px-6 mb-40 relative pt-32">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <SleekBadge className="mb-6" color="neutral">National Strategic Value</SleekBadge>
                        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">Three Pillars of Sovereignty</h2>
                        <p className="text-white/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                            A comprehensive framework securing economic stability, energy independence, and environmental control.
                        </p>
                    </div>

                    <StrategicValueCards />
                </div>
            </section>

            {/* SECTION 3: KEY METRICS STRIP (ANIMATED) */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5 mb-40 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { label: "Market CAGR", val: 121, suffix: "%", sub: "2025-2033 (Plastic Credits)" },
                            { label: "Annual Output", val: 9.3, suffix: "M", sub: "Liters of Diesel" },
                            { label: "Waste Gap", val: 1.2, suffix: "k", sub: "Tonnes/Day Uncollected" },
                            { label: "Energy", val: 100, suffix: "GWh", sub: "Equivalent/Year" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group cursor-default">
                                <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-3 group-hover:from-emerald-300 group-hover:to-emerald-600 transition-all duration-500 tracking-tight">
                                    <AnimatedCounter value={stat.val} suffix={stat.suffix} decimalPlaces={stat.val % 1 !== 0 ? 1 : 0} />
                                </div>
                                <div className="text-sm font-bold text-white mb-1 tracking-wide">{stat.label}</div>
                                <div className="text-xs text-white/40 font-medium uppercase tracking-wider">{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: DUAL TOKEN ECOSYSTEM */}
            <section className="px-6 mb-40 max-w-7xl mx-auto">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    {/* UPDATED BADGE COLOR */}
                    <div className="mb-6 inline-block">
                        <SleekBadge color="platinum">MIO3 Platform</SleekBadge>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">Dual Token Ecosystem</h2>
                    <p className="text-white/60 text-lg leading-relaxed font-light">
                        Two distinct asset classes managed on a unified platform: Capital Investment vs. Environmental Impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Token 1: Finance */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                            <Coins size={200} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 text-emerald-400 backdrop-blur-md">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">Class A Asset</div>
                                    <h3 className="text-2xl font-bold text-white">Project Finance</h3>
                                </div>
                            </div>

                            <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
                                Represents a Real-World Asset (RWA) investment in the physical pyrolysis plant (Tokenized Debt/Equity).
                                Capital is used to fund construction, with ROI derived directly from fuel sales.
                            </p>

                            <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider mb-1">Instrument</span>
                                    <span className="text-white font-mono">Tokenized Equity</span>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider mb-1">Audit</span>
                                    <span className="text-emerald-400 font-mono">E&Y Validated</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Token 2: LPT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                            <Leaf size={200} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 text-blue-400 backdrop-blur-md">
                                    <Recycle className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-1">Class B Asset</div>
                                    <h3 className="text-2xl font-bold text-white">Plastics Token (LPT)</h3>
                                </div>
                            </div>

                            <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
                                A verifiable environmental asset. Each token equals 1 tonne of plastic processed via "Proof of Work".
                                Purchased by corporations to offset plastic footprints.
                            </p>

                            <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider mb-1">Mechanism</span>
                                    <span className="text-white font-mono">Proof of Work</span>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider mb-1">Standard</span>
                                    <span className="text-blue-400 font-mono">Corsair Model</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 5: GOVERNANCE & REGULATION */}
            <section className="px-6 mb-40">
                <div className="mb-20 text-center">
                    <SleekBadge className="mb-6" color="neutral">Compliance</SleekBadge>
                    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white">Governance & Regulation</h2>
                </div>
                <GovernanceBento />
            </section>

            {/* SECTION 6: TOKENIZATION WORKFLOW (HORIZONTAL) */}
            <section className="px-6 mb-40 bg-black">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <SleekBadge className="mb-6" color="neutral">Process</SleekBadge>
                    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">Tokenization Workflow</h2>
                    <p className="text-white/60 text-lg leading-relaxed font-light">
                        A seamless digital-to-physical pipeline ensuring total transparency.
                    </p>
                </div>
                <TokenWorkflow />
            </section>

            {/* SECTION 7: THE WASTE GAP & ADDITIONALITY */}
            <section className="px-6 mb-40 max-w-7xl mx-auto">
                <div className="space-y-12">

                    {/* 1. Structural Waste Deficit */}
                    <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] shadow-2xl group hover:border-white/20 transition-all duration-500">
                        <DottedGlowBackground className="opacity-30" glowColor="rgba(16, 185, 129, 0.2)" />

                        <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
                            {/* Left: Text Content */}
                            <div className="lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-8"
                                >
                                    <LightingBadge>
                                        <AlertTriangle className="w-3.5 h-3.5" />
                                        <span>Infrastructure Gap</span>
                                    </LightingBadge>
                                </motion.div>

                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.05]"
                                >
                                    Structural <br />
                                    <span className="text-white/50">Waste Deficit</span>
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg"
                                >
                                    El Salvador generates <span className="text-white font-medium">4,200 tonnes</span> of waste daily, yet municipal infrastructure only captures <span className="text-white/60 font-medium">3,000 tonnes</span>.
                                    <br /><br />
                                    The remaining <span className="text-emerald-400 font-medium border-b border-emerald-500/30">1,200 tonnes</span> represent immediate feedstock opportunity.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-center gap-4 text-sm font-medium text-white/40"
                                >
                                    <div className="h-px w-12 bg-white/20" />
                                    <span>Source: Ministry of Environment (MARN)</span>
                                </motion.div>
                            </div>

                            {/* Right: Enhanced Visualization */}
                            <div className="lg:w-1/2 w-full">
                                <div className="relative bg-[#050505] rounded-[2rem] border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden">
                                    <div className="flex flex-col gap-12">
                                        {/* Data Point 1 */}
                                        <div className="group/bar">
                                            <div className="flex justify-between items-end mb-4">
                                                <span className="text-sm font-medium text-white/60">Total Daily Generation</span>
                                                <div className="text-right">
                                                    <span className="text-2xl font-mono font-medium text-white tracking-tight">4,200</span>
                                                    <span className="text-xs text-white/40 ml-2 font-mono uppercase">Tonnes</span>
                                                </div>
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                                    className="h-full bg-white"
                                                />
                                            </div>
                                        </div>

                                        {/* Data Point 2 - Split Bar */}
                                        <div>
                                            <div className="flex justify-between items-end mb-4">
                                                <span className="text-sm font-medium text-white/60">Capture vs. Deficit</span>
                                                <div className="text-right">
                                                    <span className="text-2xl font-mono font-medium text-emerald-400 tracking-tight">1,200</span>
                                                    <span className="text-xs text-emerald-500/50 ml-2 font-mono uppercase">Uncollected</span>
                                                </div>
                                            </div>

                                            <div className="flex gap-2 h-2 w-full">
                                                {/* Captured (Gray) */}
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "71%" }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className="h-full bg-white/20 rounded-l-full"
                                                />
                                                {/* Deficit (Emerald) */}
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "29%" }}
                                                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                                    className="h-full bg-emerald-500 rounded-r-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                                                />
                                            </div>
                                            <div className="flex justify-between mt-3 text-xs font-mono text-white/30">
                                                <span>3,000t Captured</span>
                                                <span className="text-emerald-500/70">1,200t Opportunity</span>
                                            </div>
                                        </div>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 mt-4">
                                            <div className="bg-[#0A0A0A] p-4 flex flex-col gap-1">
                                                <span className="text-[10px] uppercase tracking-wider text-white/40">Daily Leakage</span>
                                                <span className="text-xl font-mono text-white">1,200 <span className="text-xs text-white/30">t</span></span>
                                            </div>
                                            <div className="bg-[#0A0A0A] p-4 flex flex-col gap-1">
                                                <span className="text-[10px] uppercase tracking-wider text-emerald-500/60">Annual Potential</span>
                                                <span className="text-xl font-mono text-emerald-400">438k <span className="text-xs text-emerald-500/40">t</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Verifiable Impact - The Solution */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-12 flex flex-col justify-center hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden group">
                            {/* Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] group-hover:bg-emerald-500/20 transition-all duration-700" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 text-emerald-400">
                                    <Scale className="w-7 h-7" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-6">Verifiable Additionality</h3>
                                <p className="text-white/60 text-lg font-light leading-relaxed">
                                    Our tokens fund operations in "Red Zones" that market forces ignore.
                                    We specifically target rural areas with zero municipal collection, ensuring every token represents a net-new environmental benefit.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-12 flex flex-col justify-center space-y-6 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent pointer-events-none" />

                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Impact Protocol</h4>
                            </div>

                            {[
                                { text: "Proof of Work verification on every tonne", icon: CheckCircle2 },
                                { text: "Targeting 0% collection zones", icon: BarChart3 },
                                { text: "Full digital audit trail from bin to blockchain", icon: TrendingUp }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.05] transition-colors group/item">
                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover/item:text-emerald-300 transition-colors">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-base text-white/80 font-light">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 8: ROADMAP */}
            <section className="bg-white/[0.02] border-y border-white/5 py-32 mb-32">
                <div className="px-6">
                    <RoadmapCard
                        items={roadmapItems}
                        title="Critical Timeline"
                        description="2026 Execution Strategy"
                    />
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-6 max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-5xl font-display font-bold text-white mb-8 tracking-tight">Participate in the Private Round</h2>
                <Button
                    variant="primary"
                    size="lg"
                    className="px-12 py-5 text-xl shadow-[0_0_50px_rgba(16,185,129,0.3)] hover:shadow-[0_0_80px_rgba(16,185,129,0.5)]"
                    onClick={() => navigate('/contact')}
                >
                    Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </section>

        </div>
    );
};
