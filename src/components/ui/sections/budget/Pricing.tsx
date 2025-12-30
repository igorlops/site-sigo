import InViewSection from "../../items/InViewSection";

const plans = [
    {
        name: "Landing Page",
        description: "Ideal para campanhas e produtos únicos.",
        price: "A partir de R$ 299,97",
        features: [
            "Design Exclusivo",
            "Alta Conversão",
            "SEO Básico",
            "Integração WhatsApp",
            "Hospedagem Inclusa (1 ano)"
        ],
        highlight: false
    },
    {
        name: "Site Institucional Standart",
        description: "Para empresas dominar o mundo digital.",
        price: "A partir de R$ 499,97",
        features: [
            "Até 5 Páginas",
            "Design Standart",
            "SEO Básico",
            "Integração WhatsApp",
            "Hospedagem Inclusa (1 ano)"
        ],
        highlight: false
    },
    {
        name: "Site Institucional Premium",
        description: "Para empresas que querem fortalecer a marca.",
        price: "A partir de R$ 999,97",
        features: [
            "Até 7 Páginas",
            "Design Premium",
            "SEO Otimizado",
            "Integração WhatsApp",
            "Hospedagem Inclusa (1 ano)"
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
        <section className="py-20 bg-navy-900/50">
            <div className="container mx-auto px-6">
                <InViewSection>
                    <div className="text-center mb-16">
                        <h2 className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-4">Investimento</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white">
                            Planos que <span className="text-primary-400">Geram Resultado</span>
                        </h3>
                    </div>
                </InViewSection>

                <div className="flex justify-center gap-4 flex-wrap">
                    {plans.map((plan, index) => (
                        <InViewSection key={index}>
                            <div className={`relative p-8 rounded-3xl border transition-all h-full flex flex-col xs:basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 ${plan.highlight
                                ? "glass border-primary-400/30 shadow-[0_0_50px_rgba(245,158,11,0.1)]"
                                : "glass-dark border-white/5 hover:border-white/20"
                                }`}>
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-400 text-navy-950 text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full">
                                        Mais Popular
                                    </div>
                                )}
                                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                                <div className="text-3xl font-black text-primary-400 mb-8">{plan.price}</div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                            <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#budget-form" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.highlight
                                    ? "bg-primary-400 text-navy-950 hover:bg-primary-500 hover:shadow-lg"
                                    : "bg-white/5 text-white hover:bg-white/10"
                                    }`}>
                                    Selecionar
                                </a>
                            </div>
                        </InViewSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
