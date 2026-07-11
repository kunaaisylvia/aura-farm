"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 40);

      if (currentScroll <= 20) {
        setShowNav(true);
      } else if (currentScroll > lastScroll) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Skills", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${showNav ? "translate-y-0" : "-translate-y-full"}
      ${
        scrolled
          ? "bg-black/75 backdrop-blur-2xl border-b border-zinc-800/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-end md:justify-center px-6 py-5">

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-sm tracking-wide text-zinc-300 hover:text-yellow-500 transition after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
        >
          <span
            className={`absolute h-[2px] w-7 bg-white rounded-full transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />

          <span
            className={`absolute h-[2px] w-7 bg-white rounded-full transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute h-[2px] w-7 bg-white rounded-full transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-3xl border-t border-zinc-800">

          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${index * 60}ms` : "0ms",
              }}
              className="block px-8 py-5 text-lg text-zinc-300 hover:text-yellow-500 hover:bg-zinc-900/40 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}

        </div>
      </div>
    </header>
  );
}