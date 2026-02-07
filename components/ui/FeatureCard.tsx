import React from 'react';
import { cn } from '../../lib/utils';
import { GridPattern } from './GridPattern';
import { motion } from 'framer-motion';

type FeatureType = {
  title: string;
  icon: React.ElementType;
  description: string;
};

type FeatureCardProps = React.ComponentProps<typeof motion.div> & {
  feature: FeatureType;
};

function genRandomPattern(length = 5): number[][] {
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 1,
    Math.floor(Math.random() * 6) + 1,
  ]);
}

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const squares = React.useMemo(() => genRandomPattern(6), []);

  return (
    <motion.div 
      whileHover="hover"
      className={cn(
        'relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 transition-all hover:border-emerald-500/30 group',
        className
      )} 
      {...props}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={squares}
            className="absolute inset-0 h-full w-full fill-white/10 stroke-white/10 mix-blend-overlay"
          />
        </div>
      </div>

      <div className="relative z-10">
        <motion.div 
            variants={{
                hover: { scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }
            }}
            className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-emerald-400 transition-colors duration-300"
        >
             <feature.icon className="h-6 w-6" strokeWidth={1.5} />
        </motion.div>
        
        <h3 className="mb-2 text-xl font-bold text-white tracking-tight">{feature.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed font-light">{feature.description}</p>
      </div>
    </motion.div>
  );
}