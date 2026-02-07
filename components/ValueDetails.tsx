import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Flame, ShieldCheck, BarChart3, Lock, RefreshCw, Layers } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: "CODE™ Technology",
    description: "Catalytic Oxygen-Free Waste Decomposition. Our enhanced pyrolysis process converts hydrocarbons and unrecyclable plastics without combustion.",
    stat: "925 Liters/Tonne"
  },
  {
    icon: ShieldCheck,
    title: "Proven Resilience",
    description: "Canadian OEM equipment designed for two decades of reliable operation. Local production eliminates international transport vulnerabilities.",
    stat: "20-Year Lifespan"
  },
  {
    icon: Layers,
    title: "Asset-Backed Value",
    description: "Physical energy infrastructure provides tangible value backing. Token holders participate directly in operational governance.",
    stat: "Tangible Assets"
  },
  {
    icon: BarChart3,
    title: "Real-Time Monitoring",
    description: "Live feedstock conversion metrics and diesel production tracking fed directly to our investor portal for transparency.",
    stat: "Live Data Feed"
  },
  {
    icon: Lock,
    title: "Immutable Records",
    description: "Certified technology meets blockchain transparency. Smart contracts ensure permanent audit trails for all energy security compliance.",
    stat: "On-Chain Audit"
  },
  {
    icon: RefreshCw,
    title: "Automated Distribution",
    description: "Energy security returns distributed on the 15th of each month. Smart contracts handle profit sharing logic automatically.",
    stat: "Monthly Payouts"
  }
];

export const ValueDetails: React.FC = () => {
  return (
    <section id="technology" className="relative py-24 md:py-32 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            Enhanced Pyrolysis for <br />
            <span className="text-emerald-400">Energy Security.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 leading-relaxed"
          >
            The CODE system directly addresses two critical challenges: waste management and energy security. 
            By processing materials that would otherwise require costly disposal, we transform waste streams into strategic energy assets.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between p-8 group">
                <div>
                  <div className="w-12 h-12 mb-6 rounded-lg bg-emerald-950 border border-emerald-900 flex items-center justify-center group-hover:bg-emerald-900/50 group-hover:border-emerald-500/50 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-emerald-500/70">
                    {feature.stat}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};