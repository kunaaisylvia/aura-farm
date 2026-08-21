import { ArrowDown, ArrowUpRight, Github, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-black px-6 pb-20 pt-28 text-white sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[42%] top-[10%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-300/5 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-300 backdrop-blur">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500" /></span>
              Software · AI · Blockchain
            </div>
          </Reveal>

          <Reveal>
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-yellow-500"><Sparkles size={15} /> Sylvia Kunaai</p>
          </Reveal>

          <Reveal>
            <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[6.6rem]">
              I build the
              <span className="block text-yellow-500">systems behind</span>
              ambitious ideas.
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Software engineer building intelligent products, reliable backend systems, and blockchain-powered experiences. From idea to production, I care about making the thing actually work.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-[0_18px_50px_rgba(234,179,8,.2)]">Explore my work <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/[0.06]">View resume <ArrowUpRight size={17} /></a>
              <a href="https://github.com/kunaaisylvia" target="_blank" rel="noopener noreferrer" aria-label="Sylvia Kunaai on GitHub" className="inline-flex items-center justify-center rounded-full border border-white/10 p-4 text-zinc-400 transition hover:-translate-y-1 hover:border-white/25 hover:text-white"><Github size={20} /></a>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/10 pt-7 text-sm text-zinc-500 sm:grid-cols-3">
              <div><p className="font-mono text-yellow-500">01</p><p className="mt-2">AI & Machine Learning</p></div>
              <div><p className="font-mono text-yellow-500">02</p><p className="mt-2">Backend & Distributed Systems</p></div>
              <div><p className="font-mono text-yellow-500">03</p><p className="mt-2">Blockchain & Web3</p></div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-yellow-500/10" />
            <div className="absolute -inset-12 rounded-[4rem] border border-white/[0.03]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/85 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-5"><div><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">AURA / ENGINEERING</p><p className="mt-2 text-lg font-semibold">Build · Ship · Improve</p></div><span className="text-2xl text-yellow-500">✦</span></div>
              <div className="space-y-3 pt-5">
                {[["01", "Intelligent systems", "AI, ML & automation"], ["02", "Reliable software", "APIs, cloud & data"], ["03", "Emerging technology", "Blockchain & Web3"]].map(([number, title, description]) => (
                  <div key={number} className="group rounded-2xl border border-white/5 bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/20 hover:bg-white/[0.05]"><div className="flex items-start gap-4"><span className="font-mono text-xs text-yellow-500/70">{number}</span><div><p className="font-semibold text-zinc-100">{title}</p><p className="mt-1 text-sm text-zinc-500">{description}</p></div></div></div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-yellow-500/10 bg-yellow-500/5 p-5"><p className="text-sm leading-6 text-zinc-400">Production-minded engineering: clean architecture, thoughtful UX, observable systems, and room to scale.</p></div>
            </div>
            <a href="#about" className="mx-auto mt-8 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-600 transition hover:text-yellow-500">Scroll to explore <ArrowDown size={14} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
