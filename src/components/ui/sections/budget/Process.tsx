import InViewSection from "../../items/InViewSection";

const processSteps = [
    {
        number: "01",
        title: "Briefing",
        description: "Entendemos seu negócio, objetivos e público-alvo para traçar a melhor estratégia."
    },
    {
        number: "02",
        title: "Design",
        description: "Criamos o layout visual, focado em experiência do usuário e identidade da marca."
    },
    {
        number: "03",
        title: "Desenvolvimento",
        description: "Transformamos o design em código, com performance e SEO otimizados."
    },
    {
        number: "04",
        title: "Lançamento",
        description: "Testes finais, configuração de domínio e publicação do seu projeto."
    }
];

export default function Process() {
    return (
        <section className="py-20 bg-navy-950">
            <div className="container mx-auto px-6">
                <InViewSection>
                    <div className="text-center mb-16">
                        <h2 className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-4">Como Funcionamos</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white">
                            Do Conceito ao <span className="text-primary-400">Lançamento</span>
                        </h3>
                    </div>
                </InViewSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <InViewSection key={index}>
                            <div className="glass-dark p-8 rounded-2xl border border-white/5 hover:border-primary-400/30 transition-all group h-full">
                                <div className="text-6xl font-black text-white/5 group-hover:text-primary-400/10 transition-colors mb-6">
                                    {step.number}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </InViewSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
