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
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuVariants = {
        open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
        closed: { opacity: 0, x: "-100%", transition: { duration: 0.5, ease: "easeInOut" } }
    };

    return (
        <>
            <nav className="relative bg-amber-300">
                <div className="mx-auto p-2 max-w-7xl sm:px-9">
                    <div className="flex justify-between">
                        <div className="flex justify-center items-center gap-2">
                            <a href="#" className="flex items-center gap-x-2 font-bold">
                                Solicite um orçamento
                            </a>
                        </div>
                        <div className="flex items-center">
                            <a href="#" className="gap-2 flex items-center font-bold">Site com o melhor preço</a>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="sticky top-0 z-50 bg-gray-900 divide">
                <div className="mx-auto max-w-7xl px-2 sm:px-6">
                    <div className="relative flex h-16 items-center justify-between">
                        {/* Ícone do menu móvel na direita */}
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <button onClick={toggleMobileMenu} className="focus:outline-none">
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isMobileMenuOpen ? (
                                        // Ícone de fechar (X)
                                        <motion.svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            stroke="white" // Cor branca aplicada aqui
                                            aria-hidden="true"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                        >
                                            <motion.path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1, transition: { duration: 0.3 } }}
                                            />
                                        </motion.svg>
                                    ) : (
                                        // Ícone de menu (hambúrguer)
                                        <motion.svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            stroke="white" // Cor branca aplicada aqui
                                            aria-hidden="true"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                        >
                                            <motion.path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16m-7 6h7"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1, transition: { duration: 0.3 } }}
                                            />
                                        </motion.svg>
                                    )}
                                </motion.div>
                            </button>
                        </div>

                        {/* Logo e Links no menu */}
                        <div className="flex flex-1 items-start lg:justify-between sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <div className="max-w-sm">
                                    <LogoIcon size={50} />
                                </div>
                            </div>

                            {/* Links do menu desktop */}
                            <div className="hidden sm:ml-6 sm:flex">
                                <div className="flex items-center justify-center space-x-4">
                                    <a onClick={() => scrollToSection(homeRef)} className={`cursor-pointer px-3 py-[1.3em] text-md font-medium text-white ${
                                        activeSection === "home"
                                            ? 'border-b-4 border-amber-300'
                                            : 'hover:border-b-4 hover:border-amber-200'
                                        } `}>
                                        Home
                                    </a>
                                    <a onClick={() => scrollToSection(serviceRef)} className={`cursor-pointer px-3 py-[1.3em] text-md font-medium text-white ${
                                        activeSection === "services"
                                            ? 'border-b-4 border-amber-300'
                                            : 'hover:border-b-4 hover:border-amber-200'
                                        } `}>
                                        Serviços
                                    </a>
                                    <a onClick={() => scrollToSection(aboutRef)} className={`cursor-pointer px-3 py-[1.3em] text-md font-medium text-white ${
                                        activeSection === "about"
                                            ? 'border-b-4 border-amber-300'
                                            : 'hover:border-b-4 hover-border-amber-200'
                                        } `}>
                                        Sobre
                                    </a>
                                    <a onClick={() => scrollToSection(contactRef)} className={`cursor-pointer px-3 py-[1.3em] text-md font-medium text-white ${
                                        activeSection === "contact"
                                            ? 'border-b-4 border-amber-300'
                                            : 'hover:border-b-4 hover-border-amber-200'
                                        } `}>
                                        Contato
                                    </a>
                                    <a href="/modelos" className={`hover:scale-105 transition duration-300 ease-in-out px-5 py-2 my-5 bg-amber-300 rounded-md hover:bg-amber-600 hover:ring-amber-700 hover:text-white font-bold ring-1 ring-inset ring-amber-400`}>
                                        Portfólio
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu content */}
                <motion.div
                    className="absolute top-12 left-0 bg-gray-800 w-full h-full"
                    initial="closed"
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    variants={menuVariants}
                >
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="bg-gray-700 space-y-1 px-2 pb-3 pt-2 gap-5">
                            <a onClick={() =>  {
                                scrollToSection(homeRef)
                                setIsMobileMenuOpen(false)
                            } 
                            } className={`block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-amber-300 hover:text-black ${
                            activeSection === "home"
                                            ? 'bg-amber-300 text-black'
                                            : ''    
                            }`}>
                                Home
                            </a>
                            <a onClick={() =>  {
                                scrollToSection(serviceRef)
                                setIsMobileMenuOpen(false)
                            } 
                            } className={`block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-amber-300 hover:text-black ${
                            activeSection === "services"
                                            ? 'bg-amber-300 text-black'
                                            : ''    
                            }`}>
                                Serviços
                            </a>
                            <a onClick={() =>  {
                                scrollToSection(aboutRef)
                                setIsMobileMenuOpen(false)
                            } 
                            } className={`block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-amber-300 hover:text-black ${
                            activeSection === "about"
                                            ? 'bg-amber-300 text-black'
                                            : ''    
                            }`}>
                                Sobre
                            </a>
                            <a onClick={() =>  {
                                scrollToSection(contactRef)
                                setIsMobileMenuOpen(false)
                            } 
                            } className={`block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-amber-300 hover:text-black ${
                            activeSection === "contact"
                                            ? 'bg-amber-300 text-black'
                                            : ''    
                            }`}>
                                Contato
                            </a>
                            <a href="/modelos" className={`hover:scale-105 transition duration-300 ease-in-out px-5 py-2 my-5 bg-amber-300 rounded-md hover:bg-amber-600 hover:ring-amber-700 hover:text-white font-bold ring-1 ring-inset ring-amber-400`}>
                                Portfólio
                            </a>
                        </div>
                    </div>
                </motion.div>
            </nav>
        </>
    );
}
