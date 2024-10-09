import { useAnimation, useInView, motion} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CardProps {
    title:string;
    content:JSX.Element;
    image: JSX.Element;
}
export default function Card({title, content, image} : CardProps) {
    const [isVisible, setIsVisible] = useState(false); // Estado para verificar se o card está visível
    const ref = useRef<HTMLDivElement | null>(null); // Referência ao elemento
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Quando o card entrar na viewport, definimos o estado como visível
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref.current!); // Desliga a observação após a animação ser disparada
          }
        },
        {
          threshold: 0.2, // Dispara a animação quando 20% do card está visível
        }
      );
  
      if (ref.current) {
        observer.observe(ref.current); // Observa o card
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current); // Limpa o observer quando o componente desmonta
        }
      };
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5 }}
            className="box"
        >                                
            <div className="group relative">
                <div className="bg-gray-800 aspect-h-1 aspect-w-1 sm:w-[23em] lg:w-[25em] overflow-hidden ring-1 ring-inset ring-amber-200/10 rounded-md lg:aspect-none hover:shadow-amber-300/10 hover:shadow-lg transition ease-in-out duration-300 hover:scale-105 p-7">
                    <div className="flex flex-col text-white justify-center items-center gap-y-2">
                        <div className="w-[80px]">
                            {image}
                        </div>
                        <div className="flex flex-col text-white text-center">
                            <div className="text-xl font-bold font-sans text-amber-300">
                                {title}
                            </div>
                            <div className="text-sm py-3">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}