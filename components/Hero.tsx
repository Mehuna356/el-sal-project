import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Hero3D } from './Hero3D';
import { Spotlight, GridBackground } from './ui/Spotlight';

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

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-black/[0.96]">
      
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
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <div className="w-1 h-1 bg-emerald-400 rounded-full" />
            <span className="text-sm font-medium tracking-[0.2em] text-emerald-400/80 uppercase">
              Sovereign Energy Infrastructure
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white">
                Turning Waste into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-white filter drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                Strategic Assets
                </span>
            </h1>
          </motion.div>

          {/* Sub-headline with Data */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-lg text-white/70 mb-10 leading-relaxed font-light"
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

      {/* Scroll Indicator */}
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-emerald-400 transition-colors cursor-pointer z-30 group"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold group-hover:tracking-[0.2em] transition-all">Scroll</span>
        <div className="p-2 rounded-full border border-white/10 group-hover:border-emerald-500/50 transition-colors">
            <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </motion.button>

    </section>
  );
};