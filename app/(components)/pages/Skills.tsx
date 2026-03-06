"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Bootstrap",
  "MySQL",
  "Rest API",
  "Phyton",
  "Wordpress",
  "Figma",
];

export default function SkillsBar() {
  return (
    <section className="w-full py-10 overflow-hidden">

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear"
        }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className="text-white/90 font-medium cursor-default
            transition-all duration-300 ease-out
            hover:text-lime-400
            hover:drop-shadow-[0_0_8px_rgba(163,230,53,0.6)]"
          >
            {skill}
          </span>
        ))}
      </motion.div>

    </section>
  );
}
  