import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {  StarBackground } from "./components/StarBackground.jsx";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1400, once: true, offset: 40 });
  }, []);
  return (
    <div className="app-container">
    
      <StarBackground />
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
