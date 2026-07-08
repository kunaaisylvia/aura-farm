export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 text-white py-32 px-8"
    >
      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Let's build something meaningful.
        </h2>

        <p className="text-zinc-300 text-xl leading-9 max-w-3xl mx-auto">
          Whether you're hiring, collaborating, or exploring an AI idea,
          I'd love to hear from you.
        </p>

        <div className="mt-14 flex flex-col gap-5">

          <a
            href="mailto:sylviakunaai@gmail.com"
            className="text-xl hover:text-yellow-500 transition"
          >
            📧 Email
          </a>

          <a
            href="https://www.linkedin.com/in/sylvia-kunaai-72baa6217"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-yellow-500 transition"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/kunaaisylvia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-yellow-500 transition"
          >
            🐙 GitHub
          </a>

        </div>

        <a
          href="/resume.pdf"
          className="inline-block mt-14 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Download Resume
        </a>

      </div>
    </section>
  );
}