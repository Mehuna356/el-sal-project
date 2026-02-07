import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Target, Globe, Layers, Zap, Hexagon, CheckCircle2 } from 'lucide-react';

// --- ANIMATION VARIANTS ---
// Using a custom easing curve that mimics the fluid physics often seen in Apple interfaces
const appleEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' }, // Added blur for that "experimental" feel
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 1.0,
            ease: appleEase
        }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

// --- CUSTOM COMPONENTS ---

const DefaultAvatar = () => (
    <div className="w-full h-full bg-[#121212] flex items-center justify-center overflow-hidden relative group-hover:bg-[#1a1a1a] transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
        <svg
            className="w-12 h-12 text-white/30 group-hover:text-emerald-500/50 transition-colors duration-500 relative z-20"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    </div>
);

const DarkGlassIcon: React.FC<{ children: React.ReactNode; glowColor?: string }> = ({
    children,
    glowColor = "rgba(16, 185, 129, 0.5)"
}) => {
    return (
        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-[2rem] bg-[#080808] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] border-t border-white/5 flex items-center justify-center overflow-hidden group">
            {/* Inner Matte Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

            {/* Deep Inner Shadow for Depth */}
            <div className="absolute inset-0 shadow-[inset_0_4px_20px_rgba(0,0,0,1)] rounded-[2rem]" />

            {/* The Internal "Machine" Container */}
            <div className="relative z-10 w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-[#030303] border border-white/5 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,1)]">
                {/* Active Glow behind icon */}
                <div
                    className="absolute inset-0 opacity-20 blur-xl transition-opacity duration-1000 group-hover:opacity-40"
                    style={{ backgroundColor: glowColor }}
                />
                {/* Mechanical Details */}
                <div className="absolute inset-[2px] border border-white/5 rounded-[14px]" />
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5" />
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5" />

                {/* The Content */}
                <div className="relative z-20 text-white/80 group-hover:text-white transition-colors duration-500">
                    {children}
                </div>
            </div>

            {/* Top Gloss Reflection */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-white/20 blur-[1px]" />
        </div>
    );
};

// --- ANIMATED MECHANICS FOR ICONS ---

const MissionMechanic = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        {/* Radar Sweep */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-16 h-16 rounded-full border border-emerald-500/20 border-t-emerald-500/80"
        />
        <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"
        />
        <Target className="absolute w-8 h-8 text-white/50" strokeWidth={1} />
    </div>
);

const VisionMechanic = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        {/* Network Nodes */}
        <Globe className="w-8 h-8 text-white/50 absolute" strokeWidth={1} />
        {[0, 1, 2].map(i => (
            <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-blue-400/80 rounded-full"
                animate={{
                    x: [0, Math.cos(i * 2) * 16, 0],
                    y: [0, Math.sin(i * 2) * 16, 0],
                    opacity: [0, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
        ))}
    </div>
);

const WhatWeDoIcon = ({ type }: { type: 'dev' | 'token' | 'scale' }) => {
    if (type === 'dev') return <Layers strokeWidth={1} className="w-8 h-8" />;
    if (type === 'token') return <Hexagon strokeWidth={1} className="w-8 h-8" />;
    return <Zap strokeWidth={1} className="w-8 h-8" />;
};

// --- PAGE COMPONENT ---

export const AboutPage: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 60]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -60]);

    const leaders = [
        {
            name: "Tim Goltz",
            role: "Director",
            initials: "TG",
            bio: "International Business Development Strategist and macroanalytics specialist with expertise in energy production within circular economy and ESG principles of the New Green Economy.",
            highlights: [
                "Co-founded CarbonConnect, securing $60M capital for carbon offset platform.",
                "Developed international markets for blockchain tokenization of hard assets."
            ],
            image: "/images/team/tim-goltz.jpg"
        },
        {
            name: "Simon Scott",
            role: "Director",
            initials: "SS",
            bio: "Experienced Business Development Director with over 30 years in the Oil, Energy and Renewable sectors, primarily focused on emerging markets and national partnerships.",
            highlights: [
                "Extensive experience with National Oil Companies (including Aramco, IOC, ADNOC, PSO, PetroSA).",
                "8+ years developing ESG/Renewables and waste recovery projects."
            ],
            image: "/images/team/simon-scott.jpg"
        },
        {
            name: "Michele DeRyan",
            role: "Business Development, LATAM",
            initials: "MD",
            bio: "Seasoned entrepreneur and business development executive with a diverse international portfolio spanning North America, SE Asia, and Latin America. Michele specializes in navigating complex regulatory environments and fostering specialized government relations to drive sustainable growth. She excels in bridging cultural and commercial gaps, facilitating complex project implementation and aligning corporate objectives with public sector requirements within the dynamic LATAM region.",
            highlights: [
                "Launched and scaled ventures across North America, SE Asia, and LATAM.",
                "Specialist in government relations and regulatory compliance.",
                "Expert in aligning corporate objectives with public sector requirements."
            ],
            image: "/images/team/michele-deryan.jpg"
        }
    ];

    return (
        <div className="min-h-screen relative font-sans text-white">

            {/* 1. EDITORIAL HERO - Apple Style */}
            <motion.section
                className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.div
                    variants={sectionVariants}
                    className="max-w-5xl text-center z-10"
                >
                    <motion.h1
                        className="cursor-default text-6xl md:text-8xl font-display font-semibold tracking-tighter mb-8 text-white"
                    >
                        About Endpoint
                    </motion.h1>
                    <motion.div
                        variants={sectionVariants}
                        className="w-12 h-1 bg-white/20 mx-auto mb-10 rounded-full"
                    />
                    <motion.p
                        variants={sectionVariants}
                        className="text-2xl md:text-3xl text-white/90 font-medium leading-tight max-w-3xl mx-auto cursor-default tracking-tight"
                    >
                        Pioneering global solutions in advanced resource recovery through strategic partnerships and innovative development frameworks.
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* 2. WHAT WE DO - The "Pillars" Layout */}
            <motion.section
                className="py-32 px-6 border-t border-white/5 bg-black/40 backdrop-blur-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="mb-24">
                        <motion.h2 variants={sectionVariants} className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-6">Core Competencies</motion.h2>
                        <motion.h3
                            variants={sectionVariants}
                            className="text-4xl md:text-6xl font-display font-bold max-w-4xl leading-[1.1] cursor-default text-white"
                        >
                            Building the infrastructure <br /> for a circular future.
                        </motion.h3>
                    </div>

                    <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                        {[
                            { id: 'dev', title: "Project Development", desc: "Sourcing and scaling advanced recovery technologies globally." },
                            { id: 'token', title: "Tokenization", desc: "Structured RWA frameworks designed for long-term capital deployment." },
                            { id: 'scale', title: "Global Scaling", desc: "Fostering partnerships that transcend borders and regulatory zones." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={sectionVariants}
                                className="group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-all duration-500">
                                    <div className="text-white/60 group-hover:text-white transition-colors">
                                        <WhatWeDoIcon type={item.id as 'dev' | 'token' | 'scale'} />
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold mb-4 text-white group-hover:translate-x-1 transition-transform duration-300">{item.title}</h4>
                                <p className="text-white/50 leading-relaxed text-lg">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* 3. MISSION (Compact Linear Layout) */}
            <motion.section
                className="py-24 px-6 relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
                    {/* Text Left */}
                    <div className="w-full md:w-1/2">
                        <motion.div variants={sectionVariants}>
                            <motion.h2
                                whileHover={{ color: "#34d399", transition: { duration: 0.3 } }}
                                className="text-4xl md:text-6xl font-display font-bold mb-8 cursor-default text-white transition-colors duration-300"
                            >
                                Our Mission
                            </motion.h2>
                            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed mb-8">
                                To expand the reach and impact of advanced resource recovery technologies worldwide.
                            </p>
                            <div className="h-[1px] w-full bg-white/10" />
                            <p className="mt-8 text-white/50 text-base leading-relaxed">
                                By fostering global partnerships and spearheading project development, we bridge the gap between industrial waste challenges and sustainable energy needs.
                            </p>
                        </motion.div>
                    </div>

                    {/* Icon Right */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                        style={{ y: y1 }}
                        variants={sectionVariants}
                    >
                        <DarkGlassIcon glowColor="rgba(16, 185, 129, 0.5)">
                            <MissionMechanic />
                        </DarkGlassIcon>
                    </motion.div>
                </div>
            </motion.section>

            {/* 4. VISION (Compact Linear Layout - Alternated) */}
            <motion.section
                className="py-24 px-6 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-16">
                    {/* Text Right */}
                    <div className="w-full md:w-1/2">
                        <motion.div variants={sectionVariants}>
                            <motion.h2
                                whileHover={{ color: "#3b82f6", transition: { duration: 0.3 } }}
                                className="text-4xl md:text-6xl font-display font-bold mb-8 cursor-default text-white transition-colors duration-300"
                            >
                                Our Vision
                            </motion.h2>
                            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed mb-8">
                                A sustainable future where advanced resource recovery creates global value.
                            </p>
                            <div className="h-[1px] w-full bg-white/10" />
                            <p className="mt-8 text-white/50 text-base leading-relaxed">
                                We envision a world where environmental stewardship and economic growth are inextricably linked through strategic tokenization and development.
                            </p>
                        </motion.div>
                    </div>

                    {/* Icon Left */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center md:justify-start"
                        style={{ y: y2 }}
                        variants={sectionVariants}
                    >
                        <DarkGlassIcon glowColor="rgba(59, 130, 246, 0.5)">
                            <VisionMechanic />
                        </DarkGlassIcon>
                    </motion.div>
                </div>
            </motion.section>

            {/* 5. LEADERSHIP (Detailed Grid) */}
            <motion.section
                className="py-32 px-6 bg-[#050505]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        variants={sectionVariants}
                        className="text-4xl font-display font-bold mb-20 text-center cursor-default text-white"
                    >
                        Leadership
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {leaders.map((leader, idx) => (
                            <motion.div key={idx} variants={sectionVariants} className="h-full">
                                <Card className="bg-[#0A0A0A] border border-white/5 p-10 hover:border-white/10 transition-all duration-500 group h-full flex flex-col">
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                                        {/* Avatar - Centered Icon or Image */}
                                        <div className="relative shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-white/5 group-hover:border-white/20 transition-colors shadow-2xl bg-black">
                                            {leader.image ? (
                                                <img
                                                    src={leader.image}
                                                    alt={leader.name}
                                                    className="w-full h-full object-cover object-center"
                                                />
                                            ) : (
                                                <DefaultAvatar />
                                            )}
                                        </div>

                                        <div className="text-center md:text-left">
                                            <h3 className="text-3xl font-bold text-white mb-2">{leader.name}</h3>
                                            <p className="text-white/40 uppercase tracking-widest text-sm font-semibold">{leader.role}</p>
                                        </div>
                                    </div>

                                    <p className="text-white/70 leading-relaxed text-lg mb-8 italic text-center md:text-left">"{leader.bio}"</p>

                                    {/* Experience Highlights */}
                                    <div className="mt-auto bg-white/[0.03] rounded-xl p-6 border border-white/5 group-hover:bg-white/[0.05] transition-colors">
                                        <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Experience Highlights</h4>
                                        <ul className="space-y-3">
                                            {leader.highlights.map((point, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500/80 shrink-0 mt-0.5" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

        </div>
    );
};