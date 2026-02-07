import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign } from 'lucide-react';
import { Ripple } from './ui/Ripple';

export const ROICalculator: React.FC = () => {
  const [investment, setInvestment] = useState(1000); // Min investment 1000

  // Constants
  const tokenPrice = 1; // USDT
  const tokens = investment / tokenPrice;
  
  const recoveryRate = 0.0633;
  const profitRate = 0.0298;
  
  const monthlyRecovery = tokens * recoveryRate;
  const monthlyProfit = tokens * profitRate;
  
  const recoveryMonths = 16;
  const totalLifespanMonths = 240; // 20 years
  const profitMonths = totalLifespanMonths - recoveryMonths;
  
  const totalRecoveryAmount = monthlyRecovery * recoveryMonths;
  const totalProfitAmount = monthlyProfit * profitMonths;
  const totalReturn = totalRecoveryAmount + totalProfitAmount;
  const roiMultiplier = totalReturn / investment;

  const MIN_INVESTMENT = 1000;
  const MAX_INVESTMENT = 5000000;

  return (
    <div className="relative w-full max-w-3xl mx-auto bg-[#050505] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden group">
      
      {/* Interactive Ripple Background */}
      <Ripple className="text-emerald-900" opacity={0.1} />

      {/* Subtle Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-900/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-8 flex justify-between items-end">
            <div>
                <h3 className="text-xl font-display font-semibold tracking-tight text-white mb-1">Projected Returns</h3>
                <p className="text-white/50 text-xs">Estimate earnings over the 20-year project lifecycle.</p>
            </div>
        </div>

        {/* Input Slider */}
        <div className="mb-10">
            <div className="flex justify-between items-end mb-4">
                <label className="text-[10px] font-semibold text-white/70 uppercase tracking-wide">Investment Allocation (USDT)</label>
                <div className="text-3xl font-display font-bold text-white flex items-center tracking-tighter">
                    <span className="text-emerald-500/50 mr-1 text-xl">$</span>
                    {investment.toLocaleString()}
                </div>
            </div>
            
            <div className="relative h-3 bg-white/5 rounded-full cursor-pointer group/slider">
                <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" 
                    style={{ width: `${Math.max(0, ((investment - MIN_INVESTMENT) / (MAX_INVESTMENT - MIN_INVESTMENT)) * 100)}%` }}
                />
                <input 
                    type="range" 
                    min={MIN_INVESTMENT} 
                    max={MAX_INVESTMENT} 
                    step="1000"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                />
                {/* Custom Thumb */}
                <div 
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#0a0a0a] border-2 border-emerald-400 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] pointer-events-none transition-transform group-hover/slider:scale-110 flex items-center justify-center z-10"
                    style={{ left: `${Math.max(0, ((investment - MIN_INVESTMENT) / (MAX_INVESTMENT - MIN_INVESTMENT)) * 100)}%` }}
                >
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                </div>
            </div>
            <div className="flex justify-between text-[10px] text-white/30 mt-2 font-mono uppercase tracking-wider">
                <span>$1k Min</span>
                <span>$5M Max</span>
            </div>
        </div>

        {/* Visual Graph Representation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
            
            {/* Phase 1 Bar */}
            <div className="md:col-span-4 flex flex-col gap-2">
                <div className="flex justify-between text-[10px] font-bold text-white uppercase tracking-wider">
                    <span>Phase 1</span>
                    <span className="text-emerald-400">Recovery</span>
                </div>
                <div className="relative h-40 bg-[#0F0F0F] rounded-lg border border-white/5 overflow-hidden flex flex-col justify-end group/bar shadow-inner">
                     <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                     <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "45%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full bg-gradient-to-t from-emerald-900 to-emerald-600 border-t border-emerald-400/50 relative"
                     >
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-white font-bold text-base tracking-tight">${Math.round(monthlyRecovery).toLocaleString()}</div>
                        <div className="absolute top-7 left-1/2 -translate-x-1/2 text-emerald-100/60 text-[8px] uppercase font-bold tracking-wide w-full text-center">/ Month</div>
                     </motion.div>
                </div>
            </div>

            {/* Arrow */}
            <div className="md:col-span-1 flex items-center justify-center text-white/10">
                <TrendingUp className="w-5 h-5 rotate-90 md:rotate-0" strokeWidth={1} />
            </div>

            {/* Phase 2 Bar */}
            <div className="md:col-span-7 flex flex-col gap-2">
                <div className="flex justify-between text-[10px] font-bold text-white uppercase tracking-wider">
                    <span>Phase 2</span>
                    <span className="text-emerald-400">Profit Share</span>
                </div>
                <div className="relative h-40 bg-[#0F0F0F] rounded-lg border border-white/5 overflow-hidden flex flex-col justify-end group/bar shadow-inner">
                     <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                     <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "80%" }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 border-t border-emerald-200 relative"
                     >
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-white font-bold text-base tracking-tight">${Math.round(monthlyProfit).toLocaleString()}</div>
                        <div className="absolute top-7 left-1/2 -translate-x-1/2 text-emerald-950/60 text-[8px] uppercase font-bold tracking-wide w-full text-center">/ Month</div>
                     </motion.div>
                </div>
            </div>
        </div>

        {/* Total Summary Strip */}
        <div className="bg-white/[0.03] rounded-xl p-5 flex items-center justify-between border border-white/5 relative overflow-hidden">
            <Ripple className="text-white" opacity={0.05} />
            
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-emerald-500 text-black flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <DollarSign className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest font-semibold mb-0.5">Total Return (20y)</div>
                    <div className="text-2xl font-display font-bold text-white tracking-tight">${Math.round(totalReturn).toLocaleString()}</div>
                </div>
            </div>
            
            <div className="text-right relative z-10">
                <div className="text-emerald-400 font-bold text-xl mb-0.5 tracking-tight">{roiMultiplier.toFixed(1)}x</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Multiple</div>
            </div>
        </div>
      </div>
    </div>
  );
};