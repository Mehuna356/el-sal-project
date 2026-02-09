import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Activity, BarChart3, Clock, Zap } from 'lucide-react';

const stats = [
    {
        label: "Estimated Daily Processing",
        value: 35,
        suffix: "",
        unit: "Tonnes",
        icon: Activity,
        color: "emerald",
        trend: "Continuous Ops"
    },
    {
        label: "Est. Monthly Output",
        value: "700-900",
        suffix: "k",
        unit: "Liters",
        icon: Zap,
        color: "blue",
        trend: "Import Substitution",
        isRange: true
    },
    {
        label: "Est. Annual Energy",
        value: 100,
        suffix: "GWh",
        unit: "Equivalent",
        icon: BarChart3,
        color: "purple",
        trend: "Sovereign Power"
    },
    {
        label: "Tech Lifespan",
        value: 20,
        suffix: "+",
        unit: "Years",
        icon: Clock,
        color: "orange",
        trend: "Long Operational Lifespan"
    }
];

// Refined easing
const smoothEase = [0.25, 0.4, 0.25, 1];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: smoothEase }
    }
};

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <span ref={ref} className="tabular-nums tracking-tight">
            {isInView ? (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <CountUp end={value} duration={2} />
                </motion.span>
            ) : "0"}
            {suffix}
        </span>
    );
};

const CountUp = ({ end, duration }: { end: number, duration: number }) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        let startTime: number;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(progress * end);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return <>{end % 1 !== 0 ? count.toFixed(2) : Math.floor(count)}</>;
}

export const ProofSection: React.FC = () => {
    return (
        <section className="relative py-20 bg-[#020402] border-t border-white/5 overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: smoothEase }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white mb-4">Operational Impact</h2>
                        <p className="text-white/60 text-lg font-light">
                            Transforming liability into strategic assets. Real-time performance metrics for the El Salvador facility.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                                        <stat.icon className="w-5 h-5 text-white/70 group-hover:text-emerald-400 transition-colors" />
                                    </div>
                                    <div className="text-[10px] font-medium text-emerald-500/50 bg-emerald-500/5 px-2 py-1 rounded-full uppercase tracking-wider">
                                        {stat.trend}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-4xl font-display font-bold text-white mb-1 group-hover:text-emerald-100 transition-colors">
                                        {stat.isRange ? (
                                            <span className="tabular-nums tracking-tight">{stat.value}{stat.suffix}</span>
                                        ) : (
                                            <Counter value={typeof stat.value === 'number' ? stat.value : 0} suffix={stat.suffix} />
                                        )}
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-sm font-medium text-white/40">{stat.label}</span>
                                        <span className="text-xs font-bold text-emerald-500">{stat.unit}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative progress bar at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ delay: 0.5 + idx * 0.1, duration: 1.5 }}
                                    className={`h-full bg-${stat.color}-500 opacity-50`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};