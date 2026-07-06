export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-zinc-950 text-white flex items-center justify-center px-8"
    >
      <div className="max-w-3xl">
        <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
          About Me
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Engineering intelligent solutions,
          <br />
          one product at a time.
        </h2>

        <p className="text-lg leading-9 text-zinc-300">
          I'm Sylvia Kunaai, an AI Engineer and Software Engineer passionate
          about building products that solve real-world problems. My work spans
          Artificial Intelligence, backend systems, blockchain technology, and
          modern web development.
        </p>

        <p className="text-lg leading-9 text-zinc-300 mt-6">
          I enjoy transforming ideas into scalable software—from intelligent AI
          assistants to data-driven platforms—while focusing on performance,
          security, and user experience.
        </p>

        <p className="text-lg leading-9 text-zinc-300 mt-6">
          My goal is simple: build technology that people genuinely enjoy using.
        </p>
      </div>
    </section>
  );
}