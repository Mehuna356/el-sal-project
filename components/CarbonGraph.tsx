import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CarbonGraph: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoverValue, setHoverValue] = useState<{year: number, value: number} | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dimensions for high-DPI
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const padding = 30;
    const bottomPadding = 40;

    // Data Points
    const startYear = 2020;
    const endYear = 2050;
    const maxVal = 280;

    // Helper functions
    const getX = (year: number) => padding + ((year - startYear) / (endYear - startYear)) * (width - 2 * padding);
    const getY = (val: number) => height - bottomPadding - (val / maxVal) * (height - bottomPadding - padding);

    const draw = (mouseX?: number) => {
      ctx.clearRect(0, 0, width, height);

      // 1. Grid Lines (Subtle)
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      // Vertical
      for (let y = startYear; y <= endYear; y += 10) {
          const x = getX(y);
          ctx.beginPath();
          ctx.moveTo(x, padding);
          ctx.lineTo(x, height - bottomPadding);
          ctx.stroke();
          
          // Labels
          ctx.fillStyle = 'rgba(255,255,255,0.3)';
          ctx.font = '10px Inter, sans-serif';
          ctx.fillText(y.toString(), x - 12, height - 10);
      }
      ctx.setLineDash([]);

      // 2. The Main Curve
      const drawCurve = () => {
        ctx.beginPath();
        ctx.moveTo(getX(2020), getY(0.4));
        ctx.bezierCurveTo(getX(2035), getY(10), getX(2040), getY(100), getX(2050), getY(250));
      }

      // Fill Gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
      gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.1)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
      
      drawCurve();
      ctx.lineTo(getX(2050), height - bottomPadding);
      ctx.lineTo(getX(2020), height - bottomPadding);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Stroke Line
      drawCurve();
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.shadowColor = 'rgba(52, 211, 153, 0.5)';
      ctx.shadowBlur = 15;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 3. Current Year Indicator
      const currentX = getX(2025);
      const currentY = getY(20); // Approx value
      
      ctx.beginPath();
      ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(currentX, currentY, 12, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.stroke();


      // 4. Interaction
      if (mouseX) {
        // Clamp mouseX to chart area
        const clampedX = Math.max(padding, Math.min(mouseX, width - padding));
        const percent = (clampedX - padding) / (width - 2 * padding);
        const year = startYear + percent * (endYear - startYear);
        
        // Cubic approximation for value
        const t = percent;
        const val = 0.4 + (250 - 0.4) * (t * t * t);

        setHoverValue({ year: Math.round(year), value: Math.round(val) });

        const cx = getX(year);
        const cy = getY(val);

        // Vertical Indicator Line
        ctx.beginPath();
        ctx.moveTo(cx, padding);
        ctx.lineTo(cx, height - bottomPadding);
        ctx.strokeStyle = 'rgba(255,255,255,0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Glow Dot
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#10b981';
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        ctx.beginPath();
        ctx.arc(cx, cy, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        draw(e.clientX - rect.left);
    };
    
    const handleMouseLeave = () => {
        setHoverValue(null);
        draw();
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-2xl group">
        {/* Subtle top light */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        
        <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
                <h3 className="text-lg font-semibold text-white">Market Projection</h3>
                <p className="text-white/40 text-xs mt-1">Voluntary Carbon Offsets (USD)</p>
            </div>
            <div className="text-right">
                <div className="text-4xl font-display font-bold text-white tracking-tight tabular-nums">
                    ${hoverValue ? hoverValue.value : '250'}<span className="text-emerald-500">B</span>
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono mt-1">
                    {hoverValue ? `Forecast: ${hoverValue.year}` : 'Forecast: 2050'}
                </div>
            </div>
        </div>

        <div className="relative flex-grow w-full cursor-crosshair">
            <canvas 
                ref={canvasRef} 
                className="w-full h-full block"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
        
        <div className="flex justify-between text-[10px] text-white/30 font-mono mt-2 uppercase tracking-wider">
            <span>2020 Start</span>
            <span className="text-emerald-500/50">Exponential Phase</span>
            <span>2050 Target</span>
        </div>
    </div>
  );
};