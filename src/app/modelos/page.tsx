"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import Navbar from "@/components/ui/sections/navbar/Navbar";
import ParticlesBackground from "@/components/ui/items/Particles";
import PageTitle from "@/components/ui/items/PageTitle";
import Footer from "@/components/ui/sections/footer/Footer";
import { useRef } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image_url: string;
  link_url: string;
  category: string;
}

export default function ModelosPage() {
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Dummies for Navbar compatibility (on this page they don't scroll)
  const dummyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await fetch('/api/portfolio');
        if (response.ok) {
          const data = await response.json();
          setPortfolios(data);
        }
      } catch (error) {
        console.error("Failed to fetch portfolios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  return (
    <main className="bg-navy-950 min-h-screen text-white relative overflow-hidden">
      <Navbar
        activeSection="modelos"
        homeRef={dummyRef}
        serviceRef={dummyRef}
        aboutRef={dummyRef}
        contactRef={dummyRef}
      />

      <ParticlesBackground />

      {/* Ambient Glows */}
      <div className="absolute top-40 -left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle
              title="Nossos Modelos"
              subtitle="Explore nossa galeria de projetos e inspire-se para a sua próxima presença digital. Cada site é uma obra de equilíbrio entre design e performance."
            />
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400"></div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            >
              {portfolios.length > 0 ? portfolios.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -10 }}
                  className="group relative glass-dark rounded-3xl overflow-hidden border border-white/10 hover:border-primary-400/50 transition-all duration-500 shadow-2xl"
                >
                  <div className="aspect-video w-full overflow-hidden relative">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="bg-primary-400 text-navy-950 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                        {item.category || 'Web Design'}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {item.description}
                    </p>
                    <a
                      href={item.link_url}
                      target="_blank"
                      className="inline-flex items-center text-primary-400 font-bold text-sm tracking-widest uppercase group/link"
                    >
                      Ver Projeto Ao Vivo
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </motion.div>
              )) : (
                <div className="col-span-full text-center py-20 px-8 glass-dark rounded-3xl border border-white/10">
                  <div className="text-6xl mb-6">✨</div>
                  <h3 className="text-2xl font-black text-white mb-4 italic">Novos Modelos em Breve...</h3>
                  <p className="text-gray-400 max-w-lg mx-auto">
                    Estamos finalizando o upload de nossa nova galeria. <br />
                    Enquanto isso, você pode solicitar um orçamento personalizado para o seu nicho.
                  </p>
                  <div className="mt-8">
                    <Link href="/#contact" className="bg-primary-400 text-navy-950 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform inline-block">
                      Falar com nossa equipe
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}