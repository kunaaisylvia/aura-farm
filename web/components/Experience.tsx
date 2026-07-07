export default function Experience() {
  const experiences = [
    {
      period: "2025 – Present",
      title: "Software Engineer & AI Engineer",
      organization: "Independent Projects",
      description:
        "Designing and building AI-powered applications, modern web platforms, backend services, and intelligent automation solutions.",
    },
    {
      period: "2024",
      title: "Software Engineering Graduate",
      organization: "Zetech University",
      description:
        "Completed a Bachelor's degree in Software Engineering while building practical projects in AI, backend engineering, and blockchain.",
    },
    {
      period: "2022",
      title: "Diploma in Information Technology",
      organization: "Zetech University",
      description:
        "Built a strong foundation in programming, networking, databases, and software development principles.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-zinc-950 text-white py-32 px-8"
    >
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
          Experience
        </p>

        <h2 className="text-5xl font-bold mb-16">
          My journey as an engineer.
        </h2>

        <div className="space-y-12">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-yellow-500 pl-8"
            >
              <p className="text-yellow-500 mb-2">
                {item.period}
              </p>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-zinc-400 mb-4">
                {item.organization}
              </p>

              <p className="text-zinc-300 leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}