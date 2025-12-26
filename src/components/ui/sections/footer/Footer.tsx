import ContactSocial from "../../items/ContactSocial";
import HoverInText from "../../items/HoverInText";
import InstagramIcon from "../../items/Icons/Instagram";
import LogoIcon from "../../items/Icons/Logo";
import MailIcon from "../../items/Icons/Mail";
import PhoneIcon from "../../items/Icons/PhoneIcon";
import WhatsAppIcon from "../../items/Icons/WhatsAppIcon";

export default function Footer() {
    return (
        <footer className="bg-navy-950 pt-20 pb-10 w-full border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <div className="flex flex-col space-y-6">
                            <div className="flex items-center gap-3">
                                <LogoIcon size={40} />
                                <span className="text-3xl font-black text-white tracking-tighter">SIGO</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed font-sans text-sm">
                                Especialistas em transformar visões em realidade digital de alta performance. Sua jornada rumo ao topo começa aqui.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest text-sm">Serviços Elite</h4>
                        <ul className="space-y-4 text-gray-500 text-sm">
                            <li className="hover:text-primary-400 transition-colors"><HoverInText>Web Design de Luxo</HoverInText></li>
                            <li className="hover:text-primary-400 transition-colors"><HoverInText>Landing Pages de Alta Conversão</HoverInText></li>
                            <li className="hover:text-primary-400 transition-colors"><HoverInText>Ecossistemas E-commerce</HoverInText></li>
                            <li className="hover:text-primary-400 transition-colors"><HoverInText>Sistemas Web Escaláveis</HoverInText></li>
                            <li className="hover:text-primary-400 transition-colors"><HoverInText>Consultoria Digital</HoverInText></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest text-sm">Links Úteis</h4>
                        <ul className="space-y-4 text-gray-500 text-sm">
                            <li className="hover:text-primary-400 transition-colors"><HoverInText>Sobre o SIGO</HoverInText></li>
                            <li className="hover:text-primary-400 transition-colors"><HoverInText>Como Trabalhamos</HoverInText></li>
                            <li className="hover:text-primary-400 transition-colors"><HoverInText>Portfólio & Cases</HoverInText></li>
                            <li className="hover:text-primary-400 transition-colors"><HoverInText>Blog Técnico</HoverInText></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest text-sm">Contato Direto</h4>
                        <div className="space-y-4">
                            <ContactSocial
                                content="sigo.websolutions@gmail.com"
                                href="mailto:sigo.websolutions@gmail.com"
                                icon={<MailIcon />}
                            />
                            <ContactSocial
                                content="(85) 9 9210-0969"
                                href="https://api.whatsapp.com/send/?phone=85992100969"
                                icon={<WhatsAppIcon />}
                            />
                            <div className="mt-6 flex gap-4">
                                <a href="https://www.instagram.com/sigowebsolutions/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-400/20 transition-colors">
                                    <InstagramIcon />
                                </a>
                                {/* Phone icon as a link too */}
                                <a href="tel:85992100969" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-400/20 transition-colors">
                                    <PhoneIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-xs">
                        &copy; {new Date().getFullYear()} SIGO Web Solutions. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-600 font-bold">
                        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
