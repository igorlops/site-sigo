import { InputText } from "./InputText";
import { useState } from "react";

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
                "https://sigowebsolutions.com.br/controlpanel-hostinger/api/send_email",
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
                    text: "Mensagem enviada com sucesso!",
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
        <>
            {responseMessage && (
                <div
                    className={`p-4 my-3 text-white font-bold rounded-md ${
                        responseMessage.type === "success" ? "bg-green-500" : "bg-red-500"
                    }`}
                >
                    {responseMessage.text}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mt-10 flex flex-wrap flex-col text-white">
                    <div className="sm:col-span-3 my-3">
                        <InputText
                            label="Primeiro nome"
                            name="first_name"
                            type="text"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="sm:col-span-3 my-3">
                        <InputText
                            label="Segundo nome"
                            name="last_name"
                            type="text"
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="sm:col-span-4 my-3">
                        <InputText
                            label="Seu melhor e-mail"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="sm:col-span-4 my-3">
                        <InputText
                            label="Telefone"
                            name="phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="sm:col-span-4 my-3">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium leading-6 text-gray-50"
                        >
                            Digite aqui a sua ideia
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            maxLength={300}
                            className="block w-full rounded-lg border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-amber-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-300 focus:outline-none sm:text-sm sm:leading-8 focus:shadow focus:shadow-md focus:transition focus:shadow-amber-300"
                            placeholder="Digite sua ideia aqui"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <button
                    className="hover:scale-105 transition duration-300 ease-in-out px-5 py-2 my-5 bg-amber-300 rounded-md hover:bg-amber-600 hover:ring-amber-700 hover:text-white font-bold ring-1 ring-inset ring-amber-400"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </>
    );
}
