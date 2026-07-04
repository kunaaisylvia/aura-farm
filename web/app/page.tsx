export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <section className="text-center max-w-3xl px-6">
        <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
          AI Engineer
        </p>

        <h1 className="text-6xl font-bold mb-6">
          Sylvia Kunaai
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed mb-10">
          Building intelligent software that solves real-world problems through
          Artificial Intelligence, Blockchain, and Full Stack Engineering.
        </p>

        <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
          Explore Phoenix
        </button>
      </section>
    </main>
  );
}
