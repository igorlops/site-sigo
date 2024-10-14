interface ContactSocialProps {
    title?: string|undefined;
    content: string;
    icon: JSX.Element;
    href:string;
}

export default function ContactSocial({content,icon,title,href}:ContactSocialProps) {
    return (
        <div className="mb-4 flex flex-col text-left">
            {title && <div className="font-bold">
                <p className="text-amber-300">{title}</p>
            </div>}
            <a href={href} className="flex items-center gap-3" style={{textDecoration:"none"}}>
                <span className="text-amber-300">{icon}</span> 
                <p>
                    {content}
                </p>
            </a>
        </div>
    )
}