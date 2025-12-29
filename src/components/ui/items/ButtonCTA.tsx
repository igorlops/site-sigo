interface ButtonCTAProps {
    title: string;
}

export default function ButtonCTA({ title }: ButtonCTAProps) {
    return (
        <a
            href="https://api.whatsapp.com/send/?phone=85992100969&text=Olá%2C+tenho+interesse+em+um+site+para+meu+negócio.&type=phone_number&app_absent=0"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-600 text-navy-950 font-black rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group"
        >
            <span className="mr-2">{title}</span>
            <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </a>
    )
}