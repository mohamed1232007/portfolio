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
              <p
                data-aos="fade-down"
                data-aos-delay="100"
              >
                I'm an MIS student in Cairo who fell in love with building
                things for the web. What started with small personal projects
                turned into real products — chat platforms, admin dashboards,
                e-commerce stores — each one teaching me something new about
                writing code that's secure, easy to maintain, and actually
                enjoyable to use.
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
