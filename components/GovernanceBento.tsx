
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
                    whileHover={{ y: -6 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="lg:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:border-white/25 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 cursor-pointer"
                >
                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 pointer-events-none" />
                    {/* Corner glow accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Scale size={300} strokeWidth={0.5} />
                    </div>

                    <div className="relative z-10">
                        <div className="mb-6">
                            <LightingBadge>Institutional Grade</LightingBadge>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            Eliminating Risk through <br />
                            <span className="text-emerald-400">Proven Models.</span>
                        </h3>

                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            {[
                                { title: "Technical Risk", desc: "Purpose-built framework validated for plastic-to-fuel.", icon: Lock },
                                { title: "Reputational Risk", desc: "Insulated from voluntary market controversies.", icon: ShieldCheck },
                                { title: "Integrity", desc: "'Proof of Work' ties value to audited operations.", icon: FileCheck },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className="bg-white/5 rounded-2xl p-5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer relative overflow-hidden group/card"
                                >
                                    {/* Sub-card shimmer */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover/card:translate-x-[-200%] transition-transform duration-700 pointer-events-none" />
                                    <item.icon className="w-6 h-6 text-emerald-400 mb-4 relative z-10" />
                                    <h4 className="text-sm font-bold text-white mb-2 relative z-10">{item.title}</h4>
                                    <p className="text-xs text-white/50 leading-relaxed relative z-10">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Side Card: The Corsair Model */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
                    className="lg:col-span-4 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)] transition-all duration-500 cursor-pointer"
                >
                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 pointer-events-none" />
                    {/* Corner glow accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-emerald-500/15 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-emerald-500/15 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
                            <ScrollText size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Proprietary LATAM Model</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Proprietary LATAM Plastic Credit standard designed for regional compliance and ensuring seamless adoption.
                        </p>
                    </div>

                    <div className="space-y-4 relative z-10">
                        {["Audited Ledgers", "Baseload Contracts", "Proprietary LATAM Standard"].map((tag, i) => (
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
