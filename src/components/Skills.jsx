import React from "react";

// Dynamically import all images in the skills folder
const skillImages = import.meta.glob("../assets/skills/*.png", { eager: true, import: "default" });

// Define your skills
const skills = [
  { name: "Python", category: "Language", icon: "python.png" },
  { name: "C/C++", category: "Language", icon: "cpp.png" },
  { name: "Java", category: "Language", icon: "java.png" },
  { name: "TypeScript", category: "Language", icon: "type.png" },
  { name: "React", category: "Library", icon: "react.png" },
  { name: "PyTorch", category: "Framework", icon: "PyTorch.png" },
  { name: "Pandas", category: "Library", icon: "Pandas.png" },
  { name: "NumPy", category: "Library", icon: "numpy.png" },
  { name: "FastAPI", category: "Framework", icon: "FastAPI.png" },
  { name: "Git", category: "Tool", icon: "git.png" },
  { name: "Docker", category: "Tool", icon: "docker.png" },
  { name: "AWS Basics", category: "Cloud", icon: "aws.png" },
  { name: "MongoDB", category: "Database", icon: "MongoDB.png" },
];

const Skills = () => {
  return (
    <div className="my-12 px-4 md:px-8 lg:px-16">
      <p className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-300 mb-6 tracking-widest text-left">
        Skills
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {skills.map((skill, index) => {
          const iconSrc = skill.icon ? skillImages[`../assets/skills/${skill.icon}`] : null;

          return (
            <div
              key={index}
              className="group flex flex-col sm:flex-row items-center w-full bg-transparent hover:bg-dark border border-zinc-700 hover:border-green-500/50 rounded-lg p-3 sm:p-4 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg bg-dark mb-2 sm:mb-0 sm:mr-3">
                {iconSrc ? (
                  <img
                    src={iconSrc}
                    alt={skill.name}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                  />
                ) : (
                  <span className="text-zinc-400 text-lg sm:text-xl">🔹</span>
                )}
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-zinc-50 text-center sm:text-left">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-zinc-400 text-center sm:text-left">
                  {skill.category}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
