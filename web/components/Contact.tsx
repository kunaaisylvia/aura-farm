import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 text-white py-32 px-8"
    >
      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-yellow-500 mb-4">
          Contact
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Let's build something meaningful.
        </h2>

        <p className="text-zinc-400 text-lg md:text-xl leading-8 max-w-2xl mx-auto">
          Whether you're hiring, collaborating, or exploring an AI idea,
          I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <a
            href="mailto:sylviakunaai@gmail.com"
            className="border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
          >
            <FaEnvelope className="text-yellow-500 text-3xl mx-auto mb-5" />

            <h3 className="font-semibold text-xl mb-2">
              Email
            </h3>

            <p className="text-zinc-400 break-all">
              sylviakunaai@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/sylvia-kunaai-72baa6217"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
          >
            <FaLinkedin className="text-yellow-500 text-3xl mx-auto mb-5" />

            <h3 className="font-semibold text-xl mb-2">
              LinkedIn
            </h3>

            <p className="text-zinc-400">
              Connect with me
            </p>
          </a>

          <a
            href="https://github.com/kunaaisylvia"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub className="text-yellow-500 text-3xl mx-auto mb-5" />

            <h3 className="font-semibold text-xl mb-2">
              GitHub
            </h3>

            <p className="text-zinc-400">
              View my projects
            </p>
          </a>

        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mt-16 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300"
        >
          <FaDownload />
          Download Resume
        </a>

      </div>
    </section>
  );
}