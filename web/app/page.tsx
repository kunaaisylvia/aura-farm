import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Expertise from "../components/Expertise";
import EngineeringPhilosophy from "../components/EngineeringPhilosophy";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <EngineeringPhilosophy />
      <TechStack />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}