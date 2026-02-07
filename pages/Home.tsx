import React from 'react';
import { Hero } from '../components/Hero';
import { BentoFeatures } from '../components/BentoFeatures';
import { ProofSection } from '../components/ProofSection';
import { CTASection } from '../components/CTASection';
import { GlobalCarbonChart } from '../components/GlobalCarbonChart';
import { FAQSection } from '../components/FAQSection';
import { BlockchainSection } from '../components/BlockchainSection';
import { motion, Variants } from 'framer-motion';

const SectionDivider = () => (
    <div className="relative w-full h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-emerald-400/50 blur-[2px]" />
    </div>
);

// Premium smooth easing for that "high-end" feel
const smoothEase = [0.25, 0.4, 0.25, 1];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 1.0, 
      ease: smoothEase 
    }
  }
};

const staggerSections: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      
      <SectionDivider />

      <motion.div 
        id="value" 
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }} // Triggers when 10% into view
        variants={fadeInUp}
      >
        {/* Soft gradient fade for section transition */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />
        <BentoFeatures />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }}
        variants={fadeInUp}
      >
        <BlockchainSection />
      </motion.div>

      {/* Dedicated Carbon Credits Section */}
      <motion.section 
        className="py-20 px-6 bg-[#050505] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={staggerSections}
      >
        {/* Subtle Side Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div variants={fadeInUp}>
                <h3 className="text-emerald-400 font-medium tracking-widest uppercase text-xs mb-6 pl-1">
                  Global Carbon Deficit
                </h3>
                <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tighter text-white mb-8 leading-[1.1]">
                    $250 Billion <br/> by 2050
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md font-light">
                    The global market for voluntary carbon offsets is accelerating. As industries race to Net Zero, high-quality, verified removal credits are becoming the world's most valuable commodity.
                    <br/><br/>
                    <strong className="text-white font-medium">Morgan Stanley</strong> projects a 100x market expansion over the next three decades.
                </p>
                
                <div className="flex gap-12 border-t border-white/5 pt-8">
                    <div>
                        <div className="text-3xl font-semibold tracking-tight text-white mb-1">15x</div>
                        <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Growth by 2030</div>
                    </div>
                     <div>
                        <div className="text-3xl font-semibold tracking-tight text-white mb-1">100x</div>
                        <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Growth by 2050</div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={fadeInUp}
                className="h-[500px] w-full"
            >
                <div className="shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] rounded-3xl h-full transform transition-transform hover:scale-[1.02] duration-700">
                    <GlobalCarbonChart />
                </div>
            </motion.div>
        </div>
      </motion.section>

      <motion.div 
        id="proof"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <ProofSection />
      </motion.div>
      
      <SectionDivider />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <FAQSection />
      </motion.div>

      <SectionDivider />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <CTASection />
      </motion.div>
    </div>
  );
};