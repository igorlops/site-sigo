"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "./Icons/WhatsAppIcon";

export default function FloatingChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = () => {
        const phoneNumber = "5585992100969"; // Replace with actual number if different
        const text = encodeURIComponent(message);
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
        window.open(url, "_blank");
        setIsOpen(false);
        setMessage("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 pointer-events-none">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="pointer-events-auto bg-navy-950/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-[300px] sm:w-[350px] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-400 to-primary-600 p-4 flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-navy-950">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-primary-500"></div>
                            </div>
                            <div>
                                <h4 className="font-bold text-navy-950 text-sm">Suporte Online</h4>
                                <p className="text-navy-950/70 text-xs">Normalmente responde em instantes</p>
                            </div>
                            <button onClick={toggleChat} className="ml-auto text-navy-950/70 hover:text-navy-950">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4 bg-navy-900/50 h-[250px] flex flex-col gap-4 overflow-y-auto">
                            <div className="self-start bg-white/10 text-gray-200 rounded-2xl rounded-tl-none p-3 text-sm max-w-[85%]">
                                Olá! 👋 Como podemos ajudar você hoje?
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-navy-950 border-t border-white/5 flex gap-2">
                            <input
                                type="text"
                                placeholder="Digite sua mensagem..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary-400/50 transition-colors"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            />
                            <button
                                onClick={handleSend}
                                className="bg-primary-400 hover:bg-primary-500 text-navy-950 p-2 rounded-full transition-colors flex-shrink-0"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button */}
            <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.3)] flex items-center justify-center transition-all relative group"
            >
                <span className="absolute right-0 top-0 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                ) : (
                    <WhatsAppIcon />
                )}
            </motion.button>
        </div>
    );
}
