import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import Reveal from "./Reveal";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Phoenix AI Workspace",
      category: "AI Engineering",
      status: "In Development",
      description:
        "An AI-powered engineering workspace for planning, building, and managing software projects with intelligent assistants, structured documentation, and scalable backend architecture.",
      tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Docker"],
      featured: true,
      href: "https://github.com/kunaaisylvia/phoenix-ai-workspace",
    },
    {
      number: "02",
      title: "Aura",
      category: "Engineering Portfolio",
      status: "Production",
      description:
        "A premium engineering portfolio built around performance, clarity, and a technical-first presentation of software, AI, and blockchain work.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      href: "https://github.com/kunaaisylvia/aura-farm",
    },
    {
      number: "03",
      title: "AI Distributor Management System",
      category: "Business Intelligence",
      status: "Private",
      description:
        "An intelligent operations platform combining automation, analytics, and AI to streamline distributor workflows and support better business decisions.",
      tech: ["Python", "FastAPI", "PostgreSQL", "AI"],
    },
    {
      number: "04",
      title: "Blockchain Application",
      category: "Web3",
      status: "Prototype",
      description:
        "A decentralized application exploring smart contracts, blockchain architecture, and modern Web3 development patterns.",
      tech: ["Solidity", "Ethereum", "Web3"],
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden bg-black px-6 py-32 text-white sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-500">Selected work</p>
              <h2 className="max-w-3xl text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl">Things I&apos;ve built.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-zinc-500">Products, platforms, and experiments where engineering meets real-world problems.</p>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <article className={`group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 p-7 transition duration-500 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-zinc-900/70 sm:p-9 ${project.featured ? "lg:col-span-2" : ""}`}>
                <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-yellow-500/[0.05] blur-3xl transition duration-500 group-hover:bg-yellow-500/10" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <span className="font-mono text-xs text-yellow-500/70">{project.number}</span>
                    <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500">{project.status}</span>
                  </div>

                  <div className="mt-10 max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-500">{project.category}</p>
                    <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">{project.title}</h3>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">{project.description}</p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400">{item}</span>
                    ))}
                  </div>

                  <div className="mt-9 flex items-center gap-5 border-t border-white/10 pt-6">
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-yellow-500">
                        Explore repository <Github size={16} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-zinc-600"><Layers3 size={16} /> Case study coming soon</span>
                    )}
                    <span className="ml-auto inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-zinc-600 transition group-hover:text-yellow-500">View <ArrowUpRight size={14} /></span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
