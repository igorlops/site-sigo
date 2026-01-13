"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layout } from 'lucide-react';
import { landingPages } from '../../data';

export default function LandingPagesPage() {
    return (
        <div className="space-y-12">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500">Alta Conversão</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                    Landing Pages
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl font-light">
                    Templates otimizados para máxima conversão, ideais para campanhas de tráfego pago e lançamento de produtos.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {landingPages.map((site) => (
                    <Link
                        key={site.slug}
                        href={`/portfolio/landing-pages/${site.slug}`}
                        className="group bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <Layout size={20} className="text-slate-600 group-hover:text-emerald-500 transition-colors" />
                            <ArrowRight size={12} className="text-slate-700 -rotate-45 group-hover:text-emerald-500 group-hover:rotate-0 transition-all duration-300" />
                        </div>
                        <h3 className="text-sm font-bold text-white leading-tight mb-1">{site.name}</h3>
                        <p className="text-[9px] text-slate-500 font-mono truncate opacity-60">/{site.slug}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
