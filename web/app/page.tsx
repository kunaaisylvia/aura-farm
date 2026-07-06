import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Expertise from "../components/Expertise";

export default function Home() {
  return (
    <main className="bg-black text-white pt-24">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
    </main>
  );
}