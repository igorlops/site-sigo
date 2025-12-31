interface ContactSocialProps {
    title?: string | undefined;
    content: string;
    icon: JSX.Element;
    href: string;
}

export default function ContactSocial({ content, icon, title, href }: ContactSocialProps) {
    return (
        <a
            href={href}
            className="group flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 hover:border-primary-400/30 transition-all duration-300"
            style={{ textDecoration: "none" }}
        >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-400/10 text-primary-400 rounded-xl group-hover:bg-primary-400 transition-colors duration-300 group-hover:text-navy-950">
                {icon}
            </div>
            <div className="flex flex-col min-w-0">
                {title && (
                    <span className="text-xs font-black uppercase tracking-widest text-primary-400 mb-1">
                        {title}
                    </span>
                )}
                <span className="text-white font-medium group-hover:text-primary-400 transition-colors break-all">
                    {content}
                </span>
            </div>
        </a>
    )
}