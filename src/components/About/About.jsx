import { Code2, Database, Layers3 } from "lucide-react";

const skillCards = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Building rich user interfaces with motion, performance, and modern component architecture.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Database,
    description: "Designing APIs, authentication, and data workflows for scalable full-stack products.",
    skills: ["NestJS", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    title: "Product Skills",
    icon: Layers3,
    description: "Turning ideas into real products with deployment, testing, and iterative delivery.",
    skills: ["Docker", "Git/GitHub", "Vercel", "Postman", "Responsive UI"],
  },
];

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900/40 to-gray-800/40 text-white" id="about">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Skills and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Full-stack developer focused on immersive interfaces, reliable backend services, and polished deployment pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {skillCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="glass-card rounded-xl p-6 md:p-7 transition-all duration-300 hover:border-cyan-400/50 tilt-card h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4 depth-2">
                  <Icon size={24} className="text-cyan-300" />
                  <h3 className="text-xl font-bold">{card.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-6 depth-1">{card.description}</p>
                <div className="flex flex-wrap gap-2 depth-3 mt-auto">
                  {card.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs border border-cyan-400/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
