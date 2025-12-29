import LogoIcon from "../../items/Icons/Logo";
import React, { useState } from 'react';
import { motion } from "framer-motion";

interface NavbarProps {
    activeSection: string;
    homeRef: React.RefObject<HTMLElement>;
    serviceRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
}

export default function Navbar({ activeSection, homeRef, serviceRef, aboutRef, contactRef }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { id: "home", label: "Home", ref: homeRef },
        { id: "services", label: "Serviços", ref: serviceRef },
        { id: "about", label: "Sobre", ref: aboutRef },
        { id: "contact", label: "Contato", ref: contactRef },
    ];

    const menuVariants = {
        open: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
        closed: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-6 pointer-events-none">
            <nav className="mx-auto max-w-7xl pointer-events-auto">
                <div className="glass-dark border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl backdrop-blur-xl">
                    {/* Logo Area */}
                    <div className="flex items-center gap-4">
                        <div className="hover:rotate-12 transition-transform duration-300">
                            <LogoIcon size={40} />
                        </div>
                        <span className="hidden md:block font-black text-white text-lg tracking-tighter">
                            SIGO<span className="text-primary-400">.</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.ref)}
                                className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full ${activeSection === link.id
                                    ? "text-navy-950"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute inset-0 bg-primary-400 rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="/modelos"
                            className="text-white hover:text-primary-400 font-bold text-sm transition-colors"
                        >
                            Portfólio
                        </a>
                        <a
                            href="https://api.whatsapp.com/send/?phone=85992100969"
                            className="bg-primary-400 hover:bg-primary-500 text-navy-950 px-6 py-2 rounded-full font-black text-sm transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                        >
                            Orçamento
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <a
                            href="https://api.whatsapp.com/send/?phone=85992100969"
                            className="bg-primary-400 text-navy-950 px-4 py-2 rounded-full font-black text-xs"
                        >
                            WhatsApp
                        </a>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                <motion.div
                    className="md:hidden mt-4 pointer-events-auto"
                    initial="closed"
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    variants={menuVariants}
                >
                    <div className="glass-dark border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl backdrop-blur-2xl">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.ref)}
                                className={`text-left px-4 py-3 rounded-xl text-lg font-bold transition-all ${activeSection === link.id
                                    ? "bg-primary-400 text-navy-950"
                                    : "text-white hover:bg-white/5"
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <hr className="border-white/10" />
                        <a
                            href="/modelos"
                            className="px-4 py-3 text-white font-bold text-lg hover:text-primary-400 transition-colors"
                        >
                            Ver Portfólio
                        </a>
                    </div>
                </motion.div>
            </nav>
        </header>
    );
}
