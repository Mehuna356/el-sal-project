
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, Ban, Flame, Recycle, Zap } from 'lucide-react';
import { FeatureCard } from './ui/FeatureCard';

// Spinning Zero Component
const SpinningZero = () => {
    const [display, setDisplay] = useState("100%");
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let frames = 0;
        const maxFrames = 25; // Duration

        const interval = setInterval(() => {
            frames++;
            // Show random percentage briefly
            const random = Math.floor(Math.random() * 100);
            setDisplay(`${random}%`);

            if (frames > maxFrames) {
                clearInterval(interval);
                setDisplay("0%");
            }
        }, 40); // Speed

        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <div ref={ref} className="text-[180px] md:text-[250px] font-display font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-emerald-500/20 to-transparent select-none tracking-tighter mix-blend-overlay">
            {display}
        </div>
    );
}

export const FeaturedSection: React.FC = () => {

    const features = [
        {
            title: "Energy Security Vulnerability",
            description: "100% dependency on imported fossil fuels exposes the economy to global price shocks and geopolitical volatility.",
            icon: AlertTriangle
        },
        {
            title: "Non-Recyclable Plastic Waste",
            description: "Growing environmental burden with limited disposal options, leaking into waterways and ecosystems.",
            icon: Ban
        }
    ];

    const solutions = [
        {
            title: "Domestically Produced Fuel",
            description: "Replacing imported volatility with sovereign, stable production capacity generated from local waste streams.",
            icon: Flame
        },
        {
            title: "Circular Economy Solution",
            description: "Transforming environmental liabilities into economic drivers through advanced catalytic recovery.",
            icon: Recycle
        }
    ];

    return (
        <section className="relative py-32 px-6 bg-[#020402] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* 1. THE OPPORTUNITY STATEMENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Updated Badge: Grey/Neutral with more space */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                            <Zap className="w-4 h-4 text-white/40" />
                            <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Market Opportunity</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-[0.95] tracking-tight">
                            A Nation with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-white">
                                Zero Hydrocarbon
                            </span> <br />
                            Reserves.
                        </h2>

                        <div className="h-1 w-24 bg-emerald-500/30 mb-8 rounded-full" />

                        <p className="text-xl text-white/60 leading-relaxed font-light max-w-xl">
                            El Salvador's economy has historically relied on imported fossil fuels.
                            With <strong className="text-white">zero domestic production</strong> of petroleum, the transition to sovereign waste-to-energy infrastructure represents a critical economic leap forward.
                        </p>
                    </motion.div>

                    {/* Visual: The Zero Gauge - Emerald Theme */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-full min-h-[400px] bg-[#080808] border border-white/10 rounded-[3rem] p-10 flex flex-col justify-center items-center shadow-2xl overflow-hidden group"
                    >
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

                        {/* Emerald pulse background */}
                        <div className="absolute inset-0 bg-emerald-900/10 opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />

                        <div className="relative z-10 text-center w-full h-full flex items-center justify-center">
                            {/* Giant Spinning 0% */}
                            <div className="relative">
                                <SpinningZero />

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-full h-[1px] bg-emerald-500/30 absolute top-1/2 left-0 rotate-[-15deg] shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                                </div>
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm font-bold uppercase tracking-[0.3em] text-gray-400 whitespace-nowrap">
                                    Current Reserves
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 2. TRANSFORMATION SECTION - Updated Feature Cards */}
                <div className="relative">

                    {/* Centered Badge */}
                    <div className="flex justify-center mb-16">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-[#0a0a0a] shadow-xl backdrop-blur-md z-10">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                            <span className="text-sm font-bold text-white uppercase tracking-widest">A Project of Critical National Infrastructure</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* National Context */}
                        <div className="space-y-8">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4 pl-2">The Context</h3>
                            {features.map((feature, idx) => (
                                <FeatureCard key={idx} feature={feature} className="border-white/5 hover:border-white/20" />
                            ))}
                        </div>

                        {/* Strategic Solution */}
                        <div className="space-y-8">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-500/60 mb-4 pl-2">The Solution</h3>
                            {solutions.map((feature, idx) => (
                                <FeatureCard key={idx} feature={feature} className="border-emerald-500/10 hover:border-emerald-500/30" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
