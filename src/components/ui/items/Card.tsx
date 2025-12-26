interface CardProps {
    title: string;
    content: JSX.Element;
    image: JSX.Element;
}

export default function Card({ title, content, image }: CardProps) {
    return (
        <div className="group relative glass duration-500 hover:scale-[1.02] hover:bg-white/15 transition-all p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="mb-6 p-4 rounded-xl bg-primary-400/10 text-primary-400 group-hover:scale-110 group-hover:bg-primary-400/20 transition-transform duration-500 w-20 h-20 flex justify-center items-center">
                <div className="w-12 h-12 flex items-center justify-center">
                    {image}
                </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {title}
            </h3>
            <div className="text-gray-400 text-sm leading-relaxed">
                {content}
            </div>

            {/* Subtle bottom accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary-400 group-hover:w-1/3 transition-all duration-500 rounded-full"></div>
        </div>
    );
}