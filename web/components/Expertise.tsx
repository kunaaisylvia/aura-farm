export default function Expertise() {
  const expertise = [
    {
      title: "AI Engineering",
      description:
        "Designing intelligent systems, machine learning solutions, and AI-powered applications.",
      tech: "Python • TensorFlow • PyTorch • LangChain",
    },
    {
      title: "Software Engineering",
      description:
        "Building scalable backend services and modern web applications.",
      tech: "FastAPI • Next.js • React • TypeScript",
    },
    {
      title: "Blockchain",
      description:
        "Developing decentralized applications and smart contract solutions.",
      tech: "Solidity • Ethereum • Web3",
    },
    {
      title: "Data & Analytics",
      description:
        "Transforming data into actionable insights using modern analytics tools.",
      tech: "SQL • Power BI • Pandas",
    },
  ];

  return (
    <section
      id="expertise"
      className="bg-black text-white py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
          Core Expertise
        </p>

        <h2 className="text-5xl font-bold mb-14">
          Building across disciplines.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-8 mb-6">
                {item.description}
              </p>

              <span className="text-yellow-500 text-sm tracking-wide">
                {item.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}