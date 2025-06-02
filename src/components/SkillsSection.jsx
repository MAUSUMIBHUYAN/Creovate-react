import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Cpu, Settings } from "lucide-react";

const skills = [
  // Web Development
  { name: "HTML/CSS", level: 80, category: "web", icon: <Code className="w-5 h-5" /> },
  { name: "JavaScript", level: 80, category: "web", icon: <Code className="w-5 h-5" /> },
  { name: "React", level: 75, category: "web", icon: <Code className="w-5 h-5" /> },

  // Programming Languages
  { name: "Python", level: 80, category: "programming", icon: <Cpu className="w-5 h-5" /> },
  { name: "C++", level: 75, category: "programming", icon: <Cpu className="w-5 h-5" /> },
  { name: "MATLAB", level: 80, category: "programming", icon: <Cpu className="w-5 h-5" /> },

  // Tools Environment
  { name: "VS Code", level: 90, category: "tools", icon: <Settings className="w-5 h-5" /> },
  { name: "Git/GitHub", level: 90, category: "tools", icon: <Settings className="w-5 h-5" /> },
  { name: "Gazebo", level: 70, category: "tools", icon: <Settings className="w-5 h-5" /> },
  { name: "Canva", level: 90, category: "tools", icon: <Settings className="w-5 h-5" /> },
];

const categories = [
  { name: "all", icon: null },
  { name: "web", icon: <Code className="w-4 h-4" /> },
  { name: "programming", icon: <Cpu className="w-4 h-4" /> },
  { name: "tools", icon: <Settings className="w-4 h-4" /> },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-gray-900/50 to-violet-900/20">
      {/* Cosmic decoration elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-purple-400 opacity-60 animate-pulse animate-float"></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 rounded-full bg-pink-300 opacity-50 animate-pulse animate-float delay-1000"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white/90 opacity-0 animate-fade-in">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 capitalize border",
                activeCategory === category.name
                  ? "bg-gradient-to-r from-purple-600/30 to-pink-500/30 text-white border-purple-400/50 shadow-[0_0_12px_-2px_rgba(139,92,246,0.3)]"
                  : "bg-gray-800/50 text-white/80 border-gray-700 hover:border-purple-400/30 hover:text-white"
              )}
            >
              {category.icon && <span>{category.icon}</span>}
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 shadow-lg opacity-0 animate-fade-in-delay-1"
              style={{ animationDelay: `${key * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-900/20 text-purple-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
              </div>
              
              <div className="w-full bg-gray-700/50 h-2.5 rounded-full overflow-hidden">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="flex justify-between items-center mt-2">
                <span className="text-sm font-medium text-purple-300">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};