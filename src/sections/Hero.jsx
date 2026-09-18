import { useState, useEffect, useMemo } from "react";
import heroImg from "../assets/img/mohamed-ibrahim.jpg";

function Hero() {
  const startDownload = () => {
    window.open(`${import.meta.env.BASE_URL}Mohamed_Ibrahim_CV.pdf`, "_blank");
  };

  const words = useMemo(
    () => [
      "Full-Stack Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    []
  );

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? 100 : charIndex === currentWord.length ? 2000 : 200);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
      <section className="home" id="top">
          <div className="home-img" data-aos="zoom-in">
              <img src={heroImg} alt="Mohamed Ibrahim" />
          </div>

          <div className="home-content">
              <h1 data-aos="fade-left" data-aos-delay="200">
                  Hi, I'm <span>Mohamed Ibrahim</span>
              </h1>

              <h3
                  className="typing-text"
                  data-aos="fade-right"
                  data-aos-delay="200"
              >
                  I'm a <span className="typewriter">{text}</span>
              </h3>

              <p data-aos="fade-down" data-aos-delay="250">
                  Passionate Full-Stack Developer specializing in building
                  scalable web applications with React, Node.js, and modern
                  databases, committed to writing clean, maintainable code and
                  delivering seamless user experiences.
              </p>

              <div
                  className="social-icons"
                  data-aos="fade-up"
                  data-aos-delay="250"
              >
                  <a
                      href="https://github.com/mohamed1232007"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                  >
                      <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                      href="https://www.linkedin.com/in/mohamed-ibrahem-201638378/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                  >
                      <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                      href="mailto:mohamedibraim1232007@gmail.com"
                      aria-label="Email"
                  >
                      <i className="fa-solid fa-envelope"></i>
                  </a>
              </div>

              <button onClick={startDownload} className="btn">
                  View My CV
              </button>
          </div>
      </section>
  );
}

export default Hero;