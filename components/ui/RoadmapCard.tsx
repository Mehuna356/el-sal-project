import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface RoadmapItem {
    quarter: string;
    title: string;
    description: string;
    status?: "done" | "in-progress" | "upcoming";
}

export interface RoadmapCardProps {
    title?: string;
    description?: string;
    items: RoadmapItem[];
}

export function RoadmapCard({
    title = "Product Roadmap",
    description = "Upcoming features and releases",
    items,
}: RoadmapCardProps) {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-10">

            {/* Main Card Container */}
            <div className={cn(
                "relative isolate w-full overflow-hidden rounded-2xl border border-white/10 bg-[#050505] p-8 md:p-12 transition-all duration-500",
                "hover:border-white/20", // Subtle border lighten on hover
                "hover:shadow-[0_20px_40px_-12px_rgba(255,255,255,0.03)]", // Very subtle neutral shadow
                "hover:scale-[1.005] will-change-transform", // Slight scale
                "group/card"
            )}>

                {/* Hover Spotlight Effect - Neutral/Dark Gray */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Header */}
                <div className="mb-16 relative z-10 text-center md:text-left">
                    <h3 className="text-3xl font-display font-bold text-white mb-2">{title}</h3>
                    <p className="text-sm text-white/50">{description}</p>
                </div>

                <div className="relative z-10">
                    {/* Timeline Line Container */}
                    <div className="hidden md:block absolute left-0 right-0 top-5 h-[2px] bg-white/5 overflow-hidden rounded-full">
                        {/* The Moving Beam - Emerald & Gray Gradient (Kept as requested for the line itself) */}
                        <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent blur-[2px] opacity-70 animate-shimmer" />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4">
                        {items.map((item, index) => {
                            const isCurrent = item.status === 'in-progress';
                            const isDone = item.status === 'done';

                            return (
                                <motion.div
                                    key={index}
                                    className="relative md:pt-16 text-left md:text-center w-full md:w-1/4 group/item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.15 }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex absolute left-1/2 top-[1.25rem] -translate-y-1/2 -translate-x-1/2 z-10 items-center justify-center">
                                        {/* Blinking Light for Current Stage */}
                                        {isCurrent && (
                                            <div className="absolute">
                                                <span className="relative flex h-12 w-12">
                                                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-20"></span>
                                                    <span className="relative inline-flex rounded-full h-12 w-12 bg-emerald-500/10 blur-md"></span>
                                                </span>
                                            </div>
                                        )}

                                        {/* Core Dot */}
                                        <div className={cn(
                                            "relative size-4 rounded-full border-2 transition-all duration-500 z-20 flex items-center justify-center",
                                            isCurrent
                                                ? "bg-[#050505] border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.6)] scale-110"
                                                : isDone
                                                    ? "bg-emerald-500 border-emerald-500"
                                                    : "bg-[#0A0A0A] border-white/20 group-hover/item:border-white/50"
                                        )}>
                                            {isCurrent && <div className="size-1.5 bg-emerald-400 rounded-full shadow-[0_0_4px_rgba(52,211,153,0.6)]" />}
                                            {isDone && <div className="size-1.5 bg-black rounded-full" />}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col md:items-center">
                                        <span className={cn(
                                            "inline-block w-fit mb-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-colors duration-300",
                                            isCurrent
                                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                                                : "bg-white/5 text-white/40 border-white/5 group-hover/item:border-white/20"
                                        )}>
                                            {item.quarter}
                                        </span>

                                        <h4 className={cn(
                                            "text-lg font-bold mb-2 transition-colors duration-300",
                                            isCurrent ? "text-white" : "text-white/80 group-hover/item:text-white"
                                        )}>
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-white/50 leading-relaxed max-w-[200px] mx-0 md:mx-auto group-hover/item:text-white/70 transition-colors">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}