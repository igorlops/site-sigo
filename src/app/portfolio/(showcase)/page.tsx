"use client";

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight, Search, Layout
} from 'lucide-react';
import { sitesSimples, sitesPremium, landingPages } from '../data';

export default function Home() {
  return (
    <div className="space-y-24">
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
          {sitesPremium.map((site) => (
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
  );
}
