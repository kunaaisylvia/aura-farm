export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">

        <h3 className="text-xl font-semibold text-white tracking-wide">
          Sylvia Kunaai
        </h3>

        <p className="text-sm uppercase tracking-[0.3em] text-yellow-500">
          AI Engineer • Software Engineer • Blockchain Developer
        </p>

        <p className="text-sm text-zinc-600 mt-6">
          © {new Date().getFullYear()} Sylvia Kunaai. All rights reserved.
        </p>

      </div>
    </footer>
  );
}