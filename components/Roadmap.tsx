import React from 'react';
import { motion } from 'framer-motion';

interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status?: "done" | "in-progress" | "upcoming";
}

const items: RoadmapItem[] = [
  {
    quarter: "Q1 2026 - Q2 2026",
    title: "Pre-development & ITO",
    description: "Initial Token Offering launch and finalization of pre-development regulatory frameworks.",
    status: "upcoming"
  },
  {
    quarter: "Q3 2026 - Q4 2026",
    title: "Infra Development",
    description: "Global Investment Period closes. Commencement of heavy infrastructure deployment.",
    status: "upcoming"
  },
  {
    quarter: "Q1 2027",
    title: "Production Begins",
    description: "Facility commissioning and start of commercial scale energy production.",
    status: "upcoming"
  },
  {
    quarter: "Q1 2027",
    title: "First Energy Returns",
    description: "Revenue generation cycle begins with initial distributions to token holders.",
    status: "upcoming"
  }
];

export const Roadmap: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      
      {/* Header */}
      <div className="mb-12">
          <h2 className="text-3xl font-display font-semibold text-white mb-2">Project Timeline</h2>
          <p className="text-white/50">Strategic execution plan for the upcoming MPTP deployment.</p>
      </div>

      {/* Card Container */}
      <div className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden group">
          {/* Subtle Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-0 right-0 top-5 h-px bg-white/10" />

            <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4">
              {items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative md:pt-12 text-left md:text-center w-full md:w-1/4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`
                        hidden md:flex absolute left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full items-center justify-center z-10
                        ${index === 0 ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" : "bg-[#1a1a1a] border border-white/20"}
                      `}
                    >
                      <div className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-black" : "bg-white/50"}`} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex flex-col md:items-center">
                        <span className={`
                            inline-block w-fit mb-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                            ${index === 0 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-white/5 text-white/40 border border-white/5"}
                        `}>
                            {item.quarter}
                        </span>

                        <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-sm text-white/50 leading-relaxed max-w-[200px] mx-0 md:mx-auto">
                        {item.description}
                        </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
      </div>
    </div>
  );
};