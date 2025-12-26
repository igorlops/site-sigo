import ButtonCTA from "../../items/ButtonCTA";
import Card from "../../items/Card";
import FormContact from "../../items/FormContact";
import BlogIcon from "../../items/Icons/IconsServices/BlogIcon";
import ResponsiveIcon from "../../items/Icons/IconsServices/ResponsiveIcon";
import RocketIcon from "../../items/Icons/IconsServices/RocketIcon";
import SecureIcon from "../../items/Icons/IconsServices/SecureIcon";
import SeoIcon from "../../items/Icons/IconsServices/SeoIcon";
import SettingsIcon from "../../items/Icons/IconsServices/SettingsIcon";
import InViewSection from "../../items/InViewSection";

export default function Services() {
    return (
        <section className="bg-navy-950 py-24 sm:py-32 relative overflow-hidden bg-mesh">
            <div className="container mx-auto px-6">
                <InViewSection>
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-4">O que entregamos</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Soluções que Transformam Visual em Resultados</h3>
                        <p className="text-xl text-gray-400">Não criamos apenas sites. Construímos ativos digitais otimizados para velocidade, conversão e autoridade.</p>
                    </div>
                </InViewSection>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {/* Sticky Sidebar with Contact Form - Repositioned for better flow */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 glass-dark p-8 rounded-3xl border border-white/5">
                            <h4 className="text-2xl font-bold text-white mb-2">Inicie seu Legado</h4>
                            <p className="text-gray-400 mb-6 text-sm">Receba um planejamento personalizado para o seu próximo projeto digital.</p>
                            <FormContact />
                        </div>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InViewSection>
                            <Card
                                title="Web Design de Elite"
                                image={<ResponsiveIcon />}
                                content={<>
                                    Interfaces exclusivas focadas na jornada do usuário. Design <span className="text-primary-400 font-medium">mobile-first</span> que garante uma navegação impecável em qualquer tela.
                                </>}
                            />
                        </InViewSection>
                        <InViewSection>
                            <Card
                                title="Landing Pages de Alta Conversão"
                                image={<RocketIcon />}
                                content={<>
                                    Páginas de vendas projetadas com gatilhos mentais e copy persuasiva para transformar cada clique em um lead qualificado.
                                </>}
                            />
                        </InViewSection>
                        <InViewSection>
                            <Card
                                title="Blog & SEO Estratégico"
                                image={<BlogIcon />}
                                content={<>
                                    Crie autoridade no seu nicho. Desenvolvemos blogs rápidos e otimizados para que o Google coloque sua marca no topo das buscas.
                                </>}
                            />
                        </InViewSection>
                        <InViewSection>
                            <Card
                                title="E-commerce & Catálogos"
                                image={<SeoIcon />}
                                content={<>
                                    Exponha seus produtos com sofisticação. Sistemas de catálogo intuitivos que reduzem o atrito no momento da compra.
                                </>}
                            />
                        </InViewSection>
                        <InViewSection>
                            <Card
                                title="Infraestrutura & Segurança"
                                image={<SecureIcon />}
                                content={<>
                                    Hospedagem de alta performance com Uptime de 99.9% e protocolos SSL avançados para proteger seus dados e de seus clientes.
                                </>}
                            />
                        </InViewSection>
                        <InViewSection>
                            <Card
                                title="Suporte & Evolução"
                                image={<SettingsIcon />}
                                content={<>
                                    Não te deixamos sozinho. Oferecemos manutenção contínua e atualizações técnicas para que seu site nunca fique obsoleto.
                                </>}
                            />
                        </InViewSection>
                    </div>
                </div>

                {/* Bottom Impact Statement */}
                <InViewSection>
                    <div className="glass p-12 rounded-[3rem] text-center max-w-5xl mx-auto border border-primary-400/20 shadow-2xl shadow-primary-400/5">
                        <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">Utilizamos a Elite da Tecnologia Web</h4>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Trabalhamos com o que há de mais moderno: Next.js, Framer Motion e infraestruturas escaláveis.
                            Isso garante que seu site não seja apenas bonito, mas <span className="text-primary-400 font-bold">extremamente rápido e seguro</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <ButtonCTA title="Garantir meu site de Alta Performance" />
                        </div>
                    </div>
                </InViewSection>
            </div>
        </section>
    );
}
