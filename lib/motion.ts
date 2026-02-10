/**
 * Shared motion constants — single source of truth for animation behavior.
 * Import these instead of copy-pasting ease curves and variants.
 */
import { Variants } from 'framer-motion';

/** Standard smooth easing used across all sections */
export const ease = [0.25, 0.4, 0.25, 1] as const;

/** Fade-in-up animation variant for staggered children */
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: [...ease] },
    },
};

/** Stagger container — wraps children that use fadeInUp */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

/** Item variant for lists and grids */
export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: [...ease] },
    },
};
