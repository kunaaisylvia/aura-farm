export default function Projects() {
  const projects = [
    {
      title: "Phoenix AI Workspace",
      subtitle: "AI Engineering Platform",
      description:
        "An AI-powered workspace built to help engineers plan, build, and manage software projects through intelligent assistance, structured documentation, and scalable backend architecture.",
      technologies: [
        "Python",
        "FastAPI",
        "AI",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      title: "Aura",
      subtitle: "Personal Engineering Portfolio",
      description:
        "A modern portfolio designed to showcase my work, technical expertise, and engineering philosophy using a clean, scalable architecture.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "AI Distributor Management System",
      subtitle: "Business Intelligence Platform",
      description:
        "An intelligent distributor management platform combining automation, analytics, and AI to improve operational efficiency.",
      technologies: [
        "FastAPI",
        "Python",
        "PostgreSQL",
        "AI",
      ],
    },
    {
      title: "Blockchain Project",
      subtitle: "Web3 Development",
      description:
        "A blockchain application demonstrating decentralized technologies, smart contracts, and modern Web3 development principles.",
      technologies: [
        "Solidity",
        "Ethereum",
        "Web3",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-zinc-950 text-white py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
          Featured Projects
        </p>

        <h2 className="text-5xl font-bold mb-14">
          Building products with purpose.
        </h2>

        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-zinc-800 rounded-3xl p-10 hover:border-yellow-500 transition-all duration-300"
            >
              <p className="text-yellow-500 uppercase tracking-widest text-sm mb-2">
                {project.subtitle}
              </p>

              <h3 className="text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-8 mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-zinc-700 rounded-full px-4 py-2 text-sm text-yellow-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}