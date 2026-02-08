"use client";

import { useState } from "react";
import { Button } from "../atoms/button";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1A] w-full">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-6.5 px-6 py-5 flex-wrap">
        <a href="/" className="text-white text-xl font-semibold shrink-0">
          Portfolio
        </a>

        <nav
          className={`flex items-center gap-5 ${menuOpen ? "flex" : "hidden"} md:flex`}
        >
          <a href="#home" className="text-white text-sm hover:text-lime-400 transition-colors">
            Home
          </a>
          <a href="#about" className="text-white text-sm hover:text-lime-400 transition-colors">
            About me
          </a>
          <a href="#projects" className="text-white text-sm hover:text-lime-400 transition-colors">
            Projects
          </a>
          <a href="#services" className="text-white text-sm hover:text-lime-400 transition-colors">
            Services
          </a>
          <span className="text-white/50">|</span>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white text-sm hover:text-lime-400 transition-colors flex items-center gap-1"
            >
              Socials
              <span className="text-xs">▼</span>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 py-2 px-4 bg-[#2A2A2A] rounded-lg min-w-[120px] shadow-lg">
                <a href="#" className="block text-white text-sm py-1 hover:text-lime-400">
                  LinkedIn
                </a>
                <a href="#" className="block text-white text-sm py-1 hover:text-lime-400">
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
          <Button href="#contact" variant="primary" rounded="full-rounded">
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
}
