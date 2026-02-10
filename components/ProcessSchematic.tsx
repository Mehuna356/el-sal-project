import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Recycle,
  Cpu,
  Droplets,
  Layers,
  Leaf,
} from 'lucide-react';
import { AnimatedBeam } from './ui/AnimatedBeam';

const smoothEase = [0.25, 0.4, 0.25, 1];

/* ── Circle Node (input/output) ───────────────────────── */
const CircleNode = React.forwardRef<
  HTMLDivElement,
  { icon: any; label: string; color: string; delay: number }
>(({ icon: Icon, label, color, delay }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: smoothEase }}
    className="relative z-10 flex flex-col items-center gap-2"
  >
    <div
      className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#0a0a0a] border border-white/[0.08] flex items-center justify-center shadow-lg hover:border-white/20 transition-colors"
      style={{ boxShadow: `0 0 20px ${color}10` }}
    >
      <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color }} strokeWidth={1.5} />
    </div>
    <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-white/50 text-center leading-tight">
      {label}
    </span>
  </motion.div>
));

CircleNode.displayName = 'CircleNode';

/* ── Core processor (center) ──────────────────────────── */
const CoreNode = React.forwardRef<HTMLDivElement, {}>((_props, ref) => (
  <motion.div
    ref={ref}
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.6, ease: smoothEase }}
    className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#050505] border border-emerald-500/20 flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.12)]"
  >
    {/* Inner glow */}
    <div className="absolute inset-0 rounded-2xl bg-emerald-500/5" />

    {/* Simple rounded code icon */}
    <div className="relative z-10 flex flex-col items-center gap-1.5">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 md:w-6 md:h-6 text-emerald-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>
      <span className="text-[8px] md:text-[9px] font-bold text-white/60 tracking-[0.2em] uppercase">
        CODE™
      </span>
    </div>

    {/* Decorative side accents */}
    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 h-6 w-0.5 bg-emerald-500/20 rounded-full" />
    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 h-6 w-0.5 bg-emerald-500/20 rounded-full" />
  </motion.div>
));

CoreNode.displayName = 'CoreNode';

/* ── Main Component ───────────────────────────────────── */
export const ProcessSchematic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Input ref
  const inputRef = useRef<HTMLDivElement>(null);

  // Core ref
  const coreRef = useRef<HTMLDivElement>(null);

  // Output refs
  const output1Ref = useRef<HTMLDivElement>(null);
  const output2Ref = useRef<HTMLDivElement>(null);
  const output3Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto bg-black rounded-3xl border border-white/5 overflow-hidden shadow-2xl"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black via-transparent to-black" />

      {/* ─── MOBILE LAYOUT (vertical flow) ─── */}
      <div className="relative flex flex-col items-center gap-8 p-8 md:hidden">
        {/* Input */}
        <div className="flex flex-col items-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 mb-3">Input</p>
          <CircleNode ref={inputRef} icon={Recycle} label="Plastics" color="#60a5fa" delay={0.1} />
        </div>

        {/* Vertical connector */}
        <div className="relative h-12 w-px">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 to-emerald-500/30" />
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] left-1/2 -translate-x-1/2"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Core */}
        <CoreNode ref={coreRef} />

        {/* Vertical connector */}
        <div className="relative h-12 w-px">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/30 to-green-400/30" />
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] left-1/2 -translate-x-1/2"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
        </div>

        {/* Outputs */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">Outputs</p>
          <div className="flex gap-6">
            <CircleNode ref={output1Ref} icon={Droplets} label="Liquid Fuels" color="#34d399" delay={0.5} />
            <CircleNode ref={output2Ref} icon={Layers} label="Syn. Graphite" color="#e2e8f0" delay={0.6} />
            <CircleNode ref={output3Ref} icon={Leaf} label="Credits" color="#4ade80" delay={0.7} />
          </div>
        </div>
      </div>

      {/* ─── DESKTOP LAYOUT with AnimatedBeam ─── */}
      <div className="relative hidden md:flex items-center justify-between gap-4 p-12 min-h-[300px]">
        {/* Input column */}
        <div className="flex flex-col items-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 mb-4">Input</p>
          <CircleNode ref={inputRef} icon={Recycle} label="Plastics" color="#60a5fa" delay={0.1} />
        </div>

        {/* Core (center) */}
        <CoreNode ref={coreRef} />

        {/* Output column */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">Outputs</p>
          <CircleNode ref={output1Ref} icon={Droplets} label="Liquid Fuels" color="#34d399" delay={0.5} />
          <CircleNode ref={output2Ref} icon={Layers} label="Syn. Graphite" color="#e2e8f0" delay={0.6} />
          <CircleNode ref={output3Ref} icon={Leaf} label="Plastic Credits" color="#4ade80" delay={0.7} />
        </div>

        {/* ── Animated Beams ── */}
        {/* Input → Core */}
        <AnimatedBeam
          containerRef={containerRef as React.RefObject<HTMLElement>}
          fromRef={inputRef as React.RefObject<HTMLElement>}
          toRef={coreRef as React.RefObject<HTMLElement>}
          duration={3}
          gradientStartColor="#3b82f6"
          gradientStopColor="#10b981"
          pathWidth={2}
        />

        {/* Core → Output 1 */}
        <AnimatedBeam
          containerRef={containerRef as React.RefObject<HTMLElement>}
          fromRef={coreRef as React.RefObject<HTMLElement>}
          toRef={output1Ref as React.RefObject<HTMLElement>}
          duration={3}
          curvature={-30}
          delay={0.5}
          gradientStartColor="#10b981"
          gradientStopColor="#34d399"
          pathWidth={2}
        />

        {/* Core → Output 2 */}
        <AnimatedBeam
          containerRef={containerRef as React.RefObject<HTMLElement>}
          fromRef={coreRef as React.RefObject<HTMLElement>}
          toRef={output2Ref as React.RefObject<HTMLElement>}
          duration={3}
          delay={1}
          gradientStartColor="#10b981"
          gradientStopColor="#34d399"
          pathWidth={2}
        />

        {/* Core → Output 3 */}
        <AnimatedBeam
          containerRef={containerRef as React.RefObject<HTMLElement>}
          fromRef={coreRef as React.RefObject<HTMLElement>}
          toRef={output3Ref as React.RefObject<HTMLElement>}
          duration={3}
          curvature={30}
          delay={1.5}
          gradientStartColor="#10b981"
          gradientStopColor="#34d399"
          pathWidth={2}
        />
      </div>
    </div>
  );
};