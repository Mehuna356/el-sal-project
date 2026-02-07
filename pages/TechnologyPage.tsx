
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Atom, Factory, Zap, CheckCircle2, Ruler, ShieldCheck, FileCheck, Award, Lock, Shield } from 'lucide-react';
import { ProcessSchematic } from '../components/ProcessSchematic';

const appleEase = [0.16, 1, 0.3, 1];

// Simplified Icons to match clean aesthetic
const RichGlassIcon = ({ type }: { type: 'shield' | 'doc' | 'factory' }) => {
    return (
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
            {type === 'shield' && <ShieldCheck strokeWidth={1.5} className="w-8 h-8" />}
            {type === 'doc' && <Ruler strokeWidth={1.5} className="w-8 h-8" />}
            {type === 'factory' && <Factory strokeWidth={1.5} className="w-8 h-8" />}
        </div>
    );
};

const processSteps = [
  {
    icon: Atom,
    title: "Oxygen-Free",
    desc: "Proprietary CODE™ catalytic decomposition prevents combustion.",
  },
  {
    icon: Factory,
    title: "Versatile Input",
    desc: "Robust intake processes mixed plastics, tires, and medical waste.",
  },
  {
    icon: Zap,
    title: "Premium Output",
    desc: "Generates Euro-5 diesel, carbon black, and syngas.",
  }
];

export const TechnologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30 font-sans">
      
      {/* 1. HERO */}
      <section className="relative pt-40 pb-32 px-6 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: appleEase }}
            >
                <h1 className="text-7xl md:text-9xl font-semibold tracking-[-0.04em] text-white leading-[0.95] mb-10">
                    Advanced <br/>
                    <span className="text-white/30">Catalysis.</span>
                </h1>
                
                <p className="text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-normal tracking-tight">
                    Molecular restructuring converting waste to energy assets.
                </p>
            </motion.div>
        </div>
      </section>

      {/* 2. PROCESS SCHEMATIC - Minimal Container */}
      <section className="relative py-40 px-6 bg-black">
        <div className="max-w-[1400px] mx-auto">
            <div className="mb-20 px-4">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">Process Architecture</h2>
                <p className="text-white/50 text-lg">Real-time mixed input to value-add output.</p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: appleEase }}
            >
                <ProcessSchematic />
            </motion.div>
        </div>
      </section>

      {/* 3. CORE ADVANTAGES - Clean Grid */}
      <section className="relative py-32 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-[1400px] mx-auto">
             <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-white mb-24">Core Advantages.</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {processSteps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 1, ease: appleEase }}
                    >
                        <div className="h-full p-10 bg-[#050505] rounded-[2rem] border border-white/5 flex flex-col items-start hover:bg-[#080808] transition-colors">
                            <step.icon className="w-10 h-10 text-white mb-8" strokeWidth={1.5} />
                            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{step.title}</h3>
                            <p className="text-white/50 text-lg leading-relaxed font-light">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 4. VALIDATION - Simplified */}
      <section className="relative py-40 px-6 bg-black border-t border-white/5">
         <div className="max-w-[1400px] mx-auto">
            <div className="mb-24">
                <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-white mb-6">Validation.</h2>
                <p className="text-xl text-white/50 max-w-2xl font-light">Engineered for reliability. Certified for compliance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Large Card */}
                <div className="md:col-span-2 bg-[#050505] rounded-[3rem] p-12 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-md">
                        {/* UPDATE: Gray Manufacturing Badge */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-white text-gray-400 text-xs font-bold uppercase tracking-wider">Manufacturing</span>
                        </div>
                        <h3 className="text-3xl font-semibold text-white tracking-tight mb-4">OEM Certified</h3>
                        <p className="text-white/60 leading-relaxed text-lg font-light">
                            Built by vetted North American partners ensuring industrial-grade durability. Decentralized models for rapid scaling.
                        </p>
                    </div>
                    <RichGlassIcon type="factory" />
                </div>

                {/* Vertical Card */}
                <div className="bg-[#050505] rounded-[3rem] p-10 border border-white/5 flex flex-col justify-between min-h-[300px]">
                    <div className="flex justify-between items-start mb-6">
                         {/* UPDATE: Gray Output Badge */}
                         <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-wider">Output</div>
                         <RichGlassIcon type="shield" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Euro-5 Diesel</h3>
                        <p className="text-white/50 text-base font-mono">&lt; 10ppm Sulfur</p>
                    </div>
                </div>

                {/* Stantec */}
                <div className="bg-[#050505] rounded-[3rem] p-10 border border-white/5 flex flex-col justify-between min-h-[300px]">
                    <div className="flex justify-between items-start mb-6">
                        <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">Audit</div>
                        <RichGlassIcon type="doc" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Stantec Validated</h3>
                        <p className="text-white/50 text-base">Engineering review confirmed.</p>
                    </div>
                </div>

                {/* Compliance */}
                <div className="md:col-span-2 bg-[#050505] rounded-[3rem] p-12 border border-white/5 flex items-center justify-between">
                     <div>
                        {/* UPDATE: Gray Safety Badge */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-wider">Safety</span>
                        </div>
                        <h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Global Standards</h3>
                        <div className="flex flex-wrap gap-4">
                            {["ISO 9001", "CE Marked", "ASME", "ATEX"].map((tag, i) => (
                                <span key={i} className="text-white/60 text-lg font-light border-b border-white/10 pb-1">{tag}</span>
                            ))}
                        </div>
                     </div>
                     <div className="hidden md:flex w-24 h-24 items-center justify-center rounded-full border border-emerald-500/20 text-emerald-500">
                        <Lock className="w-10 h-10" strokeWidth={1.5} />
                     </div>
                </div>

            </div>
         </div>
      </section>
    </div>
  );
};
