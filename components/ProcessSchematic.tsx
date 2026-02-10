import React from 'react';
import { motion } from 'framer-motion';
import {
  Recycle,
  Cpu,
  Droplets,
  Layers,
  Leaf,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';

const smoothEase = [0.25, 0.4, 0.25, 1];

/* ── Shared card style ──────────────────────────────────── */
const StepCard = ({
  icon: Icon,
  label,
  sub,
  color,
  delay,
}: {
  icon: any;
  label: string;
  sub: string;
  color: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6, ease: smoothEase }}
    className="flex items-center gap-4 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] px-5 py-4 group hover:border-white/15 transition-colors"
  >
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
      style={{ backgroundColor: `${color}15` }}
    >
      <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.5} />
    </div>
    <div className="min-w-0">
      <p className="text-sm font-semibold text-white tracking-tight leading-none mb-1">
        {label}
      </p>
      <p className="text-[11px] text-white/40 leading-tight">{sub}</p>
    </div>
  </motion.div>
);

/* ── Animated connector arrow ──────────────────────────── */
const Connector = ({ vertical = false }: { vertical?: boolean }) => (
  <div
    className={`flex items-center justify-center ${vertical ? 'py-1' : 'px-1'}`}
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Dashed line */}
      <div
        className={`${vertical ? 'w-px h-8' : 'h-px w-8'
          } bg-gradient-to-${vertical ? 'b' : 'r'} from-emerald-500/40 to-white/10`}
        style={{
          backgroundImage: vertical
            ? 'linear-gradient(to bottom, rgba(16,185,129,0.4) 50%, transparent 50%)'
            : 'linear-gradient(to right, rgba(16,185,129,0.4) 50%, transparent 50%)',
          backgroundSize: vertical ? '1px 6px' : '6px 1px',
        }}
      />
      {/* Animated dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.6)]"
        style={
          vertical
            ? { left: '50%', transform: 'translateX(-50%)' }
            : { top: '50%', transform: 'translateY(-50%)' }
        }
        animate={
          vertical ? { top: ['0%', '100%', '0%'] } : { left: ['0%', '100%', '0%'] }
        }
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  </div>
);

/* ── Core processor badge ──────────────────────────────── */
const CoreBadge = () => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: smoothEase }}
    className="relative w-full max-w-[160px] mx-auto aspect-square rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.12)]"
  >
    {/* Inner glow */}
    <div className="absolute inset-0 rounded-2xl bg-emerald-500/5" />

    <div className="relative z-10 flex flex-col items-center gap-2">
      <Cpu className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.6)]" />
        <span className="text-[10px] font-bold text-white tracking-widest uppercase">
          CODE™
        </span>
      </div>
    </div>

    {/* Decorative brackets */}
    <div className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-1 bg-white/10 rounded-full" />
    <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-8 w-1 bg-white/10 rounded-full" />
  </motion.div>
);

export const ProcessSchematic: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto bg-black rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* ─── MOBILE LAYOUT (vertical) ─── */}
      <div className="relative z-10 flex flex-col items-center gap-2 p-6 md:hidden">
        {/* Input */}
        <div className="w-full">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3 text-center">
            Input
          </p>
          <StepCard
            icon={Recycle}
            label="Plastics"
            sub="Mixed waste feedstock"
            color="#60a5fa"
            delay={0.1}
          />
        </div>

        <Connector vertical />

        {/* Core */}
        <CoreBadge />

        <Connector vertical />

        {/* Outputs */}
        <div className="w-full space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1 text-center">
            Outputs
          </p>
          <StepCard
            icon={Droplets}
            label="Liquid Fuels"
            sub="Diesel-grade output"
            color="#34d399"
            delay={0.4}
          />
          <StepCard
            icon={Layers}
            label="Syn. Graphite"
            sub="Industrial carbon"
            color="#e2e8f0"
            delay={0.5}
          />
          <StepCard
            icon={Leaf}
            label="Plastic Credits"
            sub="Verified offsets"
            color="#4ade80"
            delay={0.6}
          />
        </div>
      </div>

      {/* ─── DESKTOP LAYOUT (horizontal, 3-column) ─── */}
      <div className="relative z-10 hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 p-10">
        {/* Left — Input */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">
            Input
          </p>
          <StepCard
            icon={Recycle}
            label="Plastics"
            sub="Mixed waste feedstock"
            color="#60a5fa"
            delay={0.1}
          />
        </div>

        {/* Center — Core with connectors */}
        <div className="flex items-center gap-3">
          <Connector />
          <CoreBadge />
          <Connector />
        </div>

        {/* Right — Outputs */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">
            Outputs
          </p>
          <StepCard
            icon={Droplets}
            label="Liquid Fuels"
            sub="Diesel-grade output"
            color="#34d399"
            delay={0.4}
          />
          <StepCard
            icon={Layers}
            label="Syn. Graphite"
            sub="Industrial carbon"
            color="#e2e8f0"
            delay={0.5}
          />
          <StepCard
            icon={Leaf}
            label="Plastic Credits"
            sub="Verified offsets"
            color="#4ade80"
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
};