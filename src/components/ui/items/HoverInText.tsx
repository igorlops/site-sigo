import { ReactNode } from "react";

interface HoverInTextProps {
    children: ReactNode;
}
export default function HoverInText({children}:HoverInTextProps) {
    return (
        <div className="text-xl hover:text-amber-300 transition duration-400 ease-out hover:ease-in">
            {children}
        </div>
    )
}
