"use client";

import { InputText } from "../../items/InputText";
import { useState } from "react";
import { motion } from "framer-motion";

type FormData = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    project_type: string;
    budget_range: string;
    deadline: string;
    message: string;
};

type ResponseMessage = {
    type: "success" | "error";
    text: string;
} | null;

export default function FormBudget() {
    const [formData, setFormData] = useState<FormData>({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        project_type: "landing-page",
        budget_range: "",
        deadline: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState<ResponseMessage>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage(null);

        try {
            const response = await fetch(
                "/api/budget",
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
                    text: data.message || "Orçamento solicitado com sucesso! Entraremos em contato.",
                });
                // Reset form optionally
            } else {
                setResponseMessage({
                    type: "error",
                    text: data.message || "Erro ao enviar solicitação.",
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
        <div className="relative" id="budget-form">
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

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Tipo de Projeto</label>
                        <select
                            name="project_type"
                            value={formData.project_type}
                            onChange={handleChange}
                            className="block w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400/50 transition-all backdrop-blur-sm hover:border-white/20 sm:text-sm"
                        >
                            <option value="landing-page">Landing Page</option>
                            <option value="institucional">Site Institucional</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="sistema">Sistema Web / App</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Orçamento Estimado</label>
                        <select
                            name="budget_range"
                            value={formData.budget_range}
                            onChange={handleChange}
                            className="block w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400/50 transition-all backdrop-blur-sm hover:border-white/20 sm:text-sm"
                        >
                            <option value="">Selecione...</option>
                            <option value="ate-2k">Até R$ 2.000</option>
                            <option value="2k-5k">R$ 2.000 - R$ 5.000</option>
                            <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                            <option value="acima-10k">Acima de R$ 10.000</option>
                        </select>
                    </div>
                </div>

                <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Prazo Desejado (Opcional)</label>
                    <input
                        type="text"
                        name="deadline"
                        className="block w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400/50 transition-all backdrop-blur-sm hover:border-white/20 sm:text-sm"
                        placeholder="Ex: 30 dias, Mês que vem..."
                        value={formData.deadline}
                        onChange={handleChange}
                    />
                </div>

                <div className="group">
                    <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary-400 transition-colors"
                    >
                        Detalhes do Projeto
                    </label>
                    <div className="relative">
                        <textarea
                            name="message"
                            id="message"
                            maxLength={500}
                            className="block w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400/50 transition-all backdrop-blur-sm hover:border-white/20 sm:text-sm min-h-[150px] resize-none"
                            placeholder="Descreva funcionalidades específicas, referências ou dúvidas..."
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>

                <button
                    className="w-full py-5 bg-gradient-to-r from-primary-400 to-primary-600 text-navy-950 font-black uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                        <span>Processando...</span>
                    ) : (
                        <span>Enviar Solicitação de Orçamento</span>
                    )}
                </button>
            </form>
        </div>
    );
}
