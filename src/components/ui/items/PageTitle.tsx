interface PageTitleProps {
    title: string;
    subtitle: string | null;
}

export default function PageTitle({title, subtitle} : PageTitleProps) {
    return (
        <div className="flex flex-col justify-center">
            <h3 className="text-3xl text-amber-300 font-bold font-sans">
                ° {title} °
            </h3>
            <h4 className="mt-6 text-xl leading-8 text-gray-300">
                {subtitle}
            </h4>
        </div>
    );
}