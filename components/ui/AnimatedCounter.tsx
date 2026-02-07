import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  direction?: 'up' | 'down';
  className?: string;
  decimalPlaces?: number;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  direction = 'up',
  className = '',
  decimalPlaces = 0,
  suffix = '',
  prefix = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const [displayValue, setDisplayValue] = useState(direction === 'down' ? value : 0);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
        setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue.toFixed(decimalPlaces)}{suffix}
    </span>
  );
};