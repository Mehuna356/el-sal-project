import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trash2, 
  Recycle, 
  CircleDot, 
  Stethoscope, 
  Cpu, 
  Droplets, 
  Layers, 
  Hammer, 
  Sparkles, 
  Leaf,
  Zap
} from 'lucide-react';

const NodeLabel = ({ children, align = 'left' }: { children?: React.ReactNode, align?: 'left' | 'right' | 'center' }) => (
  <div className={`absolute top-full mt-2 w-32 ${align === 'right' ? 'right-0 text-right' : align === 'center' ? 'left-1/2 -translate-x-1/2 text-center' : 'left-0 text-left'}`}>
    <span className="text-[10px] font-semibold uppercase tracking-wide text-white/50 leading-tight block">
      {children}
    </span>
  </div>
);

const InputNode = ({ icon: Icon, label, color, delay, y }: any) => (
  <motion.div 
    initial={{ x: -20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="absolute left-[25%] w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-20 group hover:border-white/30 transition-colors"
    style={{ top: y }}
  >
    <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.5} />
    <NodeLabel align="center">{label}</NodeLabel>
    
    {/* Connector Dot */}
    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
  </motion.div>
);

const OutputNode = ({ icon: Icon, label, color, delay, y }: any) => (
  <motion.div 
    initial={{ x: 20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="absolute right-[25%] w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-20 group hover:border-white/30 transition-colors"
    style={{ top: y }}
  >
    <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.5} />
    <NodeLabel align="center">{label}</NodeLabel>
    
    {/* Connector Dot */}
    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
  </motion.div>
);

const FlowLine = ({ startY, endY, direction = 'right', delay }: { startY: string, endY: string, direction?: 'right' | 'left', delay: number }) => {
    // Calculate simple bezier curve
    // Assuming viewBox 800x400
    // Inputs at x=12% (~96px), Center at x=50% (400px), Outputs at x=88% (~704px)
    
    // Convert % strings to approx pixels for SVG path
    const parseY = (s: string) => parseInt(s) * 4; 
    const y1 = parseY(startY);
    const y2 = parseY(endY);
    
    const x1 = direction === 'right' ? 100 : 400;
    const x2 = direction === 'right' ? 360 : 700;
    
    const d = `M ${x1},${y1} C ${x1 + 100},${y1} ${x2 - 100},${y2} ${x2},${y2}`;

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 800 400">
             <path d={d} fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
             <motion.path 
                d={d} 
                fill="none" 
                stroke={direction === 'right' ? '#10b981' : '#34d399'} 
                strokeWidth="1.5" 
                strokeDasharray="4 6"
                initial={{ strokeDashoffset: 20 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="opacity-40"
             />
        </svg>
    )
}

export const ProcessSchematic: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] bg-black rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

      {/* --- INPUTS --- */}
      <div className="absolute inset-y-0 left-0 w-1/4">
        <InputNode label="Municipal Waste" icon={Trash2} color="text-white/70" y="15%" delay={0.1} />
        <InputNode label="Plastics" icon={Recycle} color="text-blue-400" y="38%" delay={0.2} />
        <InputNode label="Tires" icon={CircleDot} color="text-orange-400" y="61%" delay={0.3} />
        <InputNode label="Medical Waste" icon={Stethoscope} color="text-red-400" y="84%" delay={0.4} />
      </div>

      {/* --- CONNECTORS LEFT -> CENTER --- */}
      <FlowLine startY="15%" endY="50%" direction="right" delay={0} />
      <FlowLine startY="38%" endY="50%" direction="right" delay={0.2} />
      <FlowLine startY="61%" endY="50%" direction="right" delay={0.4} />
      <FlowLine startY="84%" endY="50%" direction="right" delay={0.6} />

      {/* --- CENTER: CORE SYSTEM --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative w-24 h-24 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.15)]"
        >
            {/* Inner Glow Pulse */}
            <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 animate-pulse" />
            
            {/* Core Icon */}
            <div className="relative z-10 flex flex-col items-center gap-2">
                <Cpu className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">CODE™</span>
                </div>
            </div>

            {/* Decorative Brackets */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-1 bg-white/10 rounded-full" />
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-8 w-1 bg-white/10 rounded-full" />
        </motion.div>
      </div>

      {/* --- CONNECTORS CENTER -> RIGHT --- */}
      <div className="absolute inset-0 pointer-events-none">
          {/* We inverse the flow line logic or just draw new paths from center (400,200) to rights */}
          {/* Using a custom SVG for right side fan-out */}
          <svg className="w-full h-full overflow-visible" viewBox="0 0 800 400">
             {[15, 32, 50, 68, 85].map((destY, i) => {
                 const d = `M 440,200 C 550,200 600,${destY * 4} 700,${destY * 4}`;
                 return (
                    <g key={i}>
                        <path d={d} fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
                        <motion.path 
                            d={d} 
                            fill="none" 
                            stroke="#34d399" 
                            strokeWidth="1" 
                            strokeDasharray="2 4"
                            initial={{ strokeDashoffset: 10 }}
                            animate={{ strokeDashoffset: 0 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                            className="opacity-50"
                        />
                    </g>
                 )
             })}
          </svg>
      </div>

      {/* --- OUTPUTS --- */}
      <div className="absolute inset-y-0 right-0 w-1/4">
        <OutputNode label="Liquid Fuels" icon={Droplets} color="text-emerald-400" y="15%" delay={0.6} />
        <OutputNode label="Syn. Graphite" icon={Layers} color="text-white/80" y="32%" delay={0.7} />
        <OutputNode label="Metals" icon={Hammer} color="text-gray-400" y="50%" delay={0.8} />
        <OutputNode label="Glass" icon={Sparkles} color="text-cyan-200" y="68%" delay={0.9} />
        <OutputNode label="Carbon Credits" icon={Leaf} color="text-green-400" y="85%" delay={1.0} />
      </div>

    </div>
  );
};