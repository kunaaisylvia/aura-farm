import {
  Code2,
  BrainCircuit,
  Server,
  MonitorSmartphone,
  Blocks,
  Database,
  Wrench,
} from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "TypeScript", "JavaScript", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      icon: BrainCircuit,
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
      icon: Server,
      skills: [
        "FastAPI",
        "Flask",
        "REST APIs",
        "Node.js",
      ],
    },
    {
      title: "Blockchain & Web3",
      icon: Blocks,
      skills: [
        "Solidity",
        "Ethereum",
        "Web3",
        "Smart Contracts",
        "Remix IDE",
      ],
    },
    {
      title: "Frontend",
      icon: MonitorSmartphone,
      skills: [
        "Next.js",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      title: "Data & Analytics",
      icon: Database,
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
      icon: Wrench,
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
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[0.45em] text-yellow-500 text-sm mb-6">
          Tech Stack
        </p>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-16">
          Technologies I
          <span className="text-yellow-500"> build with.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-black/40
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-yellow-500/60
                  hover:shadow-[0_0_40px_rgba(234,179,8,0.08)]
                "
              >
                <div className="flex items-center gap-4 mb-8">

                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition group-hover:border-yellow-500">

                    <Icon
                      size={26}
                      className="text-yellow-500"
                    />

                  </div>

                  <h3 className="text-2xl font-semibold">
                    {category.title}
                  </h3>

                </div>

                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-zinc-900
                        border
                        border-zinc-800
                        text-zinc-300
                        text-sm
                        transition-all
                        duration-300
                        hover:border-yellow-500
                        hover:text-yellow-500
                        hover:bg-black
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}