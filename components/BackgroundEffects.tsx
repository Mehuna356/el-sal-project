
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  
  // Smooth out scroll values for parallax
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const y1 = useSpring(useTransform(scrollY, [0, 2000], [0, 300]), springConfig);
  const y2 = useSpring(useTransform(scrollY, [0, 2000], [0, -200]), springConfig);
  const rotate = useSpring(useTransform(scrollY, [0, 2000], [0, 45]), springConfig);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    // --- CONFIG ---
    const PARTICLE_COUNT = 60;
    const BEAM_COUNT = 5;

    // --- PARTICLES (Drift) ---
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + 0.3,
      speedX: (Math.random() - 0.5) * 0.1, // Very slow horizontal drift
      speedY: (Math.random() - 0.5) * 0.15, // Slightly faster vertical
      opacity: Math.random() * 0.4 + 0.1,
      pulsateSpeed: Math.random() * 0.01 + 0.005,
      phase: Math.random() * Math.PI * 2
    }));

    // --- BEAMS (Light Field) ---
    // Vertical bands of very subtle light
    const beams = Array.from({ length: BEAM_COUNT }, () => ({
      x: Math.random() * width,
      width: Math.random() * 150 + 50,
      speed: (Math.random() - 0.5) * 0.05,
      opacity: Math.random() * 0.02 + 0.005
    }));

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      // 1. Draw Particles
      particles.forEach(p => {
         p.x += p.speedX;
         p.y += p.speedY;
         
         // Wrap around screen
         if (p.x < 0) p.x = width;
         if (p.x > width) p.x = 0;
         if (p.y < 0) p.y = height;
         if (p.y > height) p.y = 0;

         // Pulsating opacity
         const alpha = p.opacity + Math.sin(time * p.pulsateSpeed + p.phase) * 0.1;
         
         ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, alpha)})`;
         ctx.beginPath();
         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
         ctx.fill();
      });

      // 2. Draw Light Beams
      // Use blend mode for "light field" effect
      ctx.globalCompositeOperation = 'screen';
      beams.forEach(b => {
          b.x += b.speed;
          if (b.x < -b.width) b.x = width;
          if (b.x > width) b.x = -b.width;

          const gradient = ctx.createLinearGradient(b.x, 0, b.x + b.width, 0);
          gradient.addColorStop(0, 'rgba(16, 185, 129, 0)');
          gradient.addColorStop(0.5, `rgba(16, 185, 129, ${b.opacity})`); // Subtle Emerald
          gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(b.x, 0, b.width, height);
      });
      ctx.globalCompositeOperation = 'source-over';

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020402]">
      
      {/* 1. SOFT PARALLAX BLOBS (Abstract Shapes) */}
      <motion.div 
        style={{ y: y1, rotate: rotate }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-emerald-900/10 to-transparent blur-[120px] mix-blend-screen opacity-40 will-change-transform"
      />
      <motion.div 
        style={{ y: y2, scale: 1.1 }}
        className="absolute top-[10%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-blue-900/5 to-transparent blur-[100px] mix-blend-screen opacity-30 will-change-transform" 
      />
      
      {/* Bottom fill glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-emerald-950/10 to-transparent blur-[100px] opacity-40" />

      {/* 2. GRID SHIMMER */}
      <div className="absolute inset-0 z-0 opacity-[0.12]">
        {/* Static Grid */}
        <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />
        {/* Shimmer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer" style={{ width: '50%' }} />
      </div>

      {/* 3. LIGHT FIELD & PARTICLES (Canvas) */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 opacity-70" />

      {/* 4. NOISE TEXTURE (Film Grain) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.035] mix-blend-overlay z-20 pointer-events-none" />
      
      {/* 5. VIGNETTE FOCUS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#020402_100%)] z-10 pointer-events-none opacity-80" />
    </div>
  );
};
    