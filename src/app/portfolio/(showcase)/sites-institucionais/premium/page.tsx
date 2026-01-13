"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layout } from 'lucide-react';
import { sitesPremium } from '../../../data';

export default function PremiumSitesPage() {
    return (
        <div className="space-y-12">
            <div className="flex items-end justify-between border-b border-white/5 pb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_#f59e0b]" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">Nível Diamante</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        Sites Premium (AAA+)
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl font-light">
                        O ápice do design e funcionalidade. Experiências imersivas com animações exclusivas e acabamento de luxo.
                    </p>
                </div>
                <span className="hidden md:block text-slate-600 font-mono text-xs">{sitesPremium.length} PROJETOS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {sitesPremium.map((site) => (
                    <Link
                        key={site.slug}
                        href={`/portfolio/sites-institucionais/premium/${site.slug}`}
                        className="group relative bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-500"
                    >
                        <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-slate-800 group-hover:to-amber-900/20 transition-all relative overflow-hidden">
                            <Layout className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 w-32 h-32 group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-sm shadow-lg">Premium</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">{site.name}</h3>
                            <p className="text-xs text-slate-500 font-mono mb-6 uppercase tracking-wider">/premium/{site.slug}</p>
                            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                                Ver Projeto Individual <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
