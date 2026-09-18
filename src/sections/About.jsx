import heroImg from "../assets/img/mohamed-ibrahim.jpg";
function About() {
  const startDownload = () => {
    window.open(`${import.meta.env.BASE_URL}Mohamed_Ibrahim_CV.pdf`, "_blank");
  };

  return (
      <>
          <section className="about" id="about">
              <div className="content">
                  <div className="title" data-aos="fade-up">
                      <span>About Me</span>
                  </div>
                  <div className="about-details">
                      <div
                          className="left"
                          data-aos="fade-right"
                          data-aos-delay="50"
                      >
                          <img src={heroImg} alt="Mohamed Ibrahim" />
                      </div>

                      <div className="right">
                          <div
                              className="topic"
                              data-aos="fade-left"
                              data-aos-delay="50"
                          >
                              Full-Stack Developer
                          </div>
                          <p data-aos="fade-down" data-aos-delay="100">
                              I am a detail-oriented Full-Stack Developer
                              dedicated to building scalable, end-to-end web
                              applications. Skilled in crafting dynamic React
                              interfaces and engineering robust Node.js/Express
                              backends with database integration, secure
                              authentication, and RESTful APIs.
                          </p>
                      </div>

                      <div
                          className="button"
                          data-aos="zoom-in-right"
                          data-aos-delay="100"
                      >
                          <button onClick={startDownload} className="btn">
                              View My CV
                          </button>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default About;
