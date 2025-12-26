import Image from "next/image";
import WorkImage from '@images/work-sigo-web-solutions.jpg'
import { motion } from "framer-motion";
import ButtonCTA from "../../items/ButtonCTA";
import InViewSection from "../../items/InViewSection";

export function About() {
    return (
        <section className="relative py-24 sm:py-32 bg-navy-950 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-400/5 -skew-x-12 transform origin-top shadow-2xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <InViewSection>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-4">Nossa Essência</h2>
                                <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                    Mais que uma Agência, <br />
                                    <span className="text-primary-400">Seu Parceiro de Growth.</span>
                                </h3>
                            </div>

                            <p className="text-xl text-gray-300 leading-relaxed font-sans">
                                Na <span className="text-white font-bold">SIGO</span>, não entregamos apenas linhas de código. Entregamos o veículo para o seu sucesso digital.
                                Nascemos da paixão por transformar negócios comuns em autoridade online através de tecnologia de ponta e design estratégico.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-400/10 flex items-center justify-center text-primary-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span className="text-lg text-gray-200 font-medium">Foco Total em Conversão</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-400/10 flex items-center justify-center text-primary-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span className="text-lg text-gray-200 font-medium">Tecnologia de Alta Performance</span>
                                </div>
                            </div>
                        </div>
                    </InViewSection>

                    <InViewSection>
                        <div className="relative group">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <div className="absolute -inset-4 bg-primary-400/20 rounded-[3rem] blur-2xl group-hover:bg-primary-400/30 transition-colors duration-500"></div>
                                <Image
                                    className="relative rounded-[2.5rem] shadow-2xl border border-white/10"
                                    src={WorkImage}
                                    alt="Processo criativo SIGO"
                                />
                            </motion.div>

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl border border-white/20 shadow-2xl z-20 max-w-[200px] animate-float">
                                <span className="block text-4xl font-black text-primary-400 mb-1">10X</span>
                                <span className="text-xs text-gray-300 uppercase font-bold tracking-tighter">Aceleração de Presença Digital</span>
                            </div>
                        </div>
                    </InViewSection>
                </div>

                {/* Second Row: Why us / Data */}
                <InViewSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
                        <div className="md:col-span-2">
                            <h4 className="text-3xl font-bold text-white mb-6">Por que o mercado escolhe a SIGO?</h4>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                O Google processa mais de <span className="text-white font-bold">3.5 bilhões de pesquisas</span> por dia. Cada minuto sem um site otimizado é uma venda que vai para o seu concorrente.
                                Nós construímos a sua infraestrutura para que você seja o escolhido nessa busca.
                            </p>
                            <ButtonCTA title="Garantir meu Espaço no Topo" />
                        </div>
                        <div className="glass-dark p-8 rounded-3xl space-y-6">
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-primary-400">40k</span>
                                <span className="text-sm text-gray-500 uppercase font-bold">Buscas por Segundo</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-white">99%</span>
                                <span className="text-sm text-gray-500 uppercase font-bold">Uptime Garantido</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-primary-400">Elite</span>
                                <span className="text-sm text-gray-500 uppercase font-bold">Stack Tecnológica</span>
                            </div>
                        </div>
                    </div>
                </InViewSection>
            </div>
        </section>
    );
}
