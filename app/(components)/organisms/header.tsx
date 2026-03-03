"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "../atoms/button";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  // Detectar click fuera del dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1A] w-full">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-6.5 px-6 py-5 flex-wrap">
        
        <a href="/" className="text-white text-xl font-semibold shrink-0">
          Portfolio
        </a>

        <nav
          className={`flex items-center gap-5 ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <a onClick={() => scrollToSection("home")}
            className="text-white text-sm hover:text-lime-400 cursor-pointer transition-colors"
          >
            Home
          </a>

          <a onClick={() => scrollToSection("about")}
            className="text-white text-sm hover:text-lime-400 cursor-pointer transition-colors"
          >
            About me
          </a>

          <a onClick={() => scrollToSection("work")}
           className="text-white text-sm hover:text-lime-400 cursor-pointer transition-colors"
          >
            Projects
          </a>

          <a onClick={() => scrollToSection("services")}
            className="text-white text-sm hover:text-lime-400 cursor-pointer transition-colors"
          >
            Services
          </a>

          <span className="text-white/50">|</span>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white text-sm hover:text-lime-400 transition-colors flex items-center gap-1"
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
                  className="block text-white text-sm py-1 hover:text-lime-400 transition-colors"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Shonaikel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white text-sm py-1 hover:text-lime-400 transition-colors"
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
