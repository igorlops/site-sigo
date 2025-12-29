interface PageTitleProps {
    title: string;
    subtitle: string | null;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
    return (
        <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    {title}
                </span>
            </h2>
            {subtitle && (
                <p className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed mx-auto sm:mx-0">
                    {subtitle}
                </p>
            )}
            <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-primary-400 to-transparent rounded-full mx-auto sm:mx-0"></div>
        </div>
    );
}