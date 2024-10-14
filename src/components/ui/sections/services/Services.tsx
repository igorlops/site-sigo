import ButtonCTA from "../../items/ButtonCTA";
import Card from "../../items/Card";
import FormContact from "../../items/FormContact";
import BlogIcon from "../../items/Icons/IconsServices/BlogIcon";
import CloudIcon from "../../items/Icons/IconsServices/HostIcon";
import ResponsiveIcon from "../../items/Icons/IconsServices/ResponsiveIcon";
import RocketIcon from "../../items/Icons/IconsServices/RocketIcon";
import SecureIcon from "../../items/Icons/IconsServices/SecureIcon";
import SeoIcon from "../../items/Icons/IconsServices/SeoIcon";
import SettingsIcon from "../../items/Icons/IconsServices/SettingsIcon";
import InViewSection from "../../items/InViewSection";
import PageTitle from "../../items/PageTitle";



export default function Services( ) {

    return (
        <>
            <div className="bg-gray-900 py-5 w-fullrelative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="sm:max-w-md max-w-none lg:max-w-7xl mx-auto">
                    <div className="xl:max-w-7xl pt-5 flex items-center flex-col text-center mx-auto min-h-56">
                        <PageTitle title="Serviços" subtitle={"Excelência em Desenvolvimento Web"}/>
                    </div>
                    <div className="relative mx-auto gap-x-8 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 gap-4 grid-flow-row">
                        <div className="lg:sticky block lg:top-[10em]" style={{maxHeight:"fit-content"}}>
                            <div className="p-5 rounded-xl shadow-xl ring-1 ring-amber-300/10 min-w-[20em]">
                                <h2 className="text-base font-semibold leading-7 text-amber-300">Preencha seus dados aqui</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-300">Solicite já um orçamento, vamos fazer seu negócio decolar.</p>
                                <div className="pb-5">
                                    <FormContact/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center flex-col">
                            <div className="my-7">
                                <h4 className="text-white text-center text-3xl">
                                    O que nós fazemos
                                </h4>
                            </div>
                            <div className="mx-auto pb-16 sm:px-6 sm:max-w-sm sm:pb-24 lg:max-w-7xl">
                                <div className="mt-6 flex flex-col flex-wrap w-full justify-center md:mx-auto gap-y-5">
                                    <InViewSection>

                                        <Card 
                                            title="Desenvolvimento de Sites Responsivos" 
                                            content={<>
                                                Criamos Sites adaptado para todos os dispositivos. 
                                                Nossos Projetos são baseados no modelo <span className="italic">mobile first</span>, ou seja, 
                                                criamos primeiramente para dispositivos menores até os maiores, 
                                                criando assim uma versão para Cada Dispositivo: Celular, Tablet e Desktop.
                                            </>} 
                                            image={<ResponsiveIcon/>}
                                        />
                                    </InViewSection>
                                    <InViewSection>
                                        <Card 
                                            title="Desenvolvimento de Landing Pages" 
                                            content={<>
                                                Criamos Landing Pages (Mais conhecidos como páginas de aterrissagem), personalizadas
                                                para seu negócio. Sabe aquele produto ou serviço específico que você deseja promover,
                                                ou uma página para ser usada em sua campanha de tráfego. Nós desenvolvemos com a <span className="font-bold">melhor
                                                tecnologia</span> do mercado.
                                            </>} 
                                            image={<RocketIcon/>}
                                        />
                                    </InViewSection>
                                    <InViewSection>
                                        <Card 
                                            title="Desenvolvimento de Blog" 
                                            content={<>
                                                O desenvolvimento de um blog envolve a escolha de uma plataforma de blogging, a criação de um layout atraente 
                                                e funcional, a produção de conteúdo de qualidade e a implementação de estratégias
                                                de SEO para <span className="font-bold">aumentar a visibilidade</span> e o tráfego do blog nos mecanismos de busca.
                                            </>} 
                                            image={<BlogIcon/>}
                                        />
                                    </InViewSection>
                                    <InViewSection>

                                        <Card 
                                            title="Otimizado para o Google" 
                                            content={<>
                                                No processo de criação de sites, seguimos as boas práticas de <span className="font-bold">SEO</span> para o google classificar 
                                                seu site nas primeiras posições na rede de pesquisa. 
                                                Seu site completamente otimizado para obter os melhores resultados em pouco tempo.
                                            </>} 
                                            image={<SeoIcon/>}
                                        />
                                    </InViewSection>

                                    <InViewSection>
                                        <Card 
                                            title="Atualização/Manutenção de Site" 
                                            content={<>
                                                Oferecemos serviços de atualização e manutenção contínua para o seu site. 
                                                Mantenha seu site sempre funcional e atualizado com as últimas novidades tecnológicas. 
                                                Desde pequenas correções até grandes mudanças estruturais, cuidamos de tudo para que você 
                                                tenha um site sempre rápido e seguro.
                                            </>} 
                                            image={<SettingsIcon/>}
                                        />
                                    </InViewSection>
                                    <InViewSection>

                                        <Card 
                                            title="Segurança de Site" 
                                            content={<>
                                                Garantimos a proteção do seu site contra ameaças online. Implementamos medidas de 
                                                segurança como SSL, proteção contra malware e ataques cibernéticos, além de monitoramento 
                                                constante para garantir que o seu site esteja sempre seguro. Evite riscos e mantenha sua 
                                                plataforma protegida.
                                            </>} 
                                            image={<SecureIcon/>}
                                        />
                                    </InViewSection>
                                    <InViewSection>
                                        
                                        <Card 
                                            title="Hospedagem de Site" 
                                            content={<>
                                                Oferecemos serviços de hospedagem confiável e de alta performance para o seu site. 
                                                Garantimos <span className="font-bold">velocidade, uptime de 99,9% e suporte técnico especializado</span>, para que o 
                                                seu site esteja sempre disponível e funcionando perfeitamente.
                                            </>} 
                                            image={<CloudIcon/>}
                                            />
                                    </InViewSection>

                                </div>
                            </div>

                            <div className="flex justify-center">
                                <ButtonCTA title="Contratar serviços"/>
                            </div>
                            <div className="text-center my-9">
                                <PageTitle title="Sites modernos e responsivos" subtitle={"Vamos tirar sua idéia do papel"}/>
                                <div className="text-white text-md lg:text-lg text-left w-full mt-9 leading-6">
                                    <p>A primeira impressão é a que fica, tenha um site moderno e exclusivo.    </p>          
                                    <p>
                                        Passe sofisticação e inovação aos usuários e clientes com um site de fácil navegação em todos os dispositivos eletrônicos sejam eles: smartphones,
                                        tablets, notebooks ou desktops.
                                    </p>
                                    <p>
                                        Com um site intuitivo sua taxa de conversão de leads também aumenta e seus clientes continuam fiéis 
                                        pela facilidade que o site lhes proporciona.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[6em] w-full">
                        <div className="text-center w-auto mx-auto text-white">
                            <h3 className="lg:text-3xl md:text-xl font-bold text-lg font-sans mb-5 leading-3">
                                Utilizamos a melhor tecnologia
                            </h3>
                            <p className="md:text-lg text-md font-sans mx-auto md:w-full lg:w-1/2">
                                Estamos sempre buscando o melhor para atendermos os nossos clientes e amigos, 
                                por isso utilizamos as tecnologias de mais alta performance do mercado.
                            </p>
                            <p className="md:text-lg text-md font-sans mx-auto md:w-full lg:w-1/2 my-3">
                                Não deixe seu sonho guardado na gaveta, nós te ajudaremos a transformá-lo
                                em realidade, fale agora mesmo com um de nossos especialistas e invista
                                no seu sonho.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <ButtonCTA title="Falar com especialista"/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}