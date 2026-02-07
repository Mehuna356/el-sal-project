
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, FileCheck, Lock, ScrollText, Check } from 'lucide-react';
import { LightingBadge } from './ui/LightingBadge';

export const GovernanceBento: React.FC = () => {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Main Feature: Institutional Compliance */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Scale size={300} strokeWidth={0.5} />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="mb-6">
                            <LightingBadge>Institutional Grade</LightingBadge>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            Eliminating Risk through <br/>
                            <span className="text-emerald-400">Proven Models.</span>
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                             {[
                                 { title: "Technical Risk", desc: "Purpose-built framework validated for plastic-to-fuel.", icon: Lock },
                                 { title: "Reputational Risk", desc: "Insulated from voluntary market controversies.", icon: ShieldCheck },
                                 { title: "Integrity", desc: "'Proof of Work' ties value to audited operations.", icon: FileCheck },
                             ].map((item, i) => (
                                 <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                     <item.icon className="w-6 h-6 text-emerald-400 mb-4" />
                                     <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                                     <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                                 </div>
                             ))}
                        </div>
                    </div>
                </motion.div>

                {/* Side Card: The Corsair Model */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-4 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500/30 transition-colors"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
                            <ScrollText size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Corsair Model</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Adopting the proven CSR plastic credit standard used by global industry leaders to ensuring seamless adoption.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {["Audited Ledgers", "Baseload Contracts", "CSR Standard"].map((tag, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-white/70 border-b border-white/5 pb-3 last:border-0 font-light">
                                <div className="p-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                                    <Check className="w-3 h-3" strokeWidth={3} />
                                </div>
                                {tag}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
