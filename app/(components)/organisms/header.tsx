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

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setActiveSection("");
    }, 2000);

    setMenuOpen(false);
  };

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

      <div className="max-w-5xl mx-auto px-6 py-4">

        {/* MAIN HEADER ROW */}
        <div className="flex items-center justify-between md:justify-center gap-10">

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}
          > ☰ </button>

          {/* Logo */}
          <a
            href="/"
            className="text-white text-xl md:text-2xl font-semibold"
          >
            Portfolio
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-6">

            <a
              onClick={() => scrollToSection("home")}
              className="relative text-white hover:text-lime-400 cursor-pointer"
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-lime-400 transition-all duration-500
              ${activeSection === "home" ? "w-full" : "w-0"}`} />
            </a>

            <a
              onClick={() => scrollToSection("about")}
              className="relative text-white hover:text-lime-400 cursor-pointer"
            >
              About me
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-lime-400 transition-all duration-500
              ${activeSection === "about" ? "w-full" : "w-0"}`} />
            </a>

            <a
              onClick={() => scrollToSection("work")}
              className="relative text-white hover:text-lime-400 cursor-pointer"
            >
              Projects
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-lime-400 transition-all duration-500
              ${activeSection === "work" ? "w-full" : "w-0"}`} />
            </a>

            <a
              onClick={() => scrollToSection("services")}
              className="relative text-white hover:text-lime-400 cursor-pointer"
            >
              Services
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-lime-400 transition-all duration-500
              ${activeSection === "services" ? "w-full" : "w-0"}`} />
            </a>

            <span className="text-white/50">|</span>

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white hover:text-lime-400 flex items-center gap-1"
              >
                Socials
                <span className="text-xs">▼</span>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 py-2 px-4 bg-[#2A2A2A]/90 rounded-lg shadow-lg">

                  <a
                    href="https://www.linkedin.com/in/luis-jonaikel-quesada-9302902b0/"
                    target="_blank"
                    className="block text-white py-1 hover:text-lime-400"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/Shonaikel"
                    target="_blank"
                    className="block text-white py-1 hover:text-lime-400"
                  >
                    GitHub
                  </a>

                </div>
              )}
            </div>

            <Button
              href="https://wa.me/50688748560"
              variant="primary"
              rounded="full-rounded"
            >
              Contact Me
            </Button>

          </nav>

          {/* Contact mobile */}
          <Button
            href="https://wa.me/50688748560"
            variant="primary"
            rounded="full-rounded"
            className="md:hidden"
          >
            Contact Me
          </Button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <nav className="flex flex-col gap-5 mt-6 md:hidden">

            <a onClick={() => scrollToSection("home")} className="text-white">Home</a>
            <a onClick={() => scrollToSection("about")} className="text-white">About me</a>
            <a onClick={() => scrollToSection("work")} className="text-white">Projects</a>
            <a onClick={() => scrollToSection("services")} className="text-white">Services</a>

          </nav>
        )}

      </div>
    </header>
  );
}