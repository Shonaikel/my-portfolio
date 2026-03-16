"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <motion.section
      initial={{ backgroundColor: "#0e0e10" }}
      whileInView={{ backgroundColor: "#17171a" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-28 px-6 text-white overflow-hidden"
    >

      <motion.h2
        initial={{ color: "#1a2e05" }} 
        whileInView={{ color: "#365314" }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center text-[70px] md:text-[130px] font-extrabold 
                  leading-none text-center pointer-events-none select-none"
      >
        LET’S WORK <br /> TOGETHER
      </motion.h2>

      <div id="contact" className="relative max-w-4xl mx-auto flex justify-center">

        {/* Card */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-md bg-gray-900/60 backdrop-blur-lg border
                     border-white/5 rounded-2xl p-10 shadow-2xl text-center"
        >

          <h3 className="text-2xl font-semibold mb-6">Contact Me</h3>

          {/* Email */}
          <a
            href="mailto:ljonaikel1@gmail.com?subject=Portfolio%20Inquiry%20-%20Let%E2%80%99s%20Work%20Together&body=Hello%20Luis,%0A%0AI%20visited%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20working%20with%20you.%20I%20would%20love%20to%20discuss%20a%20potential%20project%20or%20collaboration.%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0ABest%20regards,"
            className="flex items-center justify-center gap-4 w-fit mx-auto text-[20px] mb-6 
                       text-lime-400 hover:text-lime-50 
                       transition duration-300 font-bold"
          >
            <FaEnvelope className="text-lime-400 text-lg" />
            <span>ljonaikel1@gmail.com</span>
          </a>

          {/* Links */}
          <div className="flex justify-center items-center gap-4 text-sm text-gray-300">

            <a
              href="https://wa.me/50688748560"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-lime-400 transition"
            >
              <FaWhatsapp className="text-lime-400 text-lg" />
              <span className="text-left">+506 8874 8560</span>
            </a>

            <a
              href="https://www.linkedin.com/in/luis-jonaikel-quesada-9302902b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-lime-400 transition"
            >
              <FaLinkedin className="text-lime-400 text-lg" />
              <span className="text-left">LinkedIn</span>
            </a>

          </div>

        </motion.div>
      </div>
    </motion.section>
  );
}