"use client";

import Link from "next/link";
import { ArrowLeft, Layout } from "lucide-react";

export default function BackToPortfolio() {
    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            <Link
                href="/portfolio"
                className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:bg-amber-600 hover:scale-105 transition-all text-sm font-bold border border-white/10 group"
                title="Voltar para o Portfólio"
            >
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <ArrowLeft size={16} />
                </div>
                <div className="flex flex-col items-start leading-tight pr-2">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-amber-200">Portfolio</span>
                    <span className="font-black italic">SIGO</span>
                </div>
            </Link>
        </div>
    );
}
