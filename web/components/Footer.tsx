export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-zinc-400 py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm">
          © {new Date().getFullYear()} Sylvia Kunaai. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">

          <a
            href="https://github.com/kunaaisylvia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sylvia-kunaai-72baa6217/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:sylviakunaai@gmail.com"
            className="hover:text-yellow-500 transition"
          >
            Email
          </a>

        </div>
      </div>
    </footer>
  );
}