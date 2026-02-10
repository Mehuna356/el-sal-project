import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const smoothEase = [0.25, 0.4, 0.25, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: smoothEase }
  }
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      initial={false}
      onClick={onClick}
      onKeyDown={(e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer h-full ${isOpen
        ? 'bg-[#0a0a0a] border-emerald-500/50 shadow-[0_20px_40px_-10px_rgba(16,185,129,0.1)]'
        : 'bg-[#050505] border-white/5 hover:border-emerald-500/30 hover:bg-[#080808] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
        }`}
    >
      {/* Background Glow for active state */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4">
          <h3 className={`text-lg font-display font-medium leading-snug transition-colors duration-300 pr-4 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
            {question}
          </h3>
          <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen
            ? 'bg-emerald-500 border-emerald-400 text-black shadow-[0_0_10px_rgba(16,185,129,0.4)]'
            : 'bg-transparent border-white/10 text-white/50 group-hover:border-emerald-500/50 group-hover:text-emerald-400'
            }`}>
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <p className="text-white/50 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4 font-light">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How are profits distributed to token holders?",
      answer: "Project profits are distributed through a pre-defined payout model. Token holders receive automated allocation-based distributions, based on the project’s net performance and the project’s distribution schedule."
    },
    {
      question: "What does the token represent?",
      answer: "Each token represents a structured participation unit tied to a specific project’s return framework — designed for transparent accounting, predictable pricing, and scalable investor access."
    },
    {
      question: "Why use USDT instead of volatile crypto?",
      answer: "USDT settlement helps reduce crypto price volatility, making the model easier to understand for traditional and institutional investors while keeping transactions global and efficient."
    },
    {
      question: "How is the token price determined?",
      answer: "Tokens are issued at a fixed entry price (e.g., 1 USDT) to keep onboarding simple and eliminate speculative pricing mechanics during participation."
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-[#050505] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020402_80%)] pointer-events-none" />

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-900/40 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: smoothEase }}
            className="text-white/50 text-lg max-w-xl mx-auto font-light"
          >
            Find quick answers to common questions about our RWA tokenization model.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="h-full"
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};