export default function Projects() {
  const projects = [
    {
      title: "Phoenix AI Workspace",
      category: "AI Engineering",
      status: "In Development",
      description:
        "An AI-powered engineering workspace that helps developers plan, build, and manage software projects using intelligent assistants, structured documentation, and scalable backend architecture.",
      tech: [
        "Python",
        "FastAPI",
        "OpenAI",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      title: "Aura",
      category: "Portfolio",
      status: "Production",
      description:
        "A premium engineering portfolio focused on minimal design, performance, and showcasing software engineering, AI, and blockchain projects.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "AI Distributor Management System",
      category: "Business Intelligence",
      status: "Private",
      description:
        "An intelligent distributor management platform combining automation, analytics, and AI to streamline operations and improve business decision-making.",
      tech: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "AI",
      ],
    },
    {
      title: "Blockchain Application",
      category: "Web3",
      status: "Prototype",
      description:
        "A decentralized application demonstrating smart contracts, blockchain architecture, and modern Web3 development principles.",
      tech: [
        "Solidity",
        "Ethereum",
        "Web3",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
          Featured Projects
        </p>

        <h2 className="text-5xl font-bold mb-14">
          Products I've built.
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-zinc-800 rounded-3xl p-10 hover:border-yellow-500 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-yellow-500 uppercase tracking-widest text-sm">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {project.title}
                  </h3>
                </div>

                <span className="border border-zinc-700 rounded-full px-4 py-2 text-sm text-zinc-300 w-fit">
                  {project.status}
                </span>
              </div>

              <p className="text-zinc-400 leading-8 mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="border border-zinc-700 rounded-full px-4 py-2 text-sm text-yellow-500"
                  >
                    {item}
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