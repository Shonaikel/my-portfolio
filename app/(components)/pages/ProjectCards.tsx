"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { revealText, staggerCards, fadeCard } from "../animations/animations";

const projects = [
  {
    title: "Bunkr Burger Factory",
    img: "/images/Bunkrwork.jpg",
    tags: ["React", "Tailwind","TypeScript", "Claude", "Figma"],
    meta: "Freelance · Website · 1 Week",
    url: "https://github.com/Shonaikel/bunkr-bunger",
  },
  {
    title: "Creative Portfolio [Photography]",
    img: "/images/portfoliophoto-work.jpg",
    tags: ["React", "Tailwind","TypeScript", "Claude", "Figma"],
    meta: "Freelance · Website · 1 Week",
    url: "https://github.com/Shonaikel/jenrodga-photofolio",
  },
  {
    title: "Website Yutravel",
    img: "/images/travel-work.jpg",
    tags: ["UI/UX", "Web Design"],
    meta: "Designed by Jhonas · Website App · 3 days",
    url: "https://www.figma.com/community/file/1619508980832959011/website-yutravel?q_id=7f9657ed-b598-486f-90b5-0260adfac360",
  },
  {
    title: "Sweet Home Mobile App",
    img: "/images/smarthome-work.jpg",
    tags: ["UI/UX", "Web Design"],
    meta: "Designed by Jhonas · Mobile App · 1 Months",
    url: "https://www.figma.com/community/file/1619522937555949168/smarthome-app?q_id=1cdbfa4d-df7c-4284-8013-16a29875f040",
  },
  {
    title: "ETK. Compute",
    img: "/images/work4.png",
    tags: ["Wordpress", "JavaScript", "Design"],
    meta: "Internship · Website · 4 Months",
  },
  {
    title: "Arkam Games Design",
    img: "/images/project2.png",
    tags: ["UI/UX", "Web Design"],
    meta: "Personal Project · Web App · 2 Month",
    url: "https://www.figma.com/design/ffuya41CN3QGGjFMky6uEe/PROYECTO-PAGINA-JUEGOS?node-id=0-1&p=f&t=06mPNyqZJqn9Pqml-0",
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
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                variants={fadeCard}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#1f1f22] rounded-2xl overflow-hidden border border-transparent hover:border-lime-400 cursor-pointer"
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

                    <span className="text-lime-400 font-semibold hidden md:block">
                      View More →
                    </span>
                  </div>

                </div>

              </motion.div>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}