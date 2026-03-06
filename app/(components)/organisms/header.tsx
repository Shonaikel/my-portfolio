"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "../atoms/button";

export default function Header() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Limpiar timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setActiveSection("");
    }, 2000);
  };

  // Detectar click fuera del dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  
  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1A] w-full">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-6.5 px-6 py-5 flex-wrap">
        
        <a href="/" className="text-white text-2xl font-semibold shrink-0">
          Portfolio
        </a>

        <nav
          className={`flex items-center gap-5 ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <a onClick={() => scrollToSection("home")}
            className="relative text-white text-base hover:text-lime-400 cursor-pointer transition-colors"
          >
            Home
             <span className={`absolute -bottom-1 left-0 h-[2px] bg-lime-400 rounded transition-all duration-500
              ${activeSection === "home" ? "w-full opacity-100" : "w-0 opacity-0"}
            `} />
            
          </a>

          <a
            onClick={() => scrollToSection("about")}
            className="relative text-white text-base hover:text-lime-400 cursor-pointer transition-colors"
          >
            About me

            <span className={`absolute -bottom-1 left-0 h-[2px] bg-lime-400 rounded transition-all duration-500
              ${activeSection === "about" ? "w-full opacity-100" : "w-0 opacity-0"}
            `} />
          </a>

          <a
            onClick={() => scrollToSection("work")}
            className="relative text-white text-base hover:text-lime-400 cursor-pointer transition-colors"
          >
            Projects

            <span className={`absolute -bottom-1 left-0 h-[2px] bg-lime-400 rounded transition-all duration-500
              ${activeSection === "work" ? "w-full opacity-100" : "w-0 opacity-0"}
            `} />
          </a>

          <a
            onClick={() => scrollToSection("services")}
            className="relative text-white text-base hover:text-lime-400 cursor-pointer transition-colors"
          >
            Services

            <span className={`absolute -bottom-1 left-0 h-[2px] bg-lime-400 rounded transition-all duration-500
              ${activeSection === "services" ? "w-full opacity-100" : "w-0 opacity-0"}
            `} />
          </a>

          <span className="text-white/50">|</span>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white text-base hover:text-lime-400 transition-colors flex items-center gap-1"
            >
              Socials
              <span className="text-xs">▼</span>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 py-2 px-4 bg-[#2A2A2A]/90 rounded-lg min-w-[120px] shadow-lg">
                
                <a
                  href="https://www.linkedin.com/in/luis-jonaikel-quesada-9302902b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white text-base py-1 hover:text-lime-400 transition-colors"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Shonaikel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white text-base py-1 hover:text-lime-400 transition-colors"
                >
                  GitHub
                </a>

              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>

          <Button href="https://wa.me/50688748560" variant="primary" rounded="full-rounded">
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
}
