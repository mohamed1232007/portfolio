import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      lastScrollY = window.scrollY;

      const sections = ["top", "skills", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={hideHeader ? "hide" : ""}>
      <a
        href="#top"
        className="logo"
        data-aos="zoom-in"
      >
        Mohamed
      </a>

      <nav
        className={isOpen ? "active" : ""}
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <a
          href="#top"
          className={activeSection === "top" ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
          onClick={closeMenu}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
          onClick={closeMenu}
        >
          Projects
        </a>
        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={closeMenu}
        >
          About Me
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </a>
        
      </nav>

      <button
        type="button"
        className={`hamburger ${isOpen ? "active" : ""}`}
        id="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;
