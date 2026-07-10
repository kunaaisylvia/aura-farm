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

        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-10">
          Build less.
          <br />
          Build better.
        </h2>

        <p className="text-xl text-zinc-400 leading-9 max-w-3xl mx-auto mb-8">
          I believe the best technology is almost invisible. It solves real
          problems, scales with confidence, and feels intuitive to the people
          who depend on it every day.
        </p>

        <p className="text-xl text-zinc-400 leading-9 max-w-3xl mx-auto">
          Whether developing AI systems, backend infrastructure, or modern web
          applications, I prioritize thoughtful architecture, long-term
          maintainability, and measurable impact over unnecessary complexity.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {[
            "Simplicity",
            "Performance",
            "Scalability",
            "Reliability",
            "Impact",
          ].map((value) => (
            <span
              key={value}
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm text-zinc-300 hover:border-yellow-500 hover:text-yellow-500 transition"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}