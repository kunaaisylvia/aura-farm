export default function TechStack() {
  const categories = [
    {
      title: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Prompt Engineering",
        "LangChain",
        "OpenAI API",
        "AI Agents",
        "RAG",
        "Model Evaluation",
      ],
    },
    {
      title: "Backend",
      skills: [
        "FastAPI",
        "Flask",
        "REST APIs",
        "Node.js",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "Next.js",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      title: "Blockchain & Web3",
      skills: [
        "Solidity",
        "Ethereum",
        "Web3.js",
        "Smart Contracts",
        "Remix IDE",
      ],
    },
    {
      title: "Data & Analytics",
      skills: [
        "Pandas",
        "NumPy",
        "Power BI",
        "Data Analysis",
        "ETL Pipelines",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Linux",
        "VS Code",
      ],
    },
  ];

  return (
    <section
      id="tech-stack"
      className="bg-zinc-950 text-white py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
          Tech Stack
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Technologies I build with.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-sm text-zinc-300 hover:border-yellow-500 hover:text-yellow-500 transition"
                  >
                    {skill}
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