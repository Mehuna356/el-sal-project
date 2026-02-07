import React from 'react';
import { motion } from 'framer-motion';
import { Mexico3DMap } from '../components/Mexico3DMap';
import { ROICalculator } from '../components/ROICalculator';
import { Button } from '../components/ui/Button';
import { CyberneticBentoGrid } from '../components/ui/CyberneticBentoGrid';
import { RoadmapCard } from '../components/ui/RoadmapCard';
import { HaloCard } from '../components/ui/HaloCard';
import RotatingEarth from '../components/RotatingEarth';
import { 
    Factory, 
    TrendingUp, 
    ShieldAlert, 
    Globe, 
    ArrowRight,
    Landmark,
    ShieldCheck,
    Coins,
    FileCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const bentoItems = [
    {
        title: "Supply Vulnerability",
        description: "Mexico imports ~70% of its diesel. Chronic undersupply creates strategic vulnerability for industrial sectors.",
        icon: <ShieldAlert className="w-5 h-5 text-red-400" />,
        tags: ["Market Gap", "Strategic"],
        colSpan: 1,
        status: "Critical"
    },
    {
        title: "Industrial Expansion",
        description: "Friend-shoring manufacturing growth drives energy demand. New factories require guaranteed baseload fuel.",
        icon: <Factory className="w-5 h-5 text-blue-400" />,
        tags: ["Growth", "Demand"],
        colSpan: 1,
    },
    {
        title: "Domestic Production",
        description: "Local fuel production reduces import dependencies. 5-year secured offtake agreement validates market demand.",
        icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
        tags: ["Secured", "Local"],
        colSpan: 1,
        status: "Upcoming"
    },
    {
        title: "Asset-Backed Security",
        description: "Every token is backed by real-world machinery and land title. Smart contracts provide immutable ownership records.",
        icon: <ShieldCheck className="w-5 h-5 text-white" />,
        tags: ["RWA", "Blockchain"],
        colSpan: 2,
    },
    {
        title: "Global Compliance",
        description: "Regulated under DIFC & Mexican Energy Law.",
        icon: <Globe className="w-5 h-5 text-sky-400" />,
        tags: ["Legal", "Audit"],
        colSpan: 1,
    }
];

const roadmapItems = [
  {
    quarter: "Q1 2026 - Q2 2026",
    title: "Pre-development & ITO",
    description: "Initial Token Offering launch and finalization of pre-development regulatory frameworks.",
    status: "upcoming" as const
  },
  {
    quarter: "Q3 2026 - Q4 2026",
    title: "Infra Development",
    description: "Global Investment Period closes. Commencement of heavy infrastructure deployment.",
    status: "upcoming" as const
  },
  {
    quarter: "Q1 2027",
    title: "Energy Production Begins",
    description: "Facility commissioning and start of commercial scale energy production.",
    status: "upcoming" as const
  },
  {
    quarter: "Q1 2027",
    title: "First Energy Returns",
    description: "Revenue generation cycle begins with initial distributions to token holders.",
    status: "upcoming" as const
  }
];

export const MPTPPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black font-sans text-white">
      
      {/* SECTION 1: HERO */}
      <section className="relative px-6 mb-24 md:mb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            animate="show"
            variants={container}
            className="relative z-10 order-2 lg:order-1"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/20 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-20"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Upcoming Project</span>
            </motion.div>
            
            <motion.h1 variants={item} className="text-5xl md:text-7xl font-display font-semibold text-white mb-6 leading-[1.05] tracking-tight">
              Mexico Plastic <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-emerald-200">
                Tokenization.
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed font-light">
              Transforming 75 tonnes of daily waste into renewable diesel. Addressing chronic energy shortages with a high-yield, asset-backed recovery model.
            </motion.p>

          </motion.div>

          {/* Map Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2"
          >
            <Mexico3DMap />
             
             {/* Floating Stats Cards around Map */}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-10 right-0 md:-right-4 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hidden md:block"
             >
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-bold">Conversion Yield</div>
                <div className="text-xl font-bold text-emerald-400 font-mono">925 L <span className="text-sm text-white">/ Tonne</span></div>
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute bottom-20 left-0 md:-left-4 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hidden md:block"
             >
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-bold">Monthly Output</div>
                <div className="text-xl font-bold text-white font-mono">2.08M <span className="text-sm text-emerald-400">Liters</span></div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: BENTO GRID STRATEGY (UPDATED with Cybernetic Grid) */}
      <section className="px-6 mb-32">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-4">Strategic Drivers</h2>
            <p className="text-white/50 text-lg">Why this infrastructure is critical for the region right now.</p>
        </div>
        <CyberneticBentoGrid items={bentoItems} />
      </section>

      {/* SECTION 3: KEY METRICS STRIP */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5 mb-32">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {[
                    { label: "Annual Liters", val: "25.3M", sub: "Domestic Capacity" },
                    { label: "20-Year Output", val: "506M", sub: "Long-term Security" },
                    { label: "Waste Recovery", val: "100%", sub: "Circular Efficiency" },
                    { label: "Annual ROI", val: "35.76%", sub: "Post-Recovery Est." },
                ].map((stat, i) => (
                    <div key={i} className="text-center group cursor-default">
                        <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-2 group-hover:from-emerald-300 group-hover:to-emerald-600 transition-all duration-500 tracking-tight">
                            {stat.val}
                        </div>
                        <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
                        <div className="text-xs text-white/40 font-medium">{stat.sub}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 4: STRUCTURED RETURNS */}
      <section className="px-6 mb-32 max-w-6xl mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6">Structured Returns Strategy</h2>
            <p className="text-white/60 text-lg leading-relaxed font-light">
                A dual-phase mechanism prioritizing rapid capital recovery followed by long-term passive income. 
                Settled exclusively in <span className="text-white font-medium">USDT</span> to eliminate volatility.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Phase 1 Card */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
                 <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                            <Coins className="text-white w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500 text-black">Priority Phase</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">Phase 1: Recovery</h3>
                    <p className="text-emerald-400 font-mono text-sm mb-6">Months 1 — 16</p>
                    
                    <p className="text-white/60 leading-relaxed mb-8">
                        100% of distributable cash flow is allocated to investors until principal capital is fully repaid. This de-risks the position early in the project lifecycle.
                    </p>

                    {/* Animated Bar Visual */}
                    <div className="h-24 bg-black/50 rounded-xl border border-white/5 relative flex items-end p-4 overflow-hidden">
                         <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:10px_10px]" />
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-3 w-full bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]"
                         />
                         <div className="absolute top-3 right-4 text-xs font-mono text-emerald-400">100% ALLOCATION</div>
                    </div>
                 </div>
            </motion.div>

            {/* Phase 2 Card */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
                 <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                            <TrendingUp className="text-white w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white/50">Future Phase</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">Phase 2: Profit Share</h3>
                    <p className="text-emerald-400 font-mono text-sm mb-6">Month 17 — Year 20</p>
                    
                    <p className="text-white/60 leading-relaxed mb-8">
                        Investors retain a 40% Net Profit Share for the remaining 18+ years. This provides sustained, passive income backed by diesel sales contracts.
                    </p>

                    {/* Animated Graph Visual */}
                    <div className="h-24 bg-black/50 rounded-xl border border-white/5 relative flex items-end p-4 gap-2">
                         {[30, 45, 40, 60, 55, 75, 70, 90].map((h, i) => (
                             <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex-1 bg-white/10 rounded-t-sm hover:bg-emerald-500/80 transition-colors"
                             />
                         ))}
                         <div className="absolute top-3 right-4 text-xs font-mono text-white/40">PASSIVE GROWTH</div>
                    </div>
                 </div>
            </motion.div>

        </div>
      </section>

      {/* SECTION 5: ROADMAP (UPDATED UI) */}
      <section className="bg-white/[0.02] border-y border-white/5 py-24">
        <div className="px-6">
          <RoadmapCard 
            items={roadmapItems} 
            title="Project Roadmap" 
            description="Timeline and Releases"
          />
        </div>
      </section>

      {/* SECTION 6: CALCULATOR */}
      <section className="px-6 py-32 max-w-6xl mx-auto">
        <ROICalculator />
      </section>

      {/* SECTION 7: ESG & GLOBAL FRAMEWORK (ENHANCED) */}
      <section className="px-6 mb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Left: Environmental Synergy */}
             <HaloCard className="h-full">
                <div className="p-10 flex flex-col justify-between h-full relative z-10">
                    <div>
                         <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                            <FileCheck className="w-5 h-5 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-4">Environmental Synergy</h3>
                        <p className="text-white/60 leading-relaxed text-sm mb-8">
                            Demonstrating that high returns and environmental stewardship are compatible.
                            Creating a local circular economy that eliminates disposal costs.
                        </p>
                         <ul className="space-y-4">
                            {[
                                "Eliminates 547,500 tonnes of waste",
                                "Reduces fuel transport carbon footprint",
                                "Creates independent renewable energy supply"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
             </HaloCard>

             {/* Right: Investment Compatibility & Earth */}
             <HaloCard className="h-full min-h-[500px]">
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <RotatingEarth />
                </div>

                {/* Labels Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {/* Dubai Label - Top Rightish */}
                    <motion.div 
                        className="absolute top-1/4 right-1/4 bg-black/80 border border-emerald-500/30 px-3 py-1 rounded-full text-xs text-emerald-400 backdrop-blur-md"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Dubai HQ
                    </motion.div>
                    
                    {/* Mexico Label - Bottom Leftish */}
                    <motion.div 
                        className="absolute bottom-1/3 left-1/4 bg-black/80 border border-white/10 px-3 py-1 rounded-full text-xs text-white/60 backdrop-blur-md"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        Mexico Facility
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 z-10 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
                     <div className="flex items-start gap-4">
                         <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
                             <Landmark className="w-6 h-6 text-white" />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-white mb-1">Cross-Border Framework</h3>
                            <p className="text-sm text-white/50">
                                Fully regulated structure bridging Dubai (DIFC) capital markets with Mexican energy infrastructure. 
                                Designed for institutional-grade compliance.
                            </p>
                         </div>
                     </div>
                </div>
             </HaloCard>
        </div>
      </section>
      
      {/* Bottom CTA */}
       <section className="px-6 max-w-4xl mx-auto text-center mb-12">
           <h2 className="text-4xl font-display font-bold text-white mb-8 tracking-tight">Secure Your Allocation</h2>
           <Button 
                variant="primary" 
                size="lg" 
                className="px-12 py-4 text-xl shadow-[0_0_40px_rgba(16,185,129,0.2)]"
                onClick={() => navigate('/contact')}
           >
               Contact Us <ArrowRight className="ml-2 w-5 h-5" />
           </Button>
       </section>

    </div>
  );
};