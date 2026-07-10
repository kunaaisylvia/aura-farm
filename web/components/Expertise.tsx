import {
  BrainCircuit,
  Code2,
  Blocks,
  BarChart3,
} from "lucide-react";

export default function Expertise() {
  const expertise = [
    {
      title: "AI Engineering",
      description:
        "Building AI agents, LLM-powered applications, intelligent automation, and machine learning solutions that solve real-world problems.",
      tech: "Python • LangChain • OpenAI • TensorFlow",
      icon: BrainCircuit,
    },
    {
      title: "Software Engineering",
      description:
        "Designing scalable backend services and modern full-stack applications with performance, maintainability, and clean architecture in mind.",
      tech: "FastAPI • Next.js • React • TypeScript",
      icon: Code2,
    },
    {
      title: "Blockchain",
      description:
        "Developing decentralized applications and smart contracts while exploring secure, transparent, and scalable Web3 solutions.",
      tech: "Solidity • Ethereum • Web3",
      icon: Blocks,
    },
    {
      title: "Data & Analytics",
      description:
        "Transforming complex datasets into meaningful insights through visualization, automation, and analytical thinking.",
      tech: "SQL • Power BI • Pandas",
      icon: BarChart3,
    },
  ];

  return (
    <section
      id="expertise"
      className="bg-black text-white py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[0.45em] text-yellow-500 text-sm mb-6">
          Expertise
        </p>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-16">
          Building across
          <span className="text-yellow-500"> disciplines.</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-zinc-950
                  p-10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-yellow-500/60
                  hover:shadow-[0_0_40px_rgba(234,179,8,0.08)]
                "
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 mb-8 group-hover:border-yellow-500 transition">

                  <Icon
                    size={30}
                    className="text-yellow-500"
                  />

                </div>

                <h3 className="text-2xl font-semibold mb-5">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-8 mb-8">
                  {item.description}
                </p>

                <div className="inline-block rounded-full bg-zinc-900 border border-zinc-800 px-5 py-2 text-sm text-yellow-500">
                  {item.tech}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}