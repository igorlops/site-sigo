'use client'

import Footer from "@/components/ui/sections/footer/Footer";
import Navbar from "@/components/ui/sections/navbar/Navbar";
import { useRef, useState } from "react";
import Process from "@/components/ui/sections/budget/Process";
import Pricing from "@/components/ui/sections/budget/Pricing";
import FormBudget from "@/components/ui/sections/budget/FormBudget";
import InViewSection from "@/components/ui/items/InViewSection";
import HostingPricing from "@/components/ui/sections/budget/HostingPricing";

export default function OrcamentoPage() {
    const homeRef = useRef<HTMLElement>(null);
    const serviceRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    // Default active section for navbar on this page
    const [activeSection] = useState<string>("budget");

    return (
        <main className="bg-navy-950 min-h-screen">
            <Navbar
                activeSection={activeSection}
                homeRef={homeRef} // Pass refs even if not used for scroll on this page, or implement cross-page nav logic
                serviceRef={serviceRef}
                aboutRef={aboutRef}
                contactRef={contactRef}
            />

            {/* Simple Spacer for Fixed Navbar */}
            <div className="h-24"></div>

            {/* Header / Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-400/5 rounded-full blur-[100px] -z-10"></div>
                <div className="container mx-auto px-6 text-center">
                    <InViewSection>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                            Solicite seu <br />
                            <span className="text-primary-400">Orçamento</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Transforme sua ideia em um projeto digital de alto impacto.
                            Preencha o formulário e receba uma proposta personalizada.
                        </p>
                    </InViewSection>
                </div>
            </section>

            <Process />

            <Pricing />

            <HostingPricing />

            <section className="py-20 relative overflow-hidden bg-mesh" id="budget-form-section">
                <div className="container mx-auto px-6 max-w-4xl">
                    <InViewSection>
                        <div className="glass-dark p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
                            <h4 className="text-3xl font-bold text-white mb-8 text-center">Detalhes do Projeto</h4>
                            <FormBudget />
                        </div>
                    </InViewSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
