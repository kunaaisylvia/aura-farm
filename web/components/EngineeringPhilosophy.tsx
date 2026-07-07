export default function EngineeringPhilosophy() {
  return (
    <section
      id="philosophy"
      className="bg-black text-white py-32 px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
          Engineering Philosophy
        </p>

        <h2 className="text-5xl font-bold mb-12">
          Technology should solve problems,
          <br />
          not create them.
        </h2>

        <p className="text-xl text-zinc-300 leading-9 mb-8">
          I believe great software isn't defined by the number of features it
          has, but by the value it creates for the people who use it.
        </p>

        <p className="text-xl text-zinc-300 leading-9 mb-8">
          Whether I'm building AI systems, backend platforms, blockchain
          solutions, or modern web applications, my focus remains the same:
          create technology that is intelligent, reliable, and genuinely useful.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <span className="border border-yellow-500 rounded-full px-6 py-3">
            Simplicity
          </span>

          <span className="border border-yellow-500 rounded-full px-6 py-3">
            Scalability
          </span>

          <span className="border border-yellow-500 rounded-full px-6 py-3">
            Impact
          </span>
        </div>
      </div>
    </section>
  );
}