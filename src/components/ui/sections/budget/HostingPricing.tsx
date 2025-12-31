import InViewSection from "../../items/InViewSection";

const hostingPlans = [
    {
        name: "Plano Essencial",
        price: "59",
        description: "Para quem só quer o site no ar",
        features: [
            "Hospedagem em servidor compartilhado ou cloud",
            "Certificado SSL",
            "Backup semanal",
            "Monitoramento básico de disponibilidade",
            "Suporte apenas para indisponibilidade do site"
        ],
        notIncluded: [
            "Alterações de conteúdo ou layout",
            "Suporte sob demanda",
            "Manutenção técnica",
            "Atualizações"
        ],
        profile: "Pequenos negócios, landing institucional, baixo volume de acesso.",
        highlight: false
    },
    {
        name: "Plano Profissional",
        price: "119",
        description: "O mais contratado",
        features: [
            "Hospedagem otimizada (cloud)",
            "Certificado SSL",
            "Backup diário",
            "Monitoramento contínuo",
            "Atualizações técnicas básicas",
            "Até 30 minutos/mês para pequenos ajustes (Texto, Imagem, Link)",
            "Suporte por WhatsApp ou e-mail (horário comercial)"
        ],
        notIncluded: [
            "Alterações estruturais",
            "Novas seções",
            "Integrações avançadas"
        ],
        profile: "Negócios que usam a landing para captação ativa de leads.",
        highlight: true
    },
    {
        name: "Plano Premium",
        price: "249",
        description: "Para quem depende de performance e estabilidade",
        features: [
            "Hospedagem dedicada ou recursos isolados",
            "SSL avançado",
            "Backup diário com retenção estendida",
            "Monitoramento + alertas",
            "Otimização de performance periódica",
            "Atualizações contínuas",
            "Até 1 hora/mês de ajustes",
            "Suporte prioritário",
            "Apoio técnico para campanhas de tráfego pago"
        ],
        notIncluded: [
            "Desenvolvimento de novas funcionalidades",
            "Redesign completo"
        ],
        profile: "Tráfego pago, lançamentos, serviços de alto ticket.",
        highlight: false
    }
];

export default function HostingPricing() {
    return (
        <section className="py-24 bg-navy-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-400 via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <InViewSection>
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-primary-400 font-mono text-sm tracking-[0.33em] uppercase mb-4">Manutenção & Performance</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-8">
                            Planos de <span className="text-secondary-400">Hospedagem</span>
                        </h3>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-secondary-400/5 blur-2xl rounded-[3rem] -z-10 group-hover:bg-secondary-400/10 transition-colors"></div>
                            <div className="glass-dark p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary-400/50"></div>
                                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium italic">
                                    "O desenvolvimento do site é um projeto com início, meio e fim. A hospedagem é um serviço contínuo, essencial para manter o site no ar com segurança, desempenho e suporte."
                                </p>
                            </div>
                        </div>
                    </div>
                </InViewSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hostingPlans.map((plan, index) => (
                        <InViewSection key={index}>
                            <div className={`group relative p-10 rounded-[2.5rem] border transition-all duration-500 h-full flex flex-col ${plan.highlight
                                ? "bg-navy-900/40 border-secondary-400/30 shadow-[0_20px_50px_rgba(34,211,238,0.1)] ring-1 ring-secondary-400/20"
                                : "glass-dark border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
                                }`}>

                                {plan.highlight && (
                                    <>
                                        <div className="absolute -inset-px bg-gradient-to-b from-secondary-400/15 to-transparent rounded-[2.5rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-400 text-navy-950 text-[10px] font-black uppercase tracking-[0.2em] px-6 py-1.5 rounded-full shadow-lg shadow-primary-400/20 z-20">
                                            Mais Recomendado
                                        </div>
                                    </>
                                )}

                                <div className="mb-10">
                                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary-400 transition-colors uppercase tracking-tight">{plan.name}</h4>
                                    <p className="text-gray-400 text-sm font-medium uppercase tracking-widest leading-loose opacity-60 mb-6">{plan.description}</p>

                                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 inline-flex flex-col">
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Investimento</span>
                                        <span className="text-sm font-bold text-white">A partir de</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-lg font-bold text-white">R$</span>
                                            <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
                                            <span className="text-gray-500 text-sm font-bold ml-1">/mês</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8 mb-10">
                                    <div>
                                        <p className="text-[10px] font-black text-primary-400/80 uppercase tracking-[0.25em] mb-4">Tecnologia & Suporte</p>
                                        <ul className="space-y-4">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-snug group/item">
                                                    <div className="mt-1 rounded-full p-0.5 bg-secondary-400/10 border border-secondary-400/20 group-hover/item:border-secondary-400/50 transition-colors">
                                                        <svg className="w-3 h-3 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <span className="group-hover/item:text-white transition-colors">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-black text-red-400/50 uppercase tracking-[0.25em] mb-4">Não incluso</p>
                                        <ul className="space-y-2 opacity-50">
                                            {plan.notIncluded.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-400 text-xs strike-through decoration-red-500/30">
                                                    <svg className="w-3 h-3 text-red-500/60 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <div className="bg-navy-900/60 p-5 rounded-2xl border border-white/5 mb-8 group-hover:border-secondary-400/20 transition-colors">
                                        <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-2 font-mono">Ideal para:</p>
                                        <p className="text-xs text-gray-400 leading-relaxed">{plan.profile}</p>
                                    </div>

                                    <a href="#budget-form" className={`group/btn relative overflow-hidden w-full py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] text-center transition-all block ${plan.highlight
                                        ? "bg-primary-400 text-navy-950 hover:bg-primary-300 shadow-xl shadow-primary-400/20"
                                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                                        }`}>
                                        <span className="relative z-10">Assinar Plano</span>
                                        {plan.highlight && (
                                            <div className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 bg-gradient-to-t from-white/20 to-transparent transition-transform duration-300"></div>
                                        )}
                                    </a>
                                </div>
                            </div>
                        </InViewSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
