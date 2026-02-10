import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Hero3D } from './Hero3D';
import { Spotlight, GridBackground } from './ui/Spotlight';
import { AnimatedShinyText } from './ui/AnimatedShinyText';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.0, ease: [0.25, 0.4, 0.25, 1] }
  }
};

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

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const navigate = useNavigate();

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 60]);



  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-black">

      {/* --- NEW SPOTLIGHT & GRID EFFECT --- */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 z-10" />
      <GridBackground />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-20">

        {/* Text Content */}
        <motion.div
          style={{ opacity, y }}
          className="relative z-20 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtle Hook Text */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="group rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-sm text-base transition-all ease-in hover:cursor-pointer hover:bg-white/[0.06] inline-flex">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70 transition ease-out hover:text-white/90 hover:duration-300">
                <span className="relative flex h-1.5 w-1.5 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]"></span>
                </span>
                Sovereign Energy Infrastructure
              </AnimatedShinyText>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              Turning Waste into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-white filter drop-shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                Strategic Assets
              </span>
            </h1>
          </motion.div>

          {/* Sub-headline with Data */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-lg text-white/70 mb-8 leading-relaxed font-light"
          >
            Deploying <strong className="text-white font-medium">35 Tonnes/Day</strong> pyrolysis infrastructure to secure energy independence and eliminate plastic pollution.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[180px]"
              onClick={() => navigate('/projects/el-salvador')}
            >
              View Project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[180px]"
              onClick={() => navigate('/technology')}
            >
              Our Technology
            </Button>
          </motion.div>
        </motion.div>

        {/* 3D Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
          className="relative z-10"
        >
          <Hero3D />

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        </motion.div>

      </div>



    </section>
  );
};