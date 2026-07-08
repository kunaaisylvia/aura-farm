export default function Education() {
  const education = [
    {
      year: "2024",
      title: "Bachelor of Science in Software Engineering",
      institution: "Zetech University",
      description:
        "Graduated with a strong foundation in software engineering, artificial intelligence, backend development, and modern software architecture.",
    },
    {
      year: "2022",
      title: "Diploma in Information Technology",
      institution: "Zetech University",
      description:
        "Built practical skills in programming, networking, databases, and systems administration.",
    },
  ];

  const certifications = [
    "Cisco CyberOps Associate",
    "Cisco CCNA: Enterprise Networking, Security & Automation",
    "Cisco CCNA: Switching, Routing & Wireless Essentials",
    "Rise In Blockchain Specialization",
    "CyberShujaa Information Security Awareness",
  ];

  return (
    <section
      id="education"
      className="bg-black text-white py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
          Education & Certifications
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Learning never stops.
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Education
            </h3>

            <div className="space-y-10">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-yellow-500 pl-6"
                >
                  <p className="text-yellow-500 mb-2">
                    {item.year}
                  </p>

                  <h4 className="text-xl font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-zinc-400 mb-3">
                    {item.institution}
                  </p>

                  <p className="text-zinc-300 leading-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Certifications
            </h3>

            <div className="flex flex-wrap gap-4">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="border border-zinc-700 rounded-full px-5 py-3 text-yellow-500"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}