import { useEffect, useState } from "react";
import {
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";
import ecommerceImage from "../../assets/projects/ecommerce.png";
import houseboatImage from "../../assets/projects/Houseboat.png";
import portfolioImage from "../../assets/projects/portfolio.png";
import habitImage from "../../assets/projects/habit.png";
import projectsData from "../../data/project.json";

const projectImages = {
  ecommerce: ecommerceImage,
  portfolio: portfolioImage,
  houseboat: houseboatImage,
  habit: habitImage,
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projectsData.length;

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (total <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(timer);
  }, [total]);

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const renderProjectCard = (project, variant) => {
    const image = projectImages[project.image];

    const variantClasses =
      variant === "center"
        ? "relative z-30 opacity-100 translate-x-0 scale-100 w-full md:w-[72%]"
        : variant === "left"
          ? "hidden md:block absolute left-0 z-20 opacity-45 -translate-x-6 scale-95 blur-[1px] w-[48%]"
          : "hidden md:block absolute right-0 z-20 opacity-45 translate-x-6 scale-95 blur-[1px] w-[48%]";

    return (
      <article
        key={`${project.id}-${variant}`}
        className={`glass-card rounded-xl overflow-hidden transition-all duration-500 border border-slate-700/50 h-full flex flex-col ${variantClasses}`}
      >
        <div className="h-52 overflow-hidden border-b border-slate-700/60">
          {image ? (
            <img
              src={image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-cyan-800/30 to-blue-700/20 flex items-center justify-center">
              <CalendarCheck2 size={40} className="text-cyan-300" />
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold mb-3 text-cyan-300">{project.title}</h3>
          <p className="text-gray-300 mb-5 text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-slate-700 text-slate-200 rounded-full text-xs border border-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-8 mt-auto pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-300 hover:text-blue-200 font-medium"
            >
              <Github size={16} /> Code
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-medium"
            >
              <ExternalLink size={16} /> Demo
            </a>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-gray-800/40 to-gray-900/40 text-white"
      id="projects"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Swipe through my full project collection.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto h-[540px] md:h-[510px] flex items-center justify-center">
          {total > 1 && renderProjectCard(projectsData[prevIndex], "left")}
          {renderProjectCard(projectsData[activeIndex], "center")}
          {total > 1 && renderProjectCard(projectsData[nextIndex], "right")}

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-1 md:left-6 z-40 p-2 rounded-full border border-cyan-500/40 bg-slate-900/80 text-cyan-200 hover:bg-slate-800"
                aria-label="Previous project"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-1 md:right-6 z-40 p-2 rounded-full border border-cyan-500/40 bg-slate-900/80 text-cyan-200 hover:bg-slate-800"
                aria-label="Next project"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {projectsData.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-7 bg-cyan-400"
                  : "w-2.5 bg-slate-500 hover:bg-slate-400"
              }`}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
