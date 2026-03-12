"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { revealText, staggerCards, fadeCard } from "../animations/animations";

const projects = [
  {
    title: "Sweet Home Mobile App",
    img: "/images/project1.png",
    tags: ["UI/UX", "Web Design"],
    meta: "Designed by Jhonas · Mobile App · 10 Months",
    url: "https://www.figma.com/design/l8TncbQJ3HdJry2BMfWbXW/Smart-Homes-UX?node-id=0-1&p=f&t=G5T2OZXpxBbqW1Fg-0",
  },
  {
    title: "Smart House Dashboard",
    img: "/images/project2.png",
    tags: ["React", "API", "Mobile"],
    meta: "Personal Project · Web App · 1 Month",
    url: "https://www.figma.com/design/ffuya41CN3QGGjFMky6uEe/PROYECTO-PAGINA-JUEGOS?node-id=0-1&p=f&t=06mPNyqZJqn9Pqml-0",
  },
  {
    title: "Portfolio Website",
    img: "/images/work1.png",
    tags: ["UI/UX"],
    meta: "Freelance · Website · 3 Weeks",
    url: "https://tu-proyecto1.com",
  },
  {
    title: "Portfolio Website",
    img: "/images/work1.png",
    tags: ["UI/UX"],
    meta: "Freelance · Website · 3 Weeks",
    url: "https://tu-proyecto1.com",
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Texto */}
        <motion.div
          variants={revealText}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-gray-400 text-sm">My Projects</p>

          <h2 className="text-2xl md:text-3xl font-bold">
            My Latest <span className="text-lime-400">Projects</span>
          </h2>
        </motion.div>


        {/* Grid */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:gap-7"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeCard}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#1f1f22] rounded-2xl overflow-hidden border border-transparent hover:border-lime-400"
            >

              <div className="h-40 md:h-64 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4 md:p-6">

                <h3 className="font-bold mb-2 text-sm md:text-base leading-tight line-clamp-2">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[11px] md:text-xs px-2 py-[2px] md:px-3 md:py-1 rounded-full bg-[#2c2c31] text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between text-xs md:text-xs">
                  <span className="text-gray-500">
                    {project.meta}
                  </span>

                  <a href="#" className="text-lime-400 font-semibold hidden md:block">
                    View More →
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

