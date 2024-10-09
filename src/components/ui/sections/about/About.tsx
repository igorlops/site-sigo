import Image from "next/image";
import Hover from "../../items/Hover";
import PageTitle from "../../items/PageTitle";
import WorkImage from '@images/work-sigo-web-solutions.jpg'
import { motion } from "framer-motion";
import ButtonCTA from "../../items/ButtonCTA";
import SnowParticles from "../../items/ParticlesSnow";
import Card from "../../items/Card";


export function About() {
    return (
        <div id="sobre" className="relative isolate overflow-hidden bg-gray-700 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto lg:max-w-7xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:gap-y-10 px-6">
                <div className="lg:col-span-2 mx-auto lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
                    <div className="">
                        <PageTitle title="Sobre nós" subtitle={""}/>
                        <div className="flex justify-between sm:flex-row flex-col items-center w-full">
                            <div className="flex justify-center items-start sm:w-1/2 flex-col">
                                <h3 className="my-2 text-xl font-bold tracking-tight text-gray-200 sm:text-2xl md:text-3xl">Agência SIGO Soluções Web</h3>
                                <p className="md:text-xl text-md text-white font-sans leading-6 md:leading-8">
                                    Somos apaixonados por empreendedorismo e inovação, por isso criamos a <span className="font-bold text-amber-300">SIGO</span> para ajudar você, 
                                    que sabe a necessidade de ter seu negócio na internet.<br/>
                                    Fazemos parcerias com clientes para criar negócios, produtos e experiências digitais de sucesso, 
                                    seja sua empresa de grande ou pequeno porte.
                                </p>
                            </div>
                            <div className="mx-auto sm:w-1/2 flex justify-end relative overflow-hidden">
                                <motion.div
                                    animate={{ y: [0, 30, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="md:w-3/4 w-full"
                                    >
                                    <Image
                                        className="w-full my-10"
                                        style={{
                                            borderRadius: "100px 150px 300px 300px"
                                        }}
                                        src={WorkImage}
                                        alt="Planejamento no desenvolvimento do Site"
                                        />
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex justify-center items-start flex-col sm:px-1 px-1">
                            <h4 className="my-10 md:text-4xl sm:text-2xl text-xl leading-8 text-white font-sans font-bold">Por que nos escolher?</h4>
                            <p className="md:text-xl text-white font-sans">
                                O Google processa aproximadamente 40 mil buscas por SEGUNDO.
                                Todos os dias são realizadas 3,5 mil milhões de pesquisas no Google, ou seja, 
                                a cada minuto que você deixa de ter uma presença online, 
                                a sua empresa perde diversas oportunidades de conquistar novos clientes. 
                            </p>
                            <p className="md:text-xl text-white my-5 font-sans">
                                Contrate uma agência de sites especializados na Criação de Sites Profissionais e Otimizados.<br/>
                                Isso significa que, além de sermos uma empresa que faz sites, nosso foco é desenvolver sites rápidos, 
                                fáceis de navegar e que ofereçam a melhor experiência aos usuários. <br/>
                                Para isso, utilizamos as últimas tendências em desenvolvimento web e design, 
                                bem como ferramentas de testes e otimizações para garantir sites bem feitos em todos os aspectos.
                            </p>
                            <ButtonCTA title="Contratar nossos serviços"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[1em] my-[1em]">
                <div className="md:max-w-lg max-w-md lg:max-w-7xl mx-auto flex flex-col flex-wrap lg:flex-row justify-center items-center w-screen gap-4">
                    <Hover max={30}>
                        <Card title="Missão" 
                            content={<>
                                Buscamos ajudar empreendedores a terem presença digital e alcançarem resultados 
                                incríveis através de nossas soluções digitais.</>} 
                            image={<></>}
                            />
                    </Hover>
                    <Hover max={30}>
                        <Card title="Visão" 
                            content={<>
                                Buscamos ajudar empreendedores a terem presença digital e alcançarem resultados 
                                incríveis através de nossas soluções digitais.</>} 
                            image={<></>}
                            />
                    </Hover>
                    <Hover max={30}>
                        <Card title="Valores" 
                            content={<>
                                Buscamos ajudar empreendedores a terem presença digital e alcançarem resultados 
                                incríveis através de nossas soluções digitais.</>} 
                            image={<></>}
                            />
                    </Hover>
                </div>
            </div>
        </div>

    )
}