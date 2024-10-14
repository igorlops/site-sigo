import ContactSocial from "../../items/ContactSocial";
import FormContact from "../../items/FormContact";
import InstagramIcon from "../../items/Icons/Instagram";
import MailIcon from "../../items/Icons/Mail";
import PhoneIcon from "../../items/Icons/PhoneIcon";
import WhatsAppIcon from "../../items/Icons/WhatsAppIcon";

export default function Contact() {

    return (
        <>
            <div className="w-100 bg-gray-900 mx-auto flex flex-col justify-center items-center pb-[5em]">
                <div className="container mx-auto">
                    <h2 className="text-gray-100 text-4xl md:text-5xl lg:text-7xl font-bold pt-[3em] pb-[1em] text-center">Solicite já um <span className="text-amber-300 font-bold">orçamento</span></h2>

                    <div className="flex flex-col flex-wrap items-start px-10 py-5 text-left md:flex-row md:justify-between text-white">
                        <ContactSocial
                            title="Siga nosso instagram"
                            content="@sigowebsolutions"
                            href="https://www.instagram.com/sigowebsolutions/"
                            icon={<InstagramIcon/>}
                        />
                        <ContactSocial
                            title="Escreva um email"
                            content="sigowebsolutions@gmail.com"
                            href="mailto:sigowebsolutions@gmail.com"
                            icon={<MailIcon/>}
                        />
                        <ContactSocial
                            title="Enviar uma mensagem"
                            content="(85) 9 9210-0969"
                            href="https://api.whatsapp.com/send/?phone=85992100969&text=Olá%2C+tenho+interesse+em+um+site+para+meu+negócio.&type=phone_number&app_absent=0"
                            icon={<WhatsAppIcon/>}
                        />
                        <ContactSocial
                            title="Ligar para nós"
                            content="(85) 9 9210-0969"
                            href="tel:88998604521"
                            icon={<PhoneIcon/>}
                        />
                    </div>
                    <div className="flex justify-center md:flex-row flex-wrap px-3 flex-col md:items-center text-white gap-[3em]">
                        <div className="flex flex-col bg-gray-800 p-5 w-[100%] rounded-xl md:w-[400px] items-center" style={{maxHeight:"fit-content"}}>
                            <h2 className="text-3xl my-5 text-amber-300 font-bold">Fale conosco</h2>
                            <p>
                                Se você tem alguma dúvida ou quer solicitar um orçamento personalizado, 
                                não deixe de entrar em contato conosco, será um prazer em atendê-lo!
                            </p>
                            <p className="mt-5 mb-1"><span className="text-amber-300 font-bold">Aumente suas vendas</span> e potencialize o crescimento do seu negócio com um Site!</p>
                            <p className="my-1">Transforme sua presença digital e destaque-se no mercado de forma <span className="text-amber-300 font-bold">impactante</span>!</p>
                            <p className="my-1">Criamos sites modernos e soluções digitais sob medida, pensadas especialmente para empresas que querem se <span className="text-amber-300 font-bold">destacar</span>.</p>
                            <p className="my-1">Nosso foco é ajudar você a ter uma <span className="text-amber-300 font-bold">presença digital</span> que realmente faça diferença, atraindo mais clientes e trazendo resultados.</p>
                        </div>
                        <div className="w-[100%] md:w-[600px] mx-auto px-5"><FormContact/></div>
                    </div>
                </div>
            </div>
       </>
    );
}