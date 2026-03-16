"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
  "Python",
  "WordPress",
  "Figma",
];

export default function SkillsBar() {

  const trackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="w-full py-10 overflow-hidden" 
              style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>

      <motion.div
        ref={trackRef}
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -width] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear"
        }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className="text-white/90 text-base md:text-base font-medium cursor-default
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
  