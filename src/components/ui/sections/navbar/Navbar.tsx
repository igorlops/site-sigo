import InstagramIcon from "../../items/Icons/Instagram";
import MailIcon from "../../items/Icons/Mail";
import LogoIcon from "../../items/Icons/Logo";
import React, { useState, useEffect, useRef } from 'react';

export function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("home");
    const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        }, 
        { threshold: 0.5 } // Define quando a seção será considerada visível (50% visível)
      );
      sectionsRef.current.forEach(section => {
        if (section) observer.observe(section);
      });
  
      return () => {
        sectionsRef.current.forEach(section => {
          if (section) observer.unobserve(section);
        });
      };
    }, []);

    return (
        <>
            <nav className="relative bg-gray-700">
                <div className="mx-auto p-2 max-w-7xl sm:px-9">
                    <div className="flex justify-between">
                        <div className="flex justify-center items-center gap-2">
                            <a href="#" className="text-white flex items-center gap-x-2">
                                <InstagramIcon/> @sigowebsolutions
                            </a>
                        </div>
                        <div className="flex items-center">
                            <a href="#" className="text-white gap-2 flex items-center"><MailIcon/> sigo@gmail.com</a>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="sticky top-0 z-50 bg-gray-900 divide">
                <div className="mx-auto max-w-7xl px-2 sm:px-6">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-start lg:justify-between sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <div className="max-w-sm">
                                    <LogoIcon size={50}/>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex">
                                <div className="flex items-center justify-center space-x-4">
                                    <a href="#home" className={`px-3 py-[1.5em] text-sm font-medium text-white hover:border-b-4  hover:border-amber-200 active:border-amber-500 ${activeSection === "home" ? " border-b-4 border-amber-300" : ""}`} aria-current="page">Home</a>
                                    <a href="#about" className={`px-3 py-[1.5em] text-sm font-medium text-white hover:border-b-4  hover:border-amber-200 active:border-amber-500 ${activeSection === "home" ? " border-b-4 border-amber-300" : ""}`}>Sobre</a>
                                    <a href="#services" className={`px-3 py-[1.5em] text-sm font-medium text-white hover:border-b-4  hover:border-amber-200 active:border-amber-500 ${activeSection === "home" ? " border-b-4 border-amber-300" : ""}`}>Serviços</a>
                                    <a href="#contact" className={`px-3 py-[1.5em] text-sm font-medium text-white hover:border-b-4  hover:border-amber-200 active:border-amber-500 ${activeSection === "home" ? " border-b-4 border-amber-300" : ""}`}>Contato</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-amber-200 hover:text-white">Sobre</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-amber-200 hover:text-white">Serviços</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-amber-200 hover:text-white">Contato</a>
                    </div>
                </div> */}
            </nav>
        </>
    );
}