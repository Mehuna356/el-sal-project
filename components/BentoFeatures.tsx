import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GlowingBorder } from './ui/GlowingBorder';
import { Factory, ShieldCheck, Truck, Link as LinkIcon, Lock, Zap } from 'lucide-react';

const smoothEase = [0.25, 0.4, 0.25, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.0, ease: smoothEase }
  }
};

export const BentoFeatures: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#020402]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: smoothEase }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6"
          >
            Infrastructure of the <br/><span className="text-emerald-400">Future Economy</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            viewport={{ once: true }}
            className="text-white/60 text-lg font-light leading-relaxed"
          >
            Combining industrial-grade engineering with blockchain transparency to create a robust, asset-backed energy ecosystem.
          </motion.p>
        </div>

        {/* BENTO GRID */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]"
        >
          
          {/* 1. CODE TECHNOLOGY (Large, Featured) */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-8 row-span-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] rounded-2xl">
             <GlowingBorder className="h-full">
                <div className="h-full p-8 md:p-12 flex flex-col justify-between relative overflow-hidden bg-[#080808]">
                    {/* Background Animation */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-20">
                        <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] animate-pulse-slow" />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8">
                            <Factory className="w-7 h-7 text-emerald-400" />
                        </div>
                        <h3 className="text-3xl font-semibold tracking-tight text-white mb-4">CODE™ Technology</h3>
                        <p className="text-white/60 text-lg max-w-xl leading-relaxed font-light">
                             Our Catalytic Oxygen-Free Decomposition process is the heart of the system. 
                             Unlike traditional incineration, CODE™ operates in an oxygen-starved environment, 
                             breaking down hydrocarbons without combustion.
                        </p>
                    </div>

                    <div className="relative z-10 mt-8 flex gap-6">
                        <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm">
                            <div className="text-2xl font-semibold tracking-tight text-white">925L</div>
                            <div className="text-xs text-white/40 uppercase tracking-wider font-medium">Yield / Tonne</div>
                        </div>
                         <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm">
                            <div className="text-2xl font-semibold tracking-tight text-white">0%</div>
                            <div className="text-xs text-white/40 uppercase tracking-wider font-medium">Combustion</div>
                        </div>
                    </div>
                </div>
             </GlowingBorder>
          </motion.div>

          {/* 2. BLOCKCHAIN TRANSPARENCY (Tall) */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4 row-span-2 bg-[#080808] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/30 transition-colors flex flex-col shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
              
              <div className="relative z-10 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                      <LinkIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white mb-2">Immutable Audit</h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed">Smart contracts record every liter produced, ensuring total transparency.</p>
              </div>

              {/* Enhanced Blockchain Animation */}
              <div className="mt-auto relative h-48 w-full flex items-center justify-center">
                  <div className="absolute inset-x-4 top-1/2 h-[2px] bg-white/10" />
                  
                  {/* Blocks */}
                  {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-16 h-20 bg-[#0a0a0a] border border-blue-500/30 rounded-xl flex flex-col items-center justify-center shadow-lg z-10"
                        initial={{ x: 100, opacity: 0, scale: 0.8 }}
                        animate={{ 
                            x: [60, -60], // Move left
                            opacity: [0, 1, 1, 0],
                            scale: [0.8, 1, 1, 0.8]
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: i * 1.33
                        }}
                      >
                         <Lock className="w-4 h-4 text-blue-400 mb-1" />
                         <div className="w-8 h-1 bg-blue-500/20 rounded-full" />
                         <div className="w-6 h-1 bg-blue-500/20 rounded-full mt-1" />
                      </motion.div>
                  ))}
                  
                  {/* Connecting Links */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                  </div>
              </div>
          </motion.div>

          {/* 3. SUPPLY CHAIN RESILIENCE */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4 bg-[#080808] border border-white/10 rounded-2xl p-6 relative group overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
               <div className="flex items-center gap-4 mb-4 relative z-10">
                   <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                       <Truck className="w-5 h-5 text-orange-400" />
                   </div>
                   <h3 className="text-lg font-semibold tracking-tight text-white">Supply Resilience</h3>
               </div>
               <p className="text-sm text-white/50 mb-6 relative z-10 font-light leading-relaxed">Local production eliminates reliance on fragile international logistics chains.</p>
               
               {/* Advanced Map Animation */}
               <div className="absolute inset-0 opacity-40">
                    {/* World Map SVG Dots */}
                    <svg className="w-full h-full text-white/10 fill-current" viewBox="0 0 400 200">
                        {/* Simplified Dot Map Representation */}
                        {[...Array(20)].map((_, i) => (
                            <circle key={i} cx={Math.random() * 400} cy={Math.random() * 200} r={Math.random() * 2} />
                        ))}
                        {/* Supply Route */}
                        <path d="M 50,100 Q 200,50 350,100" fill="none" stroke="url(#routeGrad)" strokeWidth="2" strokeDasharray="4,4" />
                        <defs>
                            <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0" stopColor="transparent" />
                                <stop offset="0.5" stopColor="#f97316" />
                                <stop offset="1" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                    </svg>
                    
                    {/* Moving Cargo */}
                    <motion.div 
                        className="absolute top-1/2 left-0 w-3 h-3 bg-orange-500 border border-white rounded-full shadow-[0_0_15px_orange]"
                        animate={{ 
                            offsetDistance: "100%", 
                            x: [0, 300], // Simple translation for demo, in real SVG use motionPath
                            y: [0, -20, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{ top: '50%', left: '10%' }}
                    />
               </div>
          </motion.div>

          {/* 4. ASSET BACKED */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4 bg-[#080808] border border-white/10 rounded-2xl p-6 relative hover:bg-white/5 transition-colors group shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
               <div className="flex items-center gap-4 mb-4">
                   <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                       <ShieldCheck className="w-5 h-5 text-emerald-400" />
                   </div>
                   <h3 className="text-lg font-semibold tracking-tight text-white">Asset Backed</h3>
               </div>
               <p className="text-sm text-white/50 mb-4 font-light">
                   Every token is backed by physical machinery and real estate.
               </p>
               
               {/* Mini Visualization */}
               <div className="flex gap-2">
                   <div className="h-1.5 w-8 rounded-full bg-emerald-500" />
                   <div className="h-1.5 w-8 rounded-full bg-emerald-500/50" />
                   <div className="h-1.5 w-8 rounded-full bg-emerald-500/20" />
               </div>
          </motion.div>
          
           {/* 5. 24/7 Monitoring */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4 bg-[#080808] border border-white/10 rounded-2xl p-6 relative hover:bg-white/5 transition-colors group shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
               <div className="flex items-center gap-4 mb-4">
                   <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                       <Zap className="w-5 h-5 text-purple-400" />
                   </div>
                   <h3 className="text-lg font-semibold tracking-tight text-white">24/7 Monitoring</h3>
               </div>
               <p className="text-sm text-white/50 mb-4 font-light">
                   Real-time data feeds from the facility ensure optimal performance.
               </p>

                {/* Live Pulse Viz */}
               <div className="flex items-end gap-1 h-6">
                   {[40, 70, 50, 90, 60, 80].map((h, i) => (
                       <motion.div 
                        key={i}
                        className="w-1.5 bg-purple-500/50 rounded-t-sm"
                        animate={{ height: [`${h}%`, `${h * 0.5}%`, `${h}%`] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                       />
                   ))}
               </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};