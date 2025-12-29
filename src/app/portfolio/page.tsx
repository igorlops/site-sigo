"use client";

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight, ShieldCheck, Zap, Star,
  ExternalLink, Search, Layout
} from 'lucide-react';

export default function Home() {

  const sitesSimples = [
    { slug: 'advocacia-empresarial', name: 'Advocacia Empresarial' },
    { slug: 'agencia-marketing', name: 'Agência de Marketing' },
    { slug: 'clinica-estetica', name: 'Clínica de Estética' },
    { slug: 'clinica-odontologica', name: 'Clínica Odontológica' },
    { slug: 'contabilidade', name: 'Escritório de Contabilidade' },
    { slug: 'imobiliaria', name: 'Imobiliária Residencial' },
    { slug: 'psicologo', name: 'Consultório de Psicologia' },
  ];

  const sitesPremium = [
    { slug: 'advocacia-empresarial', name: 'Advocacia Premium' },
    { slug: 'arquitetura-design-interiores', name: 'Arquitetura & Design' },
    { slug: 'clinica-estetica-avancada', name: 'Estética Avançada' },
    { slug: 'construtora-incorporadora', name: 'Construtora & Incorporadora' },
    { slug: 'consultoria-empresarial', name: 'Consultoria Empresarial' },
    { slug: 'energia-solar', name: 'Energia Solar' },
    { slug: 'joalheria-artesanal-premium', name: 'Joalheria Artesanal' },
  ];

  const landingPages = [
    { slug: 'personal-trainer', name: 'Personal Trainer' },
    { slug: 'nutricionista-esportivo', name: 'Nutricionista Esportivo' },
    { slug: 'clinica-odontologica', name: 'Odontologia' },
    { slug: 'clinica-estetica', name: 'Estética' },
    { slug: 'psicologo', name: 'Psicologia' },
    { slug: 'advocacia-empresarial', name: 'Advocacia' },
    { slug: 'contabilidade', name: 'Contabilidade' },
    { slug: 'imobiliaria-alto-padrao', name: 'Imobiliária Luxo' },
    { slug: 'corretor-seguros', name: 'Corretor de Seguros' },
    { slug: 'saas-financeiro', name: 'SaaS Financeiro' },
    { slug: 'saas-crm', name: 'CRM SaaS' },
    { slug: 'escola-idiomas', name: 'Escola de Idiomas' },
    { slug: 'curso-online', name: 'Curso Online' },
    { slug: 'agencia-marketing', name: 'Agência Marketing' },
    { slug: 'consultoria-empresarial', name: 'Consultoria' },
    { slug: 'clinica-veterinaria', name: 'Clínica Veterinária' },
    { slug: 'pet-shop-premium', name: 'Pet Shop' },
    { slug: 'ecommerce-nicho', name: 'E-commerce Café' },
    { slug: 'infoprodutor', name: 'Infoprodutor' },
    { slug: 'startup-tecnologia', name: 'Startup Tech' },
  ];

  const navItems = [
    { label: 'Sites Premium', href: '#premium', icon: <Star className="w-5 h-5" /> },
    { label: 'Landing Pages', href: '#landing', icon: <Zap className="w-5 h-5" /> },
    { label: 'Sites Simples', href: '#simple', icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white selection:bg-amber-500 selection:text-slate-950 flex flex-col lg:flex-row">

      {/* Sidebar Navigation (Baseado no layout Admin) */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-white/5 bg-slate-950/50 backdrop-blur-xl z-50 hidden lg:flex flex-col">
        <div className="p-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center font-black text-slate-950 group-hover:rotate-6 transition-transform shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase italic text-white group-hover:text-amber-500 transition-colors">SIGO</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Web Solutions</span>
            </div>
          </Link>
        </div>

        <nav className="mt-8 px-4 space-y-2 flex-1">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-600 px-4 mb-4">Navegação</div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 px-4 py-4 rounded-2xl transition-all border border-transparent text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/5 group"
            >
              <span className="text-slate-500 group-hover:text-amber-500 transition-colors">{item.icon}</span>
              <span className="font-bold">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 mt-auto border-t border-white/5">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors group">
            <ExternalLink size={16} className="group-hover:text-amber-500 transition-colors" />
            <span>Voltar ao Site Principal</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 w-full min-h-screen p-6 md:p-12 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto space-y-24">

          {/* Header Mobile */}
          <div className="lg:hidden flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-black text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]">S</div>
              <span className="font-black italic">SIGO Showcase</span>
            </div>
            <Link href="/" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-amber-500">Voltar ao Site</Link>
          </div>

          {/* Intro */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Showcase <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Institucional</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl font-light">
              Biblioteca exclusiva de templates de alta performance. De landing pages otimizadas a portais corporativos complexos.
            </p>

            {/* Search fake */}
            <div className="mt-8 relative max-w-md hidden md:block">
              <input type="text" placeholder="Buscar template..." className="w-full bg-slate-900 border border-slate-700 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-600" />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
            </div>
          </div>

          {/* Section Premium */}
          <section id="premium" className="scroll-mt-24">
            <div className="flex items-end justify-between mb-8 border-b border-white/5 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_#f59e0b]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">Nível Diamante</span>
                </div>
                <h2 className="text-3xl font-bold text-white">Sites Premium (AAA+)</h2>
              </div>
              <span className="hidden md:block text-slate-600 font-mono text-xs">{sitesPremium.length} PROJETOS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sitesPremium.map((site, i) => (
                <Link key={site.slug} href={`/portfolio/sites-institucionais/premium/${site.slug}`} className="group relative bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-500">
                  <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-slate-800 group-hover:to-amber-900/20 transition-all relative overflow-hidden">
                    <Layout className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 w-24 h-24 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-sm shadow-lg">Premium</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">{site.name}</h3>
                    <p className="text-xs text-slate-500 font-mono mb-4 truncate">/premium/{site.slug}</p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                      Ver Projeto <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section Landing Pages */}
          <section id="landing" className="scroll-mt-24">
            <div className="flex items-end justify-between mb-8 border-b border-white/5 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500">Alta Conversão</span>
                </div>
                <h2 className="text-3xl font-bold text-white">Landing Pages</h2>
              </div>
              <span className="hidden md:block text-slate-600 font-mono text-xs">{landingPages.length} TEMPLATES</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
              {landingPages.map((site) => (
                <Link key={site.slug} href={`/portfolio/landing-pages/${site.slug}`} className="group bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <Layout size={20} className="text-slate-600 group-hover:text-emerald-500 transition-colors" />
                    <ArrowRight size={12} className="text-slate-700 -rotate-45 group-hover:text-emerald-500 group-hover:rotate-0 transition-all duration-300" />
                  </div>
                  <h3 className="text-sm font-bold text-white leading-tight mb-1">{site.name}</h3>
                  <p className="text-[9px] text-slate-500 font-mono truncate opacity-60">/{site.slug}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Section Simples */}
          <section id="simple" className="scroll-mt-24 pb-24">
            <div className="flex items-end justify-between mb-8 border-b border-white/5 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Standard</span>
                </div>
                <h2 className="text-3xl font-bold text-white">Sites Institucionais</h2>
              </div>
              <span className="hidden md:block text-slate-600 font-mono text-xs">{sitesSimples.length} MODELOS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {sitesSimples.map((site) => (
                <Link key={site.slug} href={`/portfolio/sites-institucionais/simples/${site.slug}`} className="group border border-dashed border-slate-800 rounded-xl p-6 hover:border-solid hover:border-blue-500 hover:bg-blue-500/5 transition-all">
                  <h3 className="text-lg font-bold text-slate-300 group-hover:text-blue-400 transition-colors mb-2">{site.name}</h3>
                  <p className="text-xs text-slate-600 font-mono">/simples/{site.slug}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
