'use client'
import ButtonCTA from "../../items/ButtonCTA";
import { ScrollIcon } from "../../items/Icons/ScrollIcon";
import ParticlesBackground from "../../items/Particles";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

interface HeaderProps {
    serviceRef: React.RefObject<HTMLElement>;
}

export function Header({ serviceRef }: HeaderProps) {

    const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-navy-950 text-white">
            <ParticlesBackground />

            {/* Ambient Background Glows */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary-400 font-mono text-xl mb-4 tracking-widest uppercase">Evolua seu Negócio</h2>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                            Sua Presença Digital <br />
                            <span className="text-primary-400 italic">Redefinida.</span>
                        </h1>

                        <div className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
                            <span className="block mb-2">Transformamos ideias em experiências digitais de alta performance que convertem visitantes em clientes.</span>
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <span>Especialistas em</span>
                                <span className="text-primary-400 font-bold border-b-2 border-primary-400/30 pb-1">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                'Landing Pages que Vendem',
                                                'Sistemas Web Escaláveis',
                                                'Experiências Mobile-First',
                                                'Branding Digital de Elite'
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            deleteSpeed: 30
                                        }}
                                    />
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                            <ButtonCTA title="Começar meu Projeto Agora" />
                            <div className="flex flex-col items-start">
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Consultoria Gratuita</span>
                                <a href="https://api.whatsapp.com/send/?phone=85992100969&text=Olá%2C+tenho+interesse+em+um+site+para+meu+negócio.&type=phone_number&app_absent=0"
                                    className="text-white hover:text-primary-400 transition-colors border-b border-white/20 hover:border-primary-400/50 pb-1">
                                    Fale com um Especialista →
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-xl mx-auto lg:mx-0"
                    >
                        <div>
                            <span className="block text-3xl font-bold text-white tracking-tighter">100%</span>
                            <span className="text-xs text-gray-500 uppercase font-medium">Customizado</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-white tracking-tighter">SEO</span>
                            <span className="text-xs text-gray-500 uppercase font-medium">Otimizado</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-white tracking-tighter">24/7</span>
                            <span className="text-xs text-gray-500 uppercase font-medium">Suporte Elite</span>
                        </div>
                    </motion.div>
                </div>

                {/* Optional: Add a visual element here like an abstract 3D shape or a premium mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hidden lg:block relative"
                >
                    <div className="w-96 h-96 bg-gradient-to-br from-primary-400 to-amber-600 rounded-3xl rotate-12 absolute -z-10 blur-2xl opacity-20"></div>
                    <div className="w-96 h-96 bg-navy-900 border border-white/10 rounded-3xl p-8 glass flex flex-col justify-between shadow-2xl overflow-hidden relative group">
                        <div className="space-y-4">
                            <div className="h-4 w-1/2 bg-white/20 rounded-full"></div>
                            <div className="h-32 w-full bg-gradient-to-r from-primary-400/20 to-transparent rounded-2xl"></div>
                            <div className="h-4 w-3/4 bg-white/10 rounded-full"></div>
                            <div className="h-4 w-full bg-white/10 rounded-full"></div>
                        </div>
                        <div className="h-12 w-full bg-primary-400 rounded-xl mt-8"></div>

                        {/* Decorative elements */}
                        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary-400/10 rounded-full blur-3xl"></div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity" onClick={() => scrollToSection(serviceRef)}>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll Discover</span>
                <ScrollIcon />
            </div>
        </section>
    );
}
