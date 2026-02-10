import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBeamProps {
    containerRef: React.RefObject<HTMLElement>;
    fromRef: React.RefObject<HTMLElement>;
    toRef: React.RefObject<HTMLElement>;
    duration?: number;
    curvature?: number;
    reverse?: boolean;
    pathColor?: string;
    gradientStartColor?: string;
    gradientStopColor?: string;
    pathWidth?: number;
    pathOpacity?: number;
    delay?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
    containerRef,
    fromRef,
    toRef,
    duration = 3,
    curvature = 0,
    reverse = false,
    pathColor = 'rgba(255,255,255,0.06)',
    gradientStartColor = '#10b981',
    gradientStopColor = '#34d399',
    pathWidth = 2,
    pathOpacity = 1,
    delay = 0,
}) => {
    const [pathD, setPathD] = useState('');
    const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
    const gradientId = useRef(`beam-grad-${Math.random().toString(36).slice(2, 8)}`).current;

    const updatePath = useCallback(() => {
        if (!containerRef.current || !fromRef.current || !toRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const fromRect = fromRef.current.getBoundingClientRect();
        const toRect = toRef.current.getBoundingClientRect();

        setSvgDimensions({
            width: containerRect.width,
            height: containerRect.height,
        });

        const x1 = fromRect.left - containerRect.left + fromRect.width / 2;
        const y1 = fromRect.top - containerRect.top + fromRect.height / 2;
        const x2 = toRect.left - containerRect.left + toRect.width / 2;
        const y2 = toRect.top - containerRect.top + toRect.height / 2;

        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;

        const d = `M ${x1},${y1} Q ${midX + curvature},${midY + curvature} ${x2},${y2}`;
        setPathD(d);
    }, [containerRef, fromRef, toRef, curvature]);

    useEffect(() => {
        updatePath();
        const handleResize = () => updatePath();
        window.addEventListener('resize', handleResize);
        // Re-compute after a short delay (layout may settle)
        const timer = setTimeout(updatePath, 200);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, [updatePath]);

    if (!pathD) return null;

    return (
        <svg
            fill="none"
            width={svgDimensions.width}
            height={svgDimensions.height}
            className="absolute top-0 left-0 pointer-events-none"
            style={{ opacity: pathOpacity }}
        >
            {/* Background path (static) */}
            <path d={pathD} stroke={pathColor} strokeWidth={pathWidth} strokeLinecap="round" />

            {/* Animated beam gradient */}
            <defs>
                <linearGradient id={gradientId} gradientUnits="userSpaceOnUse">
                    <stop stopColor={gradientStartColor} stopOpacity="0" />
                    <stop stopColor={gradientStartColor} stopOpacity="0" offset="0.2" />
                    <stop stopColor={gradientStopColor} stopOpacity="1" offset="0.5" />
                    <stop stopColor={gradientStopColor} stopOpacity="0" offset="0.8" />
                    <stop stopColor={gradientStopColor} stopOpacity="0" offset="1" />

                    {/* Animate the gradient sweep along the path */}
                    <animate
                        attributeName="x1"
                        from={reverse ? '100%' : '-50%'}
                        to={reverse ? '-50%' : '100%'}
                        dur={`${duration}s`}
                        begin={`${delay}s`}
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="x2"
                        from={reverse ? '150%' : '0%'}
                        to={reverse ? '0%' : '150%'}
                        dur={`${duration}s`}
                        begin={`${delay}s`}
                        repeatCount="indefinite"
                    />
                </linearGradient>
            </defs>

            {/* The beam itself */}
            <path
                d={pathD}
                stroke={`url(#${gradientId})`}
                strokeWidth={pathWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};
