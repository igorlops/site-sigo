interface CardProps {
    title: string;
    content: JSX.Element;
    image: JSX.Element;
}

export default function Card({ title, content, image }: CardProps) {
    return (
        <div className="group relative glass-dark duration-500 hover:scale-[1.03] hover:border-primary-400/50 hover:shadow-primary-400/10 transition-all p-8 rounded-3xl flex flex-col items-center text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-400/10 blur-[80px] group-hover:bg-primary-400/20 transition-colors duration-500"></div>

            <div className="relative mb-8 p-5 rounded-2xl bg-white/5 border border-white/10 text-primary-400 group-hover:scale-110 group-hover:border-primary-400/30 transition-all duration-500 w-20 h-20 flex justify-center items-center">
                <div className="w-12 h-12 flex items-center justify-center">
                    {image}
                </div>
            </div>

            <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary-400 transition-colors tracking-tight">
                {title}
            </h3>

            <div className="text-gray-400 text-base leading-relaxed font-medium">
                {content}
            </div>

            {/* Subtle bottom indicator */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
        </div>
    );
}