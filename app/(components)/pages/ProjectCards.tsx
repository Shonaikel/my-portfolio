import Image from "next/image";

const projects = [
  {
    title: "Sweet Home Mobile App",
    img: "/images/work3.png",
    tags: ["UI/UX", "Web Design"],
    meta: "Designed by rizzin · iOS App · 2 Months",
  },
  {
    title: "Smart House Dashboard",
    img: "/images/work2.png",
    tags: ["React", "API", "Mobile"],
    meta: "Personal Project · Web App · 1 Month",
  },
  {
    title: "Portfolio Website",
    img: "/images/work1.png",
    tags: ["UI/UX"],
    meta: "Freelance · Website · 3 Weeks",
  },
  {
    title: "Portfolio Website",
    img: "/images/work1.png",
    tags: ["UI/UX"],
    meta: "Freelance · Website · 3 Weeks",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="bg-[#17171a] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-gray-400 text-sm mb-2">My Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My Latest <span className="text-lime-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[#1f1f22] rounded-2xl overflow-hidden border border-transparent transition-all duration-300 
                          group-hover:opacity-40 group-hover:brightness-75
                            hover:!opacity-100 hover:!brightness-100
                            hover:border-lime-400
                            hover:-translate-y-1
                            hover:shadow-lg"
            >
              {/* Imagen */}
              <div className="h-64 overflow-hidden">
                <Image src={project.img} alt={project.title} width={600} height={400}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="font-semibold mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-[#2c2c31] text-gray-400"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>

                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">{project.meta}</span>

                  <a href="#" className="text-lime-400 font-semibold">
                    View More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

