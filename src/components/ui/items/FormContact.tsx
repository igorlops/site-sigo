"use client";

import { InputText } from "./InputText";
import { useState } from "react";
import { motion } from "framer-motion";

type FormData = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    message: string;
};

type ResponseMessage = {
    type: "success" | "error";
    text: string;
} | null;

export default function FormContact() {
    const [formData, setFormData] = useState<FormData>({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState<ResponseMessage>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage(null);

        try {
            const response = await fetch(
                "/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setResponseMessage({
                    type: "success",
                    text: data.message || "Obrigado por nos contatar, em breve entraremos em contato!",
                });
            } else {
                setResponseMessage({
                    type: "error",
                    text: data.message || "Erro ao enviar a mensagem.",
                });
            }
        } catch {
            setResponseMessage({
                type: "error",
                text: "Ocorreu um erro inesperado. Por favor, tente novamente.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative">
            {responseMessage && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 mb-6 text-sm font-bold rounded-xl flex items-center gap-3 backdrop-blur-md border ${responseMessage.type === "success"
                        ? "bg-green-500/10 border-green-500/50 text-green-400"
                        : "bg-red-500/10 border-red-500/50 text-red-400"
                        }`}
                >
                    {responseMessage.type === "success" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                    )}
                    {responseMessage.text}
                </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText
                        label="Nome"
                        name="first_name"
                        type="text"
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                    <InputText
                        label="Sobrenome"
                        name="last_name"
                        type="text"
                        value={formData.last_name}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText
                        label="E-mail Corporativo"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <InputText
                        label="WhatsApp / Telefone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="group">
                    <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary-400 transition-colors"
                    >
                        Descreva seu Projeto
                    </label>
                    <div className="relative">
                        <textarea
                            name="message"
                            id="message"
                            maxLength={300}
                            className="block w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400/50 transition-all backdrop-blur-sm hover:border-white/20 sm:text-sm min-h-[150px] resize-none"
                            placeholder="Conte-nos um pouco sobre sua ideia, objetivos e prazos..."
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500"></div>
                    </div>
                </div>

                <button
                    className="w-full py-5 bg-primary-400 text-navy-950 font-black uppercase tracking-widest rounded-xl hover:bg-primary-300 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-primary-400/10 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-navy-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Processando...</span>
                        </>
                    ) : (
                        <>
                            <span>Enviar Solicitação</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
