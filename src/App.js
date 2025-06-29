import Navbar from "./components/Navbar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const glowOverlay = document.createElement("div");
    glowOverlay.id = "glowOverlay";
    glowOverlay.style.position = "fixed";
    glowOverlay.style.top = "0";
    glowOverlay.style.left = "0";
    glowOverlay.style.width = "100vw";
    glowOverlay.style.height = "100vh";
    glowOverlay.style.pointerEvents = "none";
    glowOverlay.style.zIndex = "-1";
    document.body.appendChild(glowOverlay);

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      glowOverlay.style.backgroundImage = `
        radial-gradient(circle at ${x}px ${y}px, rgba(70, 44, 153, 0.25) 0%, transparent 150px)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      glowOverlay.remove();
    };
  }, []);

  return (
    <div className="font-sans text-white relative">
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="tech">
        <TechStack />
      </section>
      <section id="work">
        <WorkExperience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

