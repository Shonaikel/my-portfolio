"use client";

import { motion } from "framer-motion";
import { revealText, fadeLeft } from "../animations/animations";

export default function ExperienceSection() {
  const experiences=[
    {
      year:"2025",
      role: "FullStack Developer",
      company:"Freelance",
      description:"I developed a real-time notes blog application using React, TypeScript, JavaScript, and Tailwind CSS for the frontend. I implemented secure user authentication with Supabase Auth and managed user data and notes through Supabase Database. The application includes full CRUD functionality (create, edit, and delete notes) and supports real-time text updates while typing. The project focused on delivering a clean, intuitive UI with strong usability and optimized performance.",
    },
    {
      year:"2024",
      role: "Web Developer & Graphic Designer",
      company:"ETK.Compute",
      description:"At ETK Compute, a U.S.-based company specializing in video game server hosting, I developed and optimized frontend interfaces using HTML, CSS, JavaScript, React, and Tailwind. I refactored existing code to enhance performance, structure, and maintainability, implemented secure forms with reCAPTCHA, and customized WordPress themes and features. I also collaborated closely with technical teams in a fast-paced environment to deliver scalable and reliable solutions.",
    },
  ];

  return (
    <section className=" px-6 text-white bg-[#242427]" >
      <div className="max-w-5xl mx-auto">
        <motion.div  variants={revealText}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-7 md:mb-16">Experience</h2>
        </motion.div>

        <div className="relative">

          <div className="hidden md:block absolute left-[110px] top-0 h-full w-1 bg-white/20 rounded"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="md:grid grid-cols-[80px_40px_1fr] gap-6 mb-16 relative"
            >

              {/* Year + Circle */}
              <motion.div
                className="contents "
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >

                {/* Year */}
                <div className="text-sm text-gray-400 text-right pt-1 hidden md:block">
                  {exp.year}
                </div>

                {/* Circle */}
                <div className=" justify-center hidden md:block">
                  <div
                    className="absolute top-[5px] left-[105px] w-4 h-4 bg-lime-400 rounded-full 
                    shadow-[0_0_12px_rgba(163,230,53,0.7)] ring-8 ring-[#242427]"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold">{exp.role}</h3>

                <span className="block text-sm text-gray-400 mb-3">
                  {exp.company}
                </span>

                <p className="text-gray-400 leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </motion.div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
