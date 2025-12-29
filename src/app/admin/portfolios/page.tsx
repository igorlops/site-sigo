"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    image_url: string;
    link_url: string;
    category: string;
    created_at: string;
}

export default function AdminPortfoliosPage() {
    const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image_url: '',
        link_url: '',
        category: ''
    });

    useEffect(() => {
        fetchPortfolios();
    }, []);

    const fetchPortfolios = async () => {
        try {
            const response = await fetch('/api/portfolio');
            if (response.ok) {
                const data = await response.json();
                setPortfolios(data);
            }
        } catch (error) {
            console.error('Failed to fetch portfolios:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/portfolio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormData({ title: '', description: '', image_url: '', link_url: '', category: '' });
                setShowForm(false);
                fetchPortfolios();
            } else {
                alert('Erro ao criar portfólio');
            }
        } catch (error) {
            console.error('Submit error:', error);
            alert('Erro inesperado');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-8 pb-20">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase">
                        Gestão de <span className="text-primary-400">Portfólios</span>
                    </h1>
                    <p className="text-gray-500 mt-2 font-medium">Adicione e gerencie os projetos exibidos na página de modelos.</p>
                </div>

                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-primary-400 text-navy-950 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                    {showForm ? 'Cancelar' : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Adicionar Projeto
                        </>
                    )}
                </button>
            </header>

            {/* Creation Form */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        className="overflow-hidden"
                    >
                        <div className="glass-dark rounded-[2.5rem] border border-primary-400/20 p-8 lg:p-12 mb-12 relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <div className="space-y-6">
                                    <div className="group">
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-primary-400 mb-2 ml-2">Título do Projeto</label>
                                        <input
                                            type="text"
                                            name="title"
                                            required
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            placeholder="Ex: E-commerce de Moda"
                                            className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-400/50 transition-all font-medium"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-primary-400 mb-2 ml-2">URL da Imagem (Thumbnail)</label>
                                        <input
                                            type="url"
                                            name="image_url"
                                            required
                                            value={formData.image_url}
                                            onChange={handleInputChange}
                                            placeholder="https://images.unsplash.com/..."
                                            className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-400/50 transition-all font-medium"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-primary-400 mb-2 ml-2">Link do Site (Opcional)</label>
                                        <input
                                            type="url"
                                            name="link_url"
                                            value={formData.link_url}
                                            onChange={handleInputChange}
                                            placeholder="https://exemplo.com"
                                            className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-400/50 transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="group">
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-primary-400 mb-2 ml-2">Categoria</label>
                                        <input
                                            type="text"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            placeholder="Ex: Institucional, Landing Page, E-commerce"
                                            className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-400/50 transition-all font-medium"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-primary-400 mb-2 ml-2">Descrição Curta</label>
                                        <textarea
                                            name="description"
                                            rows={5}
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            placeholder="Descreva as principais funcionalidades e o design do projeto..."
                                            className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-400/50 transition-all font-medium resize-none text-sm"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-5 bg-gradient-to-r from-primary-400 to-primary-600 text-navy-950 font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_40px_rgba(245,158,11,0.2)] transition-all disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Salvando...' : 'Salvar Portfólio'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Portfolios List */}
            <div className="glass-dark rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                    <h2 className="text-xl font-black text-white italic tracking-tight underline decoration-primary-400/30 decoration-4">Projetos Atuais</h2>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{portfolios.length} sites cadastrados</span>
                </div>

                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 border-4 border-primary-400/20 border-t-primary-400 rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                        {portfolios.map((item) => (
                            <div key={item.id} className="group glass-dark border border-white/5 rounded-3xl overflow-hidden hover:border-primary-400/30 transition-all duration-500">
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src={item.image_url}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        unoptimized
                                    />
                                    <div className="absolute inset-x-4 bottom-4 flex justify-between items-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="bg-primary-400 text-navy-950 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                                            {item.category || 'Web'}
                                        </span>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 rounded-full bg-navy-950 border border-white/20 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all scale-90 hover:scale-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-white font-black group-hover:text-primary-400 transition-colors uppercase italic text-sm tracking-tight">{item.title}</h3>
                                    <p className="text-gray-500 text-xs mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}

                        {portfolios.length === 0 && (
                            <div className="col-span-full py-20 text-center opacity-30 grayscale">
                                <p className="font-black uppercase tracking-[0.3em] text-sm">Nenhum portfólio disponível</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
