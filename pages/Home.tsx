
import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { BentoFeatures } from '../components/BentoFeatures';
import { ProofSection } from '../components/ProofSection';
import { CTASection } from '../components/CTASection';
import { GlobalCarbonChart } from '../components/GlobalCarbonChart';
import { FAQSection } from '../components/FAQSection';
import { BlockchainSection } from '../components/BlockchainSection';
import { PdfModal } from '../components/ui/PdfModal';
import { SleekBadge } from '../components/ui/SleekBadge';
import { motion, Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';



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
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  return (
    <div className="overflow-hidden">
      <Hero />


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

      {/* Global Plastic Finance Gap Section */}
      <motion.section
        className="py-24 px-6 bg-[#050505] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={staggerSections}
      >
        {/* Subtle Side Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div variants={fadeInUp}>
            <SleekBadge color="neutral" noDot className="mb-8">
              Global Plastic Finance Gap
            </SleekBadge>
            <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tighter text-white mb-8 leading-[1.1]">
              $426B — $1.2T <br /> by 2040
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-md font-light">
              The global financing gap for plastic waste management is projected to grow exponentially. Without intervention, developing economies face mounting environmental and economic costs.
              <br /><br />
              <strong className="text-white font-medium">Source — World Bank</strong>: Financing Plastics Circularity report identifies the scale of investment needed.
            </p>

            <button
              onClick={() => setIsPdfOpen(true)}
              className="group relative inline-flex items-center overflow-hidden px-6 py-3 text-sm font-medium text-white/80 bg-white/[0.04] border border-white/10 rounded-xl hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-md transition-all duration-500 mb-8 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
            >
              <span className="mr-8 transition-opacity duration-500 group-hover:opacity-70">
                Access World Bank Report
              </span>
              <span className="absolute right-1.5 top-1.5 bottom-1.5 z-10 grid w-8 place-items-center rounded-lg bg-white/10 transition-all duration-500 group-hover:w-[calc(100%-0.75rem)] group-active:scale-95">
                <ChevronRight className="w-4 h-4 text-white/70" />
              </span>
            </button>

            <div className="flex gap-12 border-t border-white/5 pt-8">
              <div>
                <div className="text-3xl font-semibold tracking-tight text-white mb-1">$426B</div>
                <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Min. Gap by 2040</div>
              </div>
              <div>
                <div className="text-3xl font-semibold tracking-tight text-white mb-1">$1.2T</div>
                <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Max. Gap by 2040</div>
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

      <PdfModal
        isOpen={isPdfOpen}
        onClose={() => setIsPdfOpen(false)}
        pdfUrl="/pdfs/world-bank-plastics.pdf"
        title="World Bank — Financing Plastics Circularity"
      />

      <motion.div
        id="proof"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <ProofSection />
      </motion.div>


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <FAQSection />
      </motion.div>


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
