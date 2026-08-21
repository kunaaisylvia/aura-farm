import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-black px-6 pb-20 pt-28 text-white sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-300/5 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.35fr_.65fr]">
        <div>
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-400 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-yellow-500 shadow-[0_0_14px_rgba(234,179,8,.8)]" />
              Available for select opportunities
            </div>
          </Reveal>

          <Reveal>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-500">
              Software Engineer · AI Engineer · Blockchain Developer
            </p>
          </Reveal>

          <Reveal>
            <h1 className="max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Building systems that
              <span className="block text-yellow-500">actually matter.</span>
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              I&apos;m Sylvia Kunaai — an engineer focused on intelligent products,
              resilient software, and emerging technology. I turn ambitious ideas
              into systems people can actually use.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="rounded-full bg-yellow-500 px-7 py-4 text-center font-semibold text-black transition hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-[0_14px_40px_rgba(234,179,8,.18)]">
                Explore my work →
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-center font-semibold text-white transition hover:-translate-y-1 hover:border-yellow-500/50 hover:bg-white/[0.06]">
                View resume
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7 text-sm text-zinc-500">
              <span>AI &amp; Machine Learning</span>
              <span>Backend &amp; Distributed Systems</span>
              <span>Web3 &amp; Blockchain</span>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[2rem] border border-yellow-500/10" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Engineering focus</p>
                  <p className="mt-1 text-lg font-semibold">Build · Ship · Improve</p>
                </div>
                <span className="text-2xl text-yellow-500">✦</span>
              </div>

              <div className="space-y-3 pt-5">
                {[
                  ["01", "Intelligent systems", "AI, ML & automation"],
                  ["02", "Reliable software", "APIs, cloud & data"],
                  ["03", "Emerging technology", "Blockchain & Web3"],
                ].map(([number, title, description]) => (
                  <div key={number} className="group rounded-2xl border border-white/5 bg-white/[0.025] p-4 transition hover:border-yellow-500/20 hover:bg-white/[0.05]">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs text-yellow-500/70">{number}</span>
                      <div>
                        <p className="font-semibold text-zinc-100">{title}</p>
                        <p className="mt-1 text-sm text-zinc-500">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-yellow-500/10 bg-yellow-500/5 p-4 text-sm leading-6 text-zinc-400">
                Clean architecture, thoughtful UX, and production-minded engineering.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
