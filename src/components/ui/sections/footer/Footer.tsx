import ContactSocial from "../../items/ContactSocial";
import HoverInText from "../../items/HoverInText";
import InstagramIcon from "../../items/Icons/Instagram";
import LogoIcon from "../../items/Icons/Logo";
import MailIcon from "../../items/Icons/Mail";
import PhoneIcon from "../../items/Icons/PhoneIcon";
import WhatsAppIcon from "../../items/Icons/WhatsAppIcon";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-800 py-[50px] w-full divide-y divide-gray-600">
                <div className="container mx-auto py-5">
                    <div className="gap-x-5 gap-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
                        <div className="flex text-white mx-auto flex-col items-center">
                            <div className="flex flex-col" style={{maxWidth:"fit-content"}}>
                                <div className="flex flex-row gap-3">
                                    <LogoIcon size={50}/> 
                                    <span className="text-5xl font-bold">SIGO</span>
                                </div>
                                <div className="">
                                    <p className="text-xl text-right ">
                                        Soluções Web
                                    </p>  
                                </div>
                            </div>
                            <h3 className="text-lg text-center my-5">
                                Especialistas em Desenvolvimento Web e Criação de idéias inovadoras
                            </h3>
                        </div>
                        <div className="flex flex-col md:items-start items-center text-left text-white">
                            <h3 className="font-bold text-3xl mb-5">Serviços</h3>
                            <HoverInText>Site Institucional</HoverInText>
                            <HoverInText>Catálogo digital</HoverInText>
                            <HoverInText>Página de vendas</HoverInText>
                            <HoverInText>Landing Page</HoverInText>
                            <HoverInText>Sistemas Sob Demanda</HoverInText>
                        </div>
                        <div className="text-white flex text-center md:text-left flex-col">
                            <h3 className="font-bold text-3xl mb-5">Contato</h3>
                            <div className="flex flex-col flex-wrap items-center md:items-start text-left text-white">
                                <HoverInText>
                                    <ContactSocial
                                        content="@sigowebsolutions"
                                        href="https://www.instagram.com/sigowebsolutions/"
                                        icon={<InstagramIcon/>}
                                    />
                                </HoverInText>
                                <HoverInText>

                                    <ContactSocial
                                        content="sigowebsolutions@gmail.com"
                                        href="mailto:sigowebsolutions@gmail.com"
                                        icon={<MailIcon/>}
                                    />
                                </HoverInText>

                                <HoverInText>

                                    <ContactSocial
                                        content="(85) 9 9210-0969"
                                        href="https://api.whatsapp.com/send/?phone=85992100969&text=Olá%2C+tenho+interesse+em+um+site+para+meu+negócio.&type=phone_number&app_absent=0"
                                        icon={<WhatsAppIcon/>}
                                    />
                                </HoverInText>
                                <HoverInText>
                                    <ContactSocial
                                        content="(85) 9 9210-0969"
                                        href="tel:88998604521"
                                        icon={<PhoneIcon/>}
                                    />
                                </HoverInText>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-10 text-md">
                    <p className="text-center text-sm text-amber-300 font-bold">SIGO Web Solutions </p>
                    <p className="text-center text-sm text-white">Todos os direitos reservados &copy; 2024</p>    
                </div>
            </footer>
        </>
    );
}