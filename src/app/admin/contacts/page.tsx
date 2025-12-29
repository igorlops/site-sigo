"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Contact {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    message: string;
    created_at: string;
}

export default function AdminContactsPage() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await fetch('/api/contact');
            if (response.ok) {
                const data = await response.json();
                setContacts(data);
            }
        } catch (error) {
            console.error('Failed to fetch contacts:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase">
                        Gestão de <span className="text-primary-400">Contatos</span>
                    </h1>
                    <p className="text-gray-500 mt-2 font-medium">Visualize e gerencie todas as solicitações recebidas pelo site.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-navy-900 border border-white/5 px-6 py-3 rounded-2xl flex items-center gap-4">
                        <span className="text-primary-400 font-black text-2xl leading-none">{contacts.length}</span>
                        <span className="text-gray-500 uppercase text-[10px] font-black tracking-widest leading-none">Total de<br />Mensagens</span>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                {/* List View */}
                <div className={`xl:col-span-12 transition-all duration-500 ${selectedContact ? 'xl:col-span-12 md:xl:col-span-5' : 'xl:col-span-12'}`}>
                    <div className="glass-dark rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                        {loading ? (
                            <div className="py-20 flex flex-col items-center justify-center">
                                <div className="w-12 h-12 border-4 border-primary-400/20 border-t-primary-400 rounded-full animate-spin"></div>
                                <p className="text-gray-500 mt-4 font-bold animate-pulse italic">Carregando contatos...</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/5 bg-white/5">
                                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Nome</th>
                                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">E-mail</th>
                                            {!selectedContact && (
                                                <>
                                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Data</th>
                                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 text-right">Ação</th>
                                                </>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contacts.map((contact) => (
                                            <tr
                                                key={contact.id}
                                                onClick={() => setSelectedContact(contact)}
                                                className={`group border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer ${selectedContact?.id === contact.id ? 'bg-primary-400/5' : ''}`}
                                            >
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-navy-900 border border-white/10 flex items-center justify-center text-primary-400 font-bold group-hover:border-primary-400/50 transition-colors">
                                                            {contact.first_name[0]}
                                                        </div>
                                                        <span className="font-bold text-white group-hover:text-primary-400 transition-colors">
                                                            {contact.first_name} {contact.last_name}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <span className="text-gray-400 text-sm">{contact.email}</span>
                                                </td>
                                                {!selectedContact && (
                                                    <>
                                                        <td className="px-8 py-6">
                                                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">{formatDate(contact.created_at)}</span>
                                                        </td>
                                                        <td className="px-8 py-6 text-right">
                                                            <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary-400 hover:bg-primary-400 hover:text-navy-950 transition-all duration-300">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </>
                                                )}
                                            </tr>
                                        ))}
                                        {contacts.length === 0 && (
                                            <tr>
                                                <td colSpan={selectedContact ? 2 : 4} className="px-8 py-20 text-center">
                                                    <div className="text-4xl mb-4 opacity-20">📭</div>
                                                    <p className="text-gray-600 font-bold uppercase tracking-widest italic text-sm">Nenhum contato encontrado no momento.</p>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                {/* Detail View */}
                <AnimatePresence>
                    {selectedContact && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            className="xl:col-span-7 h-full"
                        >
                            <div className="sticky top-8 bg-navy-900 border border-primary-400/20 rounded-[2.5rem] p-10 shadow-[0_0_50px_rgba(245,158,11,0.05)] overflow-hidden relative">
                                {/* Decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                                <div className="flex items-start justify-between mb-10">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-primary-400/10 border border-primary-400/30 flex items-center justify-center text-primary-400 text-2xl font-black">
                                            {selectedContact.first_name[0]}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-black text-white italic">{selectedContact.first_name} {selectedContact.last_name}</h2>
                                            <span className="text-primary-400 text-xs font-black uppercase tracking-widest">{formatDate(selectedContact.created_at)}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedContact(null)}
                                        className="p-3 rounded-full hover:bg-white/5 border border-white/5 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="space-y-8">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">E-mail Corporativo</span>
                                            <p className="text-white font-medium break-all">{selectedContact.email}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Telefone / WhatsApp</span>
                                            <p className="text-white font-medium">{selectedContact.phone || '(Não informado)'}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-6 border-t border-white/5">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Descrição do Projeto</span>
                                        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl text-sm italic">
                                            &quot;{selectedContact.message}&quot;
                                        </div>
                                    </div>

                                    <div className="pt-8 flex gap-4">
                                        <a
                                            href={`mailto:${selectedContact.email}`}
                                            className="flex-1 py-4 bg-primary-400 text-navy-950 rounded-2xl font-black uppercase tracking-widest text-center text-xs hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:-translate-y-1 transition-all"
                                        >
                                            Responder por E-mail
                                        </a>
                                        {selectedContact.phone && (
                                            <a
                                                href={`https://api.whatsapp.com/send?phone=${selectedContact.phone.replace(/\D/g, '')}`}
                                                target="_blank"
                                                className="flex-1 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-center text-xs hover:bg-white/10 transition-all"
                                            >
                                                WhatsApp
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
