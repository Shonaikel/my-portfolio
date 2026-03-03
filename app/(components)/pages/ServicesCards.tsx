"use client";

import { useState } from "react";

export default function ServicesSection() {
  const services = [
    {
      image: "/images/frontend.png",
      title: "Front-end Development",
      description: "I am an expert in HTML5, CSS3, React.js, Vue.js",
      moreInfo: "Experienced in building modern and interactive user interfaces using HTML5, CSS3, React.js, and Vue.js",
    },
    {
      image: "/images/coding.png",
      title: "Back-end Development",
      description: "I am in expert in JavaScript(ES6+), Typescript",
      moreInfo: "Developing APIs and backend systems with JavaScript (ES6+), TypeScript, and Python, focusing on performance and clean architecture",
    },
    {
      image: "/images/responsive.png",
      title: "Responsive Design",
      description: "Designing clean, functional websites",
      moreInfo: "Developing mobile-first layouts with HTML, CSS, Tailwind CSS, and responsive frameworks for optimized cross-device experiences",
    },
    {
      image: "/images/UXUI.png",
      title: "UI/UX Design",
      description: "Wireframing and prototyping to enhance usability",
      moreInfo: "Creating user-centered designs with Figma, Adobe XD, Photoshop, and Illustrator, from wireframes to high-fidelity prototypes",
    },
  ];

  return (
    <section id="services" className="py-17 text-white">
      <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
        <div className="flex justify-between items-center mb-12">
            <div>
                <p className="text-gray-400 text-sm">My services</p>
                <h2 className="text-3xl font-bold">
                Services <span className="text-lime-400">I Provide</span>
                </h2>
            </div>

            <div className="flex items-center gap-6">
                <button className="bg-[#8ff51b] text-black px-6 py-2 rounded-full font-semibold">
                    Hire me
                </button>
                <span className="w-16 h-[1px] bg-gray-600"></span>
                <span className="text-gray-400 text-sm">Let's connect</span>
            </div>
        </div>

    {/* Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <FlipCard key={index} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* Flip Card dentro del mismo archivo */

function FlipCard({ service }: any) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="h-71 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
          style={{ perspective: "1000px" }} 
          onClick={() => setFlipped(!flipped)}
    >
      <div className="relative w-full h-full duration-500" style={{
          transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div 
          className="absolute w-full h-full bg-white rounded-xl shadow-lg 
                     p-6 flex flex-col items-center text-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
            <div className="w-20 h-20 flex items-center justify-center mb-4"> 
               <img 
                src={service.image} 
                alt={service.title} 
                className="h-24 object-contain mb-4"
               />
            </div>
            
            <h3 className="font-bold mb-2 text-black"> {service.title} </h3>
            <p className="text-sm text-black max-w-[200px]"> {service.description} </p>

        </div>

        {/* BACK */}
        <div className="absolute w-full h-full bg-lime-400 rounded-xl shadow-lg p-4 flex flex-col 
                        text-center items-center justify-center" 
            style={{
              backfaceVisibility: "hidden", 
              transform: "rotateY(180deg)", 
            }}
        >
          <h3 className="text-black font-bold mb-2">More Info </h3>
          <p className="text-black text-sm">{service.moreInfo} </p>
        </div>
      </div>
    </div>
  );
}