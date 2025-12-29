"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const navItems = [
        {
            href: '/admin/contacts',
            label: 'Contatos',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            )
        },
        {
            href: '/admin/portfolios',
            label: 'Portfólios',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM2.25 14.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v3.375c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-3.375z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-navy-950 font-sans text-white selection:bg-primary-400 selection:text-navy-950">
            {/* Sidebar / Navigation */}
            <aside className="fixed left-0 top-0 h-full w-64 border-r border-white/5 bg-navy-950/50 backdrop-blur-xl z-50 hidden lg:block">
                <div className="p-8">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-primary-400 rounded-xl flex items-center justify-center font-black text-navy-950 group-hover:rotate-6 transition-transform">
                            S
                        </div>
                        <span className="text-xl font-black tracking-tighter uppercase italic">SIGO Admin</span>
                    </Link>
                </div>

                <nav className="mt-8 px-4 space-y-2">
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all border ${active
                                        ? "bg-primary-400/10 text-primary-400 border-primary-400/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
                                        : "text-gray-500 hover:text-white hover:bg-white/5 border-transparent"
                                    }`}
                            >
                                {item.icon}
                                <span className="font-bold">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-8 left-0 w-full px-8">
                    <Link href="/" className="text-gray-600 hover:text-white text-sm flex items-center gap-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Voltar ao Site
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:ml-64 min-h-screen p-8 lg:p-12 relative overflow-hidden">
                {/* Ambient Glows */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400/5 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
