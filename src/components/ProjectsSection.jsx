import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Vision Based Navigation",
    description: "Created a GPS-independent autonomous drone landing system using onboard computer vision to detect colored markers for precise navigation and landing.",
    image: "drone.jpg",
    tags: ["Python", "Gazebo", "ComputerVision"],
    demoUrl: "https://drive.google.com/drive/folders/1rKlSrs1aT5kpTJHOXoW-QnA5ep1nt-Zh?usp=drive_link",
    githubUrl: "https://github.com/MAUSUMIBHUYAN/Vision-Based-Navigation",
  },
  {
    id: 2,
    title: "Creovate Website",
    description: "Designed a dynamic portfolio website for Creovate featuring a fully responsive layout, engaging animations, and interactive user experiences.",
    image: "/projects/project2.png",
    tags: ["HTML/CSS", "Javascript", "React"],
    demoUrl: "Creovate.mp4",
    githubUrl: "https://github.com/MAUSUMIBHUYAN/Creovate",
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Built a web-based Task Management System to streamline team collaboration, optimize task assignments, and enable real-time progress tracking.",
    image: "Task.png",
    tags: ["HTML/CSS", "Javascript", "PHP", "MySQL"],
    demoUrl: "Task management.mp4",
    githubUrl: "https://github.com/MAUSUMIBHUYAN/Task-Management-System",
  },
  {
    id: 4,
    title: "Traffic Light Controller",
    description: "Developed a traffic light controller that optimized traffic flow, reducing congestion and improving travel time at a key intersection.",
    image: "traffic.png",
    tags: ["Python", "Reinforcement Learning", "Sumo"],
    demoUrl: "traffic video.mp4",
    githubUrl: "https://github.com/MAUSUMIBHUYAN/Traffic-light-controller",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-gray-900/50 to-violet-900/20">
      {/* Cosmic decoration elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-purple-400 opacity-60 animate-pulse animate-float"></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 rounded-full bg-pink-300 opacity-50 animate-pulse animate-float delay-1000"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white/90 opacity-0 animate-fade-in">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Projects</span>
        </h2>

        <p className="text-center text-white/90 mb-16 max-w-2xl mx-auto text-lg opacity-0 animate-fade-in-delay-1">
          Below is a selection of my projects, developed with a strong focus on functionality, user experience, and cutting-edge technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-purple-900/30 hover:border-purple-500/50 overflow-hidden shadow-lg transition-all duration-500 opacity-0 animate-fade-in-delay-2"
              style={{ animationDelay: `${key * 0.1 + 0.2}s` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-white/90 text-sm mb-5">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-purple-300 transition-colors duration-300 flex items-center gap-1 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-pink-300 transition-colors duration-300 flex items-center gap-1 text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 opacity-0 animate-fade-in-delay-3">
          <a
            className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg font-medium text-white transition-all duration-300 rounded-full group"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MAUSUMIBHUYAN"
          >
            <span className="relative z-10 flex items-center gap-2">
              Check My GitHub <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-80 group-hover:opacity-90 transition-opacity"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full blur-md opacity-0 group-hover:opacity-50 scale-95 group-hover:scale-105 transition-all"></span>
          </a>
        </div>
      </div>
    </section>
  );
};