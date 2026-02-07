import React from 'react';
import { motion } from 'framer-motion';
import { Coins, ShieldCheck, Droplets } from 'lucide-react';

const cards = [
  {
    title: "Import Substitution",
    description: "Produces 9.3M liters of domestic diesel annually. Improves Balance of Payments by keeping USD circulating within the local economy rather than exiting to foreign oil producers.",
    icon: Coins,
    color: "from-amber-400/20 to-orange-500/20",
    glowColor: "bg-amber-500",
    textAccent: "text-amber-400",
    borderColor: "group-hover:border-amber-500/30"
  },
  {
    title: "Energy Security",
    description: "Turns a perpetual liability (waste) into a strategic asset (fuel). Creates a sovereign energy buffer against global supply chain disruptions.",
    icon: ShieldCheck,
    color: "from-emerald-400/20 to-teal-500/20",
    glowColor: "bg-emerald-500",
    textAccent: "text-emerald-400",
    borderColor: "group-hover:border-emerald-500/30"
  },
  {
    title: "Environmental Sovereignty",
    description: "Directly finances cleanup of waterways without reliance on foreign aid or NGOs, asserting national control over environmental remediation.",
    icon: Droplets,
    color: "from-cyan-400/20 to-blue-500/20",
    glowColor: "bg-cyan-500",
    textAccent: "text-cyan-400",
    borderColor: "group-hover:border-cyan-500/30"
  }
];

export const StrategicValueCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, idx) => (
        <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className={`group relative h-full rounded-[2.5rem] bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/5 p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${card.borderColor}`}
        >
            {/* Dynamic Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            {/* Internal Glow Blob */}
            <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full ${card.glowColor} opacity-10 blur-[80px] group-hover:opacity-20 transition-all duration-700`} />
            
            {/* Bottom Glow Blob */}
            <div className={`absolute -bottom-24 -left-24 w-64 h-64 rounded-full ${card.glowColor} opacity-5 blur-[80px] group-hover:opacity-15 transition-all duration-700`} />

            {/* Large Watermark Icon */}
            <card.icon 
                className={`absolute -bottom-8 -right-8 w-48 h-48 stroke-[0.5] opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 -rotate-12 ${card.textAccent}`} 
            />

            {/* Content Content */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className="mb-8 relative">
                    <motion.div 
                        variants={{
                            hover: { scale: 1.1, rotate: 10 }
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg"
                    >
                        <card.icon className={`w-8 h-8 ${card.textAccent}`} strokeWidth={1.5} />
                    </motion.div>
                    {/* Icon Glow */}
                    <div className={`absolute inset-0 rounded-2xl ${card.glowColor} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none`} />
                </div>

                <div className="mb-4">
                    <h3 className="text-3xl font-display font-bold text-white tracking-tight leading-tight">
                        {card.title.split(' ').map((word, i) => (
                            <span key={i} className="block">{word}</span>
                        ))}
                    </h3>
                </div>
                
                <p className="text-base text-white/60 font-light leading-relaxed mb-10 group-hover:text-white/80 transition-colors">
                    {card.description}
                </p>

                {/* Footer Number */}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
                     <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white/50 transition-colors">0{idx + 1}</span>
                     <div className={`h-1.5 w-1.5 rounded-full ${card.textAccent.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor]`} />
                </div>
            </div>
        </motion.div>
      ))}
    </div>
  );
};