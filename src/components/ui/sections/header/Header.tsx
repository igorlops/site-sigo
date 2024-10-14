'use client'
import ButtonCTA from "../../items/ButtonCTA";
import { ScrollIcon } from "../../items/Icons/ScrollIcon";
import ParticlesBackground from "../../items/Particles";
import Typewriter from 'typewriter-effect';
interface HeaderProps {
    serviceRef: React.RefObject<HTMLElement>;
}

export function Header({serviceRef}:HeaderProps) {

    const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-900 pt-24 sm:pt-32">
                {/* Particles está posicionado absolutamente dentro da Header */}
                <ParticlesBackground />
                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
                <div className="absolute top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-50">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-7xl font-bold tracking-tight sm:text-9xl text-amber-300 font-bold font-sans">{"<SIGO/>"}</h2>
                        <p className="mt-6 text-3xl sm:text-5xl  text-gray-300">
                            Somos uma Agência de Desenvolvimento de Soluções Web. 
                        </p>
                        <p className="mt-6 text-xl sm:text-3xl text-gray-300">
                            <span>Desenvolvemos </span>
                            <span className="text-amber-300">
                                <Typewriter
                                    component={'span'}
                                    options={{
                                        strings: [
                                            'Sites Institucionais', 
                                            'Catálogos Digitais', 
                                            'Landing Pages', 
                                            'Blog'
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>.
                        </p>

                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
                            <ButtonCTA title="Entrar em contato"/>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20">
                            <div className="flex flex-col">
                                <dt className="text-lg sm:text-2xl font-bold leading-9 tracking-tight text-white">Siga o caminho certo:</dt>
                                <a href="https://api.whatsapp.com/send/?phone=85992100969&text=Olá%2C+tenho+interesse+em+um+site+para+meu+negócio.&type=phone_number&app_absent=0" className="text-base leading-7 text-gray-300 underline underline-offset-1">
                                    Fale com nossos especialistas e vamos aumentar as vendas. 
                                </a>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="w-full flex justify-center pt-5">
                    <a className="hover:scale-105 transition duration-300 ease-in-out cursor-pointer" onClick={() => scrollToSection(serviceRef)}>
                        <ScrollIcon/>
                    </a>
                </div>
            </div>
        </>
    );
}
