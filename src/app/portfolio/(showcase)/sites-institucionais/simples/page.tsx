"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { sitesSimples } from '../../../data';

export default function SimpleSitesPage() {
    return (
        <div className="space-y-12">
            <div className="flex items-end justify-between border-b border-white/5 pb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Standard</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        Sites Institucionais
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl font-light">
                        Presença digital sólida e profissional. Estruturas validadas para apresentar sua empresa com clareza e credibilidade.
                    </p>
                </div>
                <span className="hidden md:block text-slate-600 font-mono text-xs">{sitesSimples.length} MODELOS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sitesSimples.map((site) => (
                    <Link
                        key={site.slug}
                        href={`/portfolio/sites-institucionais/simples/${site.slug}`}
                        className="group block border border-dashed border-slate-800 rounded-2xl p-8 hover:border-solid hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-xl font-bold text-slate-300 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                                {site.name}
                            </h3>
                            <ArrowRight className="text-slate-700 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" size={20} />
                        </div>
                        <p className="text-xs text-slate-600 font-mono mb-4 uppercase tracking-widest">/simples/{site.slug}</p>
                        <div className="h-1 w-12 bg-slate-800 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500" />
                    </Link>
                ))}
            </div>
        </div>
    );
}
