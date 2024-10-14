'use client'
import Footer from "@/components/ui/sections/footer/Footer";
import { Header } from "@/components/ui/sections/header/Header";
import { About } from "@/components/ui/sections/about/About";
import { motion, useScroll } from "framer-motion";
import Services from "@/components/ui/sections/services/Services";
import Contact from "@/components/ui/sections/contact/Contact";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/ui/sections/navbar/Navbar";

export default function Home() {
    const { scrollYProgress } = useScroll();
    console.log(scrollYProgress)
    const [activeSection, setActiveSection] = useState<string>("home");
    const homeRef = useRef<HTMLElement>(null);
    const serviceRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);
    
    const getSectionTop = (ref: React.RefObject<HTMLElement>) => {
      return ref.current ? ref.current.offsetTop : 0;
    };

    // Atualizar a seção ativa com base no scrollYProgress
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const serviceTop = getSectionTop(serviceRef);
        const aboutTop = getSectionTop(aboutRef);
        const contactTop = getSectionTop(contactRef);

        const currentSection = scrollY >= (contactTop - 200)
          ? 'contact' : scrollY >= (aboutTop - 200)
          ? 'about' : scrollY >= (serviceTop - 200)
          ? 'services' : 'home';

        setActiveSection(currentSection);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Inicializa com a seção correta

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
          <Navbar 
            activeSection={activeSection}
            homeRef={homeRef}
            serviceRef={serviceRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
          />
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <section ref={homeRef} style={{zIndex:-99, position:"relative"}}>
            <Header serviceRef={serviceRef}/>
          </section>

          <section ref={serviceRef}>
              <Services/>
          </section>

          <section ref={aboutRef}>
              <About/>
          </section>

          <section ref={contactRef}>
              <Contact/>
          </section>
          <section>
              <Footer/>
          </section>
    </>
  );
}
