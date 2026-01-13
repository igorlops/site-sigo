import InViewSection from "../../items/InViewSection";

const plans = [
    {
        name: "Landing Page",
        description: "Ideal para campanhas e produtos únicos.",
        price: "499,97",
        oldPrice: "699,97",
        features: [
            "Design Exclusivo",
            "Alta Conversão",
            "SEO Básico",
            "Integração WhatsApp"
        ],
        highlight: false
    },
    {
        name: "Site Institucional Standart",
        description: "Para empresas dominarem o mundo digital.",
        price: "699,97",
        oldPrice: "899,97",
        features: [
            "Até 5 Páginas",
            "Design Standart",
            "SEO Básico",
            "Integração WhatsApp"
        ],
        highlight: false
    },
    {
        name: "Site Institucional Premium",
        description: "Para empresas que querem fortalecer a marca.",
        price: "1.299,97",
        oldPrice: "1.599,97",
        features: [
            "Até 7 Páginas",
            "Design Premium",
            "SEO Otimizado",
            "Integração WhatsApp"
        ],
        highlight: true
    },
    {
        name: "E-commerce / Personalizado",
        description: "Lojas virtuais e sistemas complexos.",
        price: "Sob Consulta",
        features: [
            "Venda Online",
            "Área do Cliente",
            "Integração Pagamentos",
            "Gestão de Estoque",
            "Funcionalidades Sob Medida"
        ],
        highlight: false
    }
];

export default function Pricing() {
    return (
        <section className="py-24 bg-navy-950/50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-400/5 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <InViewSection>
                    <div className="text-center mb-20">
                        <h2 className="text-primary-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Investimento</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Planos que <span className="text-primary-400">Geram Resultado</span>
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Estruturas pensadas para cada momento do seu negócio, com foco total em conversão e autoridade digital.
                        </p>
                    </div>
                </InViewSection>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {plans.map((plan, index) => (
                        <InViewSection key={index}>
                            <div className={`group relative p-8 rounded-[2rem] border transition-all duration-500 h-full flex flex-col ${plan.highlight
                                ? "bg-navy-900/40 border-primary-400/30 shadow-[0_20px_50px_rgba(245,158,11,0.1)] ring-1 ring-primary-400/20"
                                : "glass-dark border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
                                }`}>

                                {plan.highlight && (
                                    <>
                                        {/* Glow effect for highlighted card */}
                                        <div className="absolute -inset-px bg-gradient-to-b from-primary-400/20 to-transparent rounded-[2rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-400 text-navy-950 text-[10px] font-black uppercase tracking-[0.2em] px-6 py-1.5 rounded-full shadow-lg shadow-primary-400/20">
                                            Mais Popular
                                        </div>
                                    </>
                                )}

                                <div className="mb-8">
                                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors uppercase tracking-tight">{plan.name}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                                </div>

                                <div className="mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-start justify-center min-h-[140px]">
                                    {plan.oldPrice ? (
                                        <>
                                            <span className="text-[10px] font-black text-primary-400/60 uppercase tracking-widest mb-1">A partir de</span>
                                            <div className="flex items-baseline gap-2 mb-1">
                                                <span className="text-sm line-through text-red-500/80 font-medium">R$ {plan.oldPrice}</span>
                                            </div>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-xl font-bold text-primary-400/80">R$</span>
                                                <span className="text-4xl font-black text-white tracking-tighter">{plan.price}</span>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="w-full flex flex-col items-center">
                                            <span className="text-3xl font-black text-white tracking-tight">{plan.price}</span>
                                            {plan.price !== "Sob Consulta" && <span className="text-primary-400 text-xs font-bold mt-2 font-mono uppercase tracking-widest">Personalizado</span>}
                                        </div>
                                    )}
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-snug group/item">
                                            <div className="mt-1 rounded-full p-0.5 bg-primary-400/10 border border-primary-400/20 group-hover/item:border-primary-400/50 transition-colors">
                                                <svg className="w-3 h-3 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="group-hover/item:text-white transition-colors">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a href="#budget-form" className={`group/btn relative overflow-hidden w-full py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] text-center transition-all ${plan.highlight
                                    ? "bg-primary-400 text-navy-950 hover:bg-primary-300 shadow-xl shadow-primary-400/10"
                                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                                    }`}>
                                    <span className="relative z-10">Selecionar Plano</span>
                                    {plan.highlight && (
                                        <div className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 bg-gradient-to-t from-white/20 to-transparent transition-transform duration-300"></div>
                                    )}
                                </a>
                            </div>
                        </InViewSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
