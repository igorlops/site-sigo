'use client'
import Footer from "@/components/ui/sections/footer/Footer";
import { Header } from "@/components/ui/sections/header/Header";
import { Navbar } from "@/components/ui/sections/navbar/Navbar";
import { About } from "@/components/ui/sections/about/About";
import { motion, useScroll } from "framer-motion";
import Services from "@/components/ui/sections/services/Services";

export default function Home() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress)

  return (
    <>
          <Navbar/>
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <div style={{zIndex:-99, position:"relative"}}>
            <Header/>
          </div>
          <Services/>
          <About/>
          <Footer/>
    </>
  );
}
