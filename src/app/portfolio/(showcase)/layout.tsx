"use client";

import React from "react";
import BackToSites from "@/components/ui/items/BackToSites";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { navItems } from '../data';

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white selection:bg-amber-500 selection:text-slate-950 flex flex-col lg:flex-row">

      {/* Sidebar Navigation */}
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
          {navItems.map((item: any) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all border border-transparent group ${isActive
                    ? 'bg-amber-500/10 border-amber-500/20 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/5'
                  }`}
              >
                <span className={`${isActive ? 'text-amber-500' : 'text-slate-500 group-hover:text-amber-500'} transition-colors`}>
                  {item.icon}
                </span>
                <span className="font-bold">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 mt-auto border-t border-white/5">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors group">
            <ExternalLink size={16} className="group-hover:text-amber-500 transition-colors" />
            <span>Voltar ao Site Principal</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 w-full min-h-screen relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

        {/* Header Mobile */}
        <div className="lg:hidden flex justify-between items-center p-6 border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-black text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]">S</div>
            <span className="font-black italic">SIGO Showcase</span>
          </div>
          <Link href="/" className="text-xs font-bold uppercase tracking-widest text-amber-500">Voltar ao Site</Link>
        </div>

        <div className="p-6 md:p-12 max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      <BackToSites />
    </div>
  );
}
