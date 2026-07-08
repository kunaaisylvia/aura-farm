export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Skills", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <a
          href="#"
          className="text-2xl font-bold tracking-wide text-white hover:text-yellow-500 transition"
        >
          Sylvia.
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-zinc-300 hover:text-yellow-500 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}