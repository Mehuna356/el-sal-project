import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// El Salvador coordinates
const EL_SALVADOR = { lat: 13.7942, lng: -88.8965, label: 'El Salvador' };

export const ElSalvadorGlobe: React.FC = () => {
    // Generate dotted globe pattern
    const dots = useMemo(() => {
        const points: { x: number; y: number; opacity: number; isElSalvador: boolean }[] = [];

        // Globe parameters
        const radius = 120;
        const centerX = 150;
        const centerY = 150;

        // Create dots for visible hemisphere (simplified world map)
        for (let lat = -80; lat <= 80; lat += 6) {
            const latRad = (lat * Math.PI) / 180;
            const rowRadius = Math.cos(latRad) * radius;
            const y = centerY - Math.sin(latRad) * radius;

            // Adjust dot count per latitude
            const dotsInRow = Math.ceil(rowRadius / 8);

            for (let i = 0; i < dotsInRow; i++) {
                const lngOffset = (i / dotsInRow) * 360 - 180;
                const lng = lngOffset - 90; // Rotate to show Americas

                // Only show front hemisphere
                if (lng > -180 && lng < 0) {
                    const lngRad = ((lng + 90) * Math.PI) / 180;
                    const x = centerX + Math.sin(lngRad) * rowRadius;
                    const depth = Math.cos(lngRad);

                    // Check if this dot is near El Salvador
                    const isNearElSalvador =
                        Math.abs(lat - EL_SALVADOR.lat) < 8 &&
                        Math.abs(lng - EL_SALVADOR.lng) < 12;

                    if (depth > 0) {
                        points.push({
                            x,
                            y,
                            opacity: depth * 0.5,
                            isElSalvador: isNearElSalvador
                        });
                    }
                }
            }
        }

        return points;
    }, []);

    // Calculate El Salvador position on globe
    const elSalvadorPos = useMemo(() => {
        const radius = 120;
        const centerX = 150;
        const centerY = 150;

        const latRad = (EL_SALVADOR.lat * Math.PI) / 180;
        const lngRad = ((EL_SALVADOR.lng + 90) * Math.PI) / 180;

        const rowRadius = Math.cos(latRad) * radius;
        const x = centerX + Math.sin(lngRad) * rowRadius;
        const y = centerY - Math.sin(latRad) * radius;

        return { x, y };
    }, []);

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-visible">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/10 blur-[80px] rounded-full" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
            >
                <svg
                    viewBox="0 0 300 300"
                    className="w-[320px] h-[320px]"
                >
                    <defs>
                        {/* Globe gradient */}
                        <radialGradient id="globeGradient" cx="30%" cy="30%">
                            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.15)" />
                            <stop offset="100%" stopColor="transparent" />
                        </radialGradient>

                        {/* Glow filter */}
                        <filter id="elSalvadorGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Globe outline */}
                    <circle
                        cx="150"
                        cy="150"
                        r="120"
                        fill="url(#globeGradient)"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="0.5"
                    />

                    {/* Grid lines (longitude) */}
                    {[-60, -30, 0, 30, 60].map((offset, i) => (
                        <ellipse
                            key={`lng-${i}`}
                            cx="150"
                            cy="150"
                            rx={Math.abs(Math.cos((offset * Math.PI) / 180) * 120)}
                            ry="120"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.05)"
                            strokeWidth="0.5"
                        />
                    ))}

                    {/* Grid lines (latitude) */}
                    {[-60, -30, 0, 30, 60].map((lat, i) => {
                        const y = 150 - Math.sin((lat * Math.PI) / 180) * 120;
                        const rx = Math.cos((lat * Math.PI) / 180) * 120;
                        return (
                            <ellipse
                                key={`lat-${i}`}
                                cx="150"
                                cy={y}
                                rx={rx}
                                ry={rx * 0.3}
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.05)"
                                strokeWidth="0.5"
                            />
                        );
                    })}

                    {/* Dotted land masses */}
                    {dots.map((dot, i) => (
                        <circle
                            key={i}
                            cx={dot.x}
                            cy={dot.y}
                            r={dot.isElSalvador ? 2 : 1}
                            fill={dot.isElSalvador ? '#10b981' : 'rgba(255, 255, 255, 0.4)'}
                            opacity={dot.isElSalvador ? 1 : dot.opacity}
                            filter={dot.isElSalvador ? 'url(#elSalvadorGlow)' : undefined}
                        />
                    ))}

                    {/* El Salvador marker */}
                    <g transform={`translate(${elSalvadorPos.x}, ${elSalvadorPos.y})`}>
                        {/* Pulse rings */}
                        <motion.circle
                            r="5"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="1"
                            initial={{ r: 5, opacity: 0.8 }}
                            animate={{ r: 20, opacity: 0 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.circle
                            r="5"
                            fill="none"
                            stroke="#34d399"
                            strokeWidth="0.5"
                            initial={{ r: 5, opacity: 0.6 }}
                            animate={{ r: 15, opacity: 0 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                        />

                        {/* Core dot */}
                        <circle
                            r="4"
                            fill="#10b981"
                            filter="url(#elSalvadorGlow)"
                        />
                        <circle
                            r="2"
                            fill="white"
                        />

                        {/* Label line */}
                        <motion.line
                            x1="0"
                            y1="0"
                            x2="30"
                            y2="-25"
                            stroke="#10b981"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        />

                        {/* Label */}
                        <foreignObject x="25" y="-45" width="100" height="30">
                            <div className="flex items-start">
                                <motion.div
                                    className="bg-emerald-950/60 backdrop-blur-md border border-emerald-500/40 px-3 py-1 rounded-lg shadow-lg"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                >
                                    <span className="text-[10px] text-emerald-300 font-bold tracking-wider whitespace-nowrap">
                                        EL SALVADOR
                                    </span>
                                </motion.div>
                            </div>
                        </foreignObject>
                    </g>

                    {/* Rotating highlight */}
                    <motion.ellipse
                        cx="150"
                        cy="150"
                        rx="120"
                        ry="120"
                        fill="none"
                        stroke="url(#sweepGradient)"
                        strokeWidth="2"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: '150px 150px' }}
                    />

                    <defs>
                        <linearGradient id="sweepGradient" gradientTransform="rotate(90)">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="30%" stopColor="rgba(16, 185, 129, 0.2)" />
                            <stop offset="50%" stopColor="transparent" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Stats overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-6">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">Location</div>
                    <div className="text-sm text-emerald-400 font-mono">13.79°N 88.90°W</div>
                </motion.div>
            </div>
        </div>
    );
};
