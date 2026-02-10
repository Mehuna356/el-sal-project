import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Boxes, Database, Fingerprint, ShieldCheck } from 'lucide-react';

const smoothEase = [0.25, 0.4, 0.25, 1];

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: smoothEase }
    }
};

const staggerList: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.6, ease: smoothEase }
    }
};

export const BlockchainSection: React.FC = () => {
    return (
        <section className="relative py-24 px-6 bg-[#050505] border-t border-white/5 overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="relative order-2 lg:order-1 h-[400px] flex items-center justify-center">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

                        {/* Blocks */}
                        <div className="relative flex gap-4 md:gap-8 items-center justify-center">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="relative w-24 h-24 md:w-32 md:h-32 bg-[#0A0A0A] border border-emerald-500/30 rounded-2xl flex flex-col items-center justify-center shadow-[0_20px_50px_-10px_rgba(16,185,129,0.15)] z-10"
                                    initial={{ y: 30, opacity: 0, scale: 0.9 }}
                                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.2, duration: 0.8, ease: smoothEase }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10, borderColor: 'rgba(52, 211, 153, 0.6)' }}
                                >
                                    <div className="absolute top-2 right-3 text-[10px] font-mono text-emerald-500/50">#{2340 + i}</div>
                                    {i === 0 && <Database className="w-8 h-8 text-emerald-400 mb-2" />}
                                    {i === 1 && <Fingerprint className="w-8 h-8 text-emerald-400 mb-2" />}
                                    {i === 2 && <Boxes className="w-8 h-8 text-emerald-400 mb-2" />}

                                    <div className="text-xs text-white/60 font-medium tracking-wide">
                                        {i === 0 ? "Data" : i === 1 ? "Hash" : "Block"}
                                    </div>

                                    {/* Connection Link */}
                                    {i < 2 && (
                                        <motion.div
                                            className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 w-8 md:w-12 h-[2px] bg-emerald-500/40"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                                            viewport={{ once: true }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            className="absolute top-10 left-10 p-3 bg-black/80 backdrop-blur border border-white/10 rounded-xl flex items-center gap-3 shadow-2xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            animate={{ y: [0, -10, 0] }}
                        >
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                            <span className="text-xs text-white/80 font-mono">Smart Contract Backed</span>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-20%" }}
                            variants={staggerList}
                        >
                            <motion.h2
                                variants={fadeInUp}
                                className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6"
                            >
                                Immutable <br />
                                <span className="text-emerald-400">Ledger Security</span>
                            </motion.h2>
                            <motion.p
                                variants={fadeInUp}
                                className="text-lg text-white/60 leading-relaxed mb-10 font-light"
                            >
                                Every liter of fuel produced and every carbon credit generated is recorded on-chain.
                                This ensures absolute transparency for investors and provides an unalterable audit trail for regulatory compliance.
                            </motion.p>

                            <ul className="space-y-4">
                                {[
                                    "Real-time production data anchored to IPFS",
                                    "Automated profit distribution via Smart Contracts",
                                    "Transparent ownership of tokenized machinery"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        variants={listItemVariants}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="p-1 rounded-full bg-emerald-500/20">
                                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <span className="text-white/80 font-normal">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};