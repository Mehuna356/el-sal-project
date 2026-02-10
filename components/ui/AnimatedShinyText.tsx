import React from 'react';

interface AnimatedShinyTextProps {
    children: React.ReactNode;
    className?: string;
}

export const AnimatedShinyText: React.FC<AnimatedShinyTextProps> = ({ children, className = '' }) => {
    return (
        <span
            className={`inline-flex items-center justify-center animate-shiny-text bg-clip-text ${className}`}
            style={{
                backgroundImage:
                    'linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(16,185,129,0.8) 50%, rgba(255,255,255,0) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animation: 'shiny-text 3s ease-in-out infinite',
            }}
        >
            {children}
        </span>
    );
};
