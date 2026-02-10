import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from './ui/Button';
import { Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Blended Background Gradient - Matches #020402 from previous section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505] to-emerald-950/20" />

      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-white mb-6"
        >
          Energy Security Profit <br />
          <span className="text-emerald-400">Starts Here</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Join the sovereign energy revolution. Smart contracts handle all distributions automatically.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/projects/el-salvador')}
          >
            Discover Projects <Compass className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/technology')}
          >
            Explore Technology
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};