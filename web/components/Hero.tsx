import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 -mt-10">
      <div className="max-w-5xl text-center">

        <Reveal>
          <p className="uppercase tracking-[0.45em] text-yellow-500 text-sm mb-6">
            Software Engineer • AI Engineer • Blockchain Developer
          </p>
        </Reveal>

        <Reveal>
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight leading-none mb-8">
            Sylvia{" "}
            <span className="text-yellow-500">
              Kunaai
            </span>
          </h1>
        </Reveal>

        <Reveal>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-zinc-400 leading-relaxed mb-14">
            Engineering intelligent systems for real-world impact through AI, blockchain, and modern software.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-yellow-500 text-black font-semibold hover:scale-105 transition duration-300"
            >
              Explore Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-zinc-600 hover:border-yellow-500 hover:bg-zinc-900 transition-all duration-300"
            >
              Download Resume
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}