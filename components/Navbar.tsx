import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Cpu, FolderOpen, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { MenuBar, MenuItem } from './ui/MenuBar';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false); // Close mobile menu if open
        navigate(href);
    };

    const menuItems: MenuItem[] = [
        {
            icon: Home,
            label: 'Home',
            href: '/',
            gradient: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 100%)',
            iconColor: 'text-emerald-400'
        },
        {
            icon: User,
            label: 'About',
            href: '/about',
            gradient: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 100%)',
            iconColor: 'text-emerald-400'
        },
        {
            icon: Cpu,
            label: 'Technology',
            href: '/technology',
            gradient: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 100%)',
            iconColor: 'text-emerald-400'
        },
        {
            icon: FolderOpen,
            label: 'Projects',
            href: '/projects',
            gradient: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 100%)',
            iconColor: 'text-emerald-400',
            children: [
                {
                    icon: MapPin,
                    label: 'ESPP',
                    href: '/projects/el-salvador',
                    gradient: '',
                    iconColor: 'text-emerald-400'
                }
            ]
        },
        {
            icon: Mail,
            label: 'Contact',
            href: '/contact',
            gradient: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 100%)',
            iconColor: 'text-emerald-400'
        }
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${isScrolled || isMobileMenuOpen ? 'border-white/5 bg-black/80 backdrop-blur-xl shadow-lg' : ''}`}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-6">
                        <Link to="/" className="flex items-center gap-2 cursor-pointer group z-50" onClick={() => setIsMobileMenuOpen(false)}>
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                                <div className="w-3 h-3 bg-emerald-400 rounded-sm shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                            </div>
                            <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-emerald-100 transition-colors">Endpoint Group</span>
                        </Link>
                    </div>

                    {/* Desktop Nav - 3D Menu Bar */}
                    <nav className="hidden md:block">
                        <MenuBar
                            items={menuItems}
                            activeItem={location.pathname}
                            onItemClick={(item) => handleNavClick(item.href)}
                        />
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="primary" size="sm" onClick={() => navigate('/contact')}>
                            Invest Now
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden flex items-center z-50"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black pt-28 px-6 md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6 pb-10">
                            {menuItems.map((item) => {
                                const isActive = location.pathname === item.href || location.pathname.startsWith(item.href);

                                if (item.children) {
                                    return (
                                        <div key={item.label} className="flex flex-col">
                                            <button
                                                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                                                className={`text-2xl font-display font-bold text-left flex items-center justify-between py-3 w-full ${isActive ? 'text-emerald-400' : 'text-white/80'}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <item.icon className="w-6 h-6" />
                                                    {item.label}
                                                </div>
                                                <ChevronDown className={`w-5 h-5 transition-transform ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {mobileProjectsOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="pl-9 mt-4 flex flex-col gap-4 border-l border-white/10"
                                                    >
                                                        {item.children.map(child => (
                                                            <button
                                                                key={child.label}
                                                                onClick={() => handleNavClick(child.href)}
                                                                className={`text-lg font-medium text-left flex items-center gap-2 py-3 w-full ${location.pathname === child.href ? 'text-emerald-400' : 'text-white/60'}`}
                                                            >
                                                                {child.label}
                                                            </button>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                }

                                return (
                                    <button
                                        key={item.label}
                                        onClick={() => handleNavClick(item.href)}
                                        className={`text-2xl font-display font-bold text-left flex items-center gap-3 py-3 w-full ${isActive ? 'text-emerald-400' : 'text-white/80'}`}
                                    >
                                        <item.icon className="w-6 h-6" />
                                        {item.label}
                                    </button>
                                );
                            })}
                            <div className="h-px bg-white/10 my-4" />
                            <Button variant="primary" className="w-full" onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }}>
                                Invest Now
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};