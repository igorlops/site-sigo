import ContactSocial from "../../items/ContactSocial";
import FormContact from "../../items/FormContact";
import InstagramIcon from "../../items/Icons/Instagram";
import MailIcon from "../../items/Icons/Mail";
import PhoneIcon from "../../items/Icons/PhoneIcon";
import WhatsAppIcon from "../../items/Icons/WhatsAppIcon";
import InViewSection from "../../items/InViewSection";

export default function Contact() {
    return (
        <section className="bg-navy-950 py-24 sm:py-32 relative overflow-hidden bg-mesh">
            <div className="container mx-auto px-6">
                <InViewSection>
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-4">Primeiro Passo</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-6">Vamos Iniciar sua <br /><span className="text-primary-400 font-sans">Transformação Digital</span></h3>
                        <p className="text-xl text-gray-400">Escolha o canal que preferir ou preencha o formulário para um orçamento sob medida.</p>
                    </div>
                </InViewSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
                    <InViewSection>
                        <div className="space-y-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="glass-dark p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors group">
                                    <ContactSocial
                                        title="Instagram"
                                        content="@sigowebsolutions"
                                        href="https://www.instagram.com/sigowebsolutions/"
                                        icon={<InstagramIcon />}
                                    />
                                </div>
                                <div className="glass-dark p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors group">
                                    <ContactSocial
                                        title="E-mail"
                                        content="sigo.websolutions@gmail.com"
                                        href="mailto:sigo.websolutions@gmail.com"
                                        icon={<MailIcon />}
                                    />
                                </div>
                                <div className="glass-dark p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors group">
                                    <ContactSocial
                                        title="WhatsApp"
                                        content="(85) 9 9210-0969"
                                        href="https://api.whatsapp.com/send/?phone=85992100969&text=Olá%2C+tenho+interesse+em+um+site+para+meu+negócio.&type=phone_number&app_absent=0"
                                        icon={<WhatsAppIcon />}
                                    />
                                </div>
                                <div className="glass-dark p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors group">
                                    <ContactSocial
                                        title="Telefone"
                                        content="(85) 9 9210-0969"
                                        href="tel:88998604521"
                                        icon={<PhoneIcon />}
                                    />
                                </div>
                            </div>

                            <div className="glass p-10 rounded-3xl border border-primary-400/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400/5 rounded-full blur-3xl"></div>
                                <h4 className="text-2xl font-bold text-white mb-4">Por que falar conosco hoje?</h4>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex gap-3 items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                                        <span>Consultoria estratégica gratuita inicial.</span>
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                                        <span>Análise técnica da sua presença digital atual.</span>
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                                        <span>Planejamento de escala e conversão.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </InViewSection>

                    <InViewSection>
                        <div className="glass-dark p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
                            <h4 className="text-3xl font-bold text-white mb-8">Solicitar Orçamento</h4>
                            <FormContact />
                        </div>
                    </InViewSection>
                </div>
            </div>
        </section>
    );
}
