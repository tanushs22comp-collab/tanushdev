import React, { useState, useRef, useEffect } from "react";

const projectsExperience = [
  {
    project: "PDF AI workflow",
    role: "Full-Stack Developer",
    duration: "Aug 2025 - Ongoing",
    image: "src/assets/pdfai.jpeg",
    link: "https://github.com/tanushdev",
  },
   {
    project: "GreenWashing API",
    role: "Full-Stack Developer",
    duration: "Jan 2025 - May 2025",
    image: "src/assets/api.png",
    link: "https://github.com/tanushdev/sc_api",
  },
  {
    project: "GreenWashing Detector",
    role: "Full-Stack Developer",
    duration: "Jan 2024 - Ongoing",
    image: "src/assets/green.png",
    link: "https://github.com/tanushdev/GreenIntellect",
  },
  {
    project: "AstroVedic",
    role: "Full Stack Developer",
    duration: "Apr 2024 - Jul 2024",
    image: "src/assets/astro.png",
    link: "https://github.com/tanushdev/AstroVedic",
  },
  {
    project: "SmartShieldz",
    role: "Full Stack Developer",
    duration: "Sep 2024 - Oct 2024",
    image: "src/assets/helmet.jpg",
    link: "https://github.com/demonconfig/SmartShieldz",
  },
];

const studyExperience = [
  {
    school: "Pillai college of Engineering",
    degree: "B.Tech Computer Science",
    duration: "2022 - 2026",
    image: "src/assets/pce.png",
    link: "https://www.pce.ac.in/",
  },
  {
    school: "Mount Carmel High School",
    degree: "High School",
    duration: "2020 - 2022",
    image: "src/assets/mount.png",
    link: "https://mountcarmelvasai.com/",
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const containerRef = useRef(null);

  const items = activeTab === "projects" ? projectsExperience : studyExperience;

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollTop = 0;
  }, [activeTab]);

  return (
    <section className="pt-10 mx-auto container max-w-3xl px-4 md:px-0 md:pt-20 z-50">
      <p className="text-xl font-light text-neutral-300 mb-5 tracking-widest text-left">
        Experience
      </p>

      {/* Tabs */}
      <div className="h-9 items-center justify-center rounded-lg bg-neutral-950/30 text-muted-foreground mb-4 grid w-full grid-cols-2">
        <button
          onClick={() => setActiveTab("projects")}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all ${
            activeTab === "projects" ? "bg-white text-black shadow" : "text-neutral-300"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("study")}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all ${
            activeTab === "study" ? "bg-white text-black shadow" : "text-neutral-300"
          }`}
        >
          Studies
        </button>
      </div>

      {/* Scrollable timeline */}
      <div
        ref={containerRef}
        className="max-h-[24rem] overflow-y-scroll pr-2 border border-neutral-300 rounded-lg"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <ul className="ml-10 border-l border-neutral-300 list-none space-y-4">
          {items.map((item, index) => {
            const isClickable = !!item.link;
            const Container = isClickable ? "a" : "div";

            return (
              <li key={index} className="relative ml-10 pr-2 py-4 flex gap-4">
                <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white w-12 h-12 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.project || item.school}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <Container
                  href={item.link || "#"}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noopener noreferrer" : undefined}
                  className={`flex flex-col gap-1 p-3 rounded-md transition-all duration-300 text-white bg-neutral-900/20 hover:bg-neutral-900/40 hover:shadow-lg hover:scale-105 hover-glow ${
                    isClickable ? "cursor-pointer" : ""
                  }`}
                >
                  <time className="text-xs text-gray-400">{item.duration}</time>
                  <h2 className="font-semibold leading-none">{item.project || item.school}</h2>
                  <p className="text-sm text-gray-400">{item.role || item.degree}</p>
                  <p className="text-sm">{item.description}</p>
                </Container>
              </li>
            );
          })}
        </ul>

        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
          .hover-glow:hover {
            box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.6);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Experience;
