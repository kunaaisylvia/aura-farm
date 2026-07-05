export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-zinc-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-xl font-bold text-white tracking-wide">
          Sylvia Kunaai
        </h1>

        <ul className="flex gap-8 text-sm font-medium text-zinc-300">
          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-yellow-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}