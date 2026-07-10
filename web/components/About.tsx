export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-zinc-950 text-white flex items-center px-8 py-32"
    >
      <div className="max-w-5xl mx-auto">

        <p className="uppercase tracking-[0.45em] text-yellow-500 text-sm mb-6">
          About
        </p>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-12">
          Building software that is
          <span className="text-yellow-500"> intelligent</span>,
          <br />
          scalable, and built to last.
        </h2>

        <div className="space-y-8 text-xl leading-9 text-zinc-400 max-w-3xl">

          <p>
            I'm <span className="text-white font-semibold">Sylvia Kunaai</span>,
            a Software Engineer passionate about creating technology that solves
            real-world problems. My work combines artificial intelligence,
            blockchain, backend engineering, and modern web development to build
            products that are both practical and impactful.
          </p>

          <p>
            Whether I'm developing AI assistants, designing scalable backend
            systems, or building full-stack applications, I focus on clean
            architecture, performance, and thoughtful user experiences.
          </p>

          <p>
            I believe great software isn't just functional—it's reliable,
            intuitive, and built with purpose.
          </p>

        </div>

      </div>
    </section>
  );
}