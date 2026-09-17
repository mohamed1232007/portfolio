function Footer(){
  return (
    <>
      <footer>
        <div className="text">
          <span>&copy; 2026 Mohamed Ibrahim. All rights reserved.</span>
        </div>
        <div className="footer-icon">
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
          <a href="mailto:mohamedibraim1232007@gmail.com" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;