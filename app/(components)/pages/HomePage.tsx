"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../atoms/button";
import { motion } from "framer-motion";
import { fadeUp, fadeRight } from "../animations/animations";
import { scrollToSection } from "../animations/scrollToSection";

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
      
      <motion.div variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ staggerChildren: 0.15 }}
      >
        <p className="relative bg-lime-400 text-black inline-block px-3 py-1 rounded-md text-sm mb-4
                        after:content-[''] after:absolute after:left-4 after:top-full
                        after:border-8 after:border-transparent after:border-t-lime-400">
          Hello, I am
        </p>

        <h1 className="text-2xl md:text-4xl font-bold mb-3 h-[47px] flex items-center">
          Luis{" "}
          <span className="inline-flex items-center min-w-[220px] ml-3">
            {typedName}
            <span className="ml-1 w-[3px] h-[1.1em] bg-white animate-pulse rounded-sm" />
          </span>
        </h1>

          <p className="text-gray-300 mb-6">
            A Professional Web Developer and Designer
          </p>

          <motion.div className="flex gap-4"
                      variants={fadeUp}
                      initial="hidden"
                      animate="show"
                      transition={{ delay: 0.4, duration: 0.9, ease: [0.25, 0.1, 0.25, 1]
          }}>
            <Button 
            href="/assets/Luis_Quesada_CV_FullStack_Developer.pdf" 
            download="Luis_Quesada_CV_FullStack_Developer.pdf" 
            variant="primary" 
            rounded="base">
              Download CV
            </Button>
              <Button onClick={() => scrollToSection("work")}
                      variant="outline"
                      rounded="base">
                My Work
              </Button>
          </motion.div>
        </motion.div>

      <motion.div className="relative" variants={fadeRight}
                     initial={{ opacity: 0, x: 80 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{
                       duration: 1.1,
                       ease: [0.25, 0.1, 0.25, 1]
                     }}
      >
        <Image
          src="/images/perfil-propio.png"
          alt="Luis Jonaikel Quesada"
          width={384}
          height={384}
          className="hidden md:block w-72 md:w-96 relative"
          priority
        />
      </motion.div>
    </div>
  );
}

// -------- About Section --------
function About() {
  return (
    <div id="about" className="mt-20 grid md:grid-cols-2 gap-4 md:gap-10 items-start">
      
      <motion.div variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ staggerChildren: 0.15 }}
      >
          <Image src="/images/workspace-aboutme.jpeg" alt="Espacio de trabajo"
            width={600}
            height={400}
            className="rounded-xl md:rounded-2xl shadow-lg w-full md:h-auto h-[180px] object-cover"
          />
      </motion.div>
      
      <motion.div variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ staggerChildren: 0.15 }}
      >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Read About <span className="text-lime-400">My Life</span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
          Hello! I’m Luis Jonaikel Quesada, a creative web developer and designer 
          focused on building clean, user-centered digital experiences. I combine 
          strong design principles with modern front-end and back-end technologies 
          to create responsive, intuitive, and scalable websites that deliver real 
          value for users and businesses
          </p>

      </motion.div>

    </div>
  );
}

// -------- HomePage --------
export default function HomePage() {
  return (
    <section id="home" className=" text-white py-8">
      <div id="about" className="max-w-6xl mx-auto px-6">

        <Hero />
        <About />

      </div>
    </section>
  );
}
