"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../atoms/button";

// -------- Typing Hook --------
const useTyping = (text: string, speed: number = 140) => {
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        // escribir
        setDisplayed(text.slice(0, displayed.length + 1));

        if (displayed === text) {
          setDeleting(true);
        }
      } else {
        // borrar
        setDisplayed(text.slice(0, displayed.length - 1));

        if (displayed.length === 1) {
          setDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, deleting, text, speed]);
  
  return displayed;
};

// -------- Hero Section --------
function Hero() {
  const typedName = useTyping("Jonaikel Quesada", 140);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div>
        <p className="relative bg-lime-400 text-black inline-block px-3 py-1 rounded-md text-sm mb-4
                        after:content-[''] after:absolute after:left-4 after:top-full
                        after:border-8 after:border-transparent after:border-t-lime-400">
          Hello, I am
        </p>

        <h1 className="text-4xl font-bold mb-3">
          Luis{" "}
            <span className="inline-flex items-center">
                {typedName}
                <span className="ml-1 w-[4px] h-[1em] bg-white animate-pulse" />
            </span>
        </h1>

        <p className="text-gray-300 mb-6">
          A Professional Web Developer and Designer
        </p>

        <div className="flex gap-4">
          <Button href="/cv.pdf" variant="primary" rounded="base">
            Download CV
          </Button>
          <Button href="#projects" variant="outline" rounded="base">
            My Work
          </Button>
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute -z-10 w-80 h-80 md:w-96 md:h-96 bg-lime-500 rounded-[60%_40%_55%_45%/55%_60%_40%_45%] blur-sm"
          aria-hidden
        />
        <Image
          src="/images/img_perfil.png"
          alt="Luis Jonaikel Quesada"
          width={384}
          height={384}
          className="w-72 md:w-96 relative"
          priority
        />
      </div>
    </div>
  );
}

// -------- About Section --------
function About() {
  return (
    <div id="about" className="mt-20 grid md:grid-cols-2 gap-10 items-start">
      <Image
        src="/images/workspace-aboutme.jpeg"
        alt="Espacio de trabajo"
        width={600}
        height={400}
        className="rounded-2xl shadow-lg w-full h-auto"
      />

      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Read About My Life
        </h2>

        <p className="text-gray-300 leading-relaxed">
        Hello! I’m Luis Jonaikel Quesada, a creative web developer and designer 
        focused on building clean, user-centered digital experiences. I combine 
        strong design principles with modern front-end and back-end technologies 
        to create responsive, intuitive, and scalable websites that deliver real 
        value for users and businesses.
        </p>
      </div>
    </div>
  );
}

// -------- HomePage --------
export default function HomePage() {
  return (
    <section id="home" className="bg-[#17171a] text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
      </div>
    </section>
  );
}
