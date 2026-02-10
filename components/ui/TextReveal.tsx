import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
    children: React.ReactNode;
    className?: string;
    /** Delay before reveal starts (seconds) */
    delay?: number;
    /** Duration of the reveal (seconds) */
    duration?: number;
    /** Whether to reveal word-by-word or line-by-line */
    mode?: 'words' | 'lines';
}

/**
 * TextReveal — a scroll-triggered text reveal component.
 * Wraps text content and reveals it word-by-word with a staggered fade-up effect
 * when the element enters the viewport.
 */
export const TextReveal: React.FC<TextRevealProps> = ({
    children,
    className = '',
    delay = 0,
    duration = 0.5,
    mode = 'words',
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    // For word-by-word mode, split text content into individual words
    if (mode === 'words' && typeof children === 'string') {
        const words = children.split(' ');
        return (
            <span ref={ref} className={`inline ${className}`}>
                {words.map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                        <motion.span
                            className="inline-block"
                            initial={{ y: '100%', opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                            transition={{
                                duration,
                                delay: delay + i * 0.04,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </span>
        );
    }

    // For line/block mode or non-string children, reveal as a single block
    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{
                    duration: duration * 1.2,
                    delay,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
