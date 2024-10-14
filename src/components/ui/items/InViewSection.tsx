import { useInView , motion} from "framer-motion";
import { useRef } from "react";

interface InViewSectionProps {
    children: React.ReactNode;
}
export default function InViewSection({ children }:InViewSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.span
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -200 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {children}
        </motion.span>
      </section>
    );
}