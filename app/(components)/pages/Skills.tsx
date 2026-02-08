const skills=[
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
   "Bootstrap"
];

export default function SkillsBar() {
    return (
      <section className="w-full bg-[#2a2a2e] py-8">
        <div className="flex flex-wrap justify-center gap-8 text-sm">

          {skills.map((skill) => (
            <span key={skill} 
            className="text-white font-medium cursor-default transition-all 
            duration-300 hover:text-lime-400 hover:drop-shadow-[0_0_6px_rgba(163,230,53,0.7)]"
            >
                {skill}
            </span>
          ))}

        </div>
      </section>
    );
  }
  