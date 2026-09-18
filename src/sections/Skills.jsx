function Skills() {
  return (
      <section className="Skills" id="skills">
          <div className="title" data-aos="fade-up">
              <span>My Skills</span>
          </div>

          <div
              className="skills-details"
              data-aos="fade-left"
              data-aos-delay="50"
          >
              <div className="text">
                  <h3 className="topic">Tech Stack & Engineering Tools</h3>
                  <p>
                      I specialize in building full-stack web applications,
                      combining interactive React frontends with scalable
                      Node.js/Express backends, relational and NoSQL databases,
                      and secure authentication systems.
                  </p>

                  <div className="experience">
                      <div className="num">
                          <i className="fas fa-layer-group"></i>
                      </div>
                      <div className="exp">
                          Full-Cycle Web
                          <br />
                          <span>Development</span>
                      </div>
                  </div>
              </div>

              <div
                  className="skill-boxes"
                  data-aos="fade-up"
                  data-aos-delay="100"
              >
                  <div className="boxes">
                      <i className="fab fa-react"></i>
                      <div className="box-info">
                          <span className="topic">React.js</span>
                          <span className="level">Frontend Framework</span>
                      </div>
                  </div>

                  <div className="boxes">
                      <i className="fab fa-node-js"></i>
                      <div className="box-info">
                          <span className="topic">Node.js & Express</span>
                          <span className="level">Backend & REST APIs</span>
                      </div>
                  </div>

                  <div className="boxes">
                      <svg
                          className="nextjs-icon"
                          viewBox="0 0 180 180"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                      >
                          <mask
                              id="nextjs-mask"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="180"
                              height="180"
                              style={{ maskType: "alpha" }}
                          >
                              <circle
                                  cx="90"
                                  cy="90"
                                  r="90"
                                  fill="currentColor"
                              />
                          </mask>
                          <g mask="url(#nextjs-mask)">
                              <circle
                                  cx="90"
                                  cy="90"
                                  r="90"
                                  fill="transparent"
                                  stroke="currentColor"
                                  strokeWidth="10"
                              />
                              <path
                                  d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 0 0 9.509-7.325Z"
                                  fill="currentColor"
                              />
                              <rect
                                  x="115"
                                  y="54"
                                  width="12"
                                  height="72"
                                  fill="currentColor"
                              />
                          </g>
                      </svg>
                      <div className="box-info">
                          <span className="topic">Next.js</span>
                          <span className="level">SSR & Full-Stack React</span>
                      </div>
                  </div>

                  <div className="boxes">
                      <i className="fab fa-js-square"></i>
                      <div className="box-info">
                          <span className="topic">JavaScript / TypeScript</span>
                          <span className="level">ES6+ / Async</span>
                      </div>
                  </div>

                  <div className="boxes">
                      <i className="fas fa-database"></i>
                      <div className="box-info">
                          <span className="topic">MySQL & MongoDB</span>
                          <span className="level">Database Management</span>
                      </div>
                  </div>

                  <div className="boxes">
                      <i className="fas fa-shield-alt"></i>
                      <div className="box-info">
                          <span className="topic">JWT & Bcrypt</span>
                          <span className="level">
                              Authentication & Security
                          </span>
                      </div>
                  </div>

                  <div className="boxes">
                      <i className="fab fa-git-alt"></i>
                      <div className="box-info">
                          <span className="topic">Git & GitHub</span>
                          <span className="level">Version Control</span>
                      </div>
                  </div>

                  <div className="boxes">
                      <svg
                          className="tailwind-icon"
                          viewBox="0 0 54 33"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                      >
                          <path
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2Z"
                          />
                      </svg>
                      <div className="box-info">
                          <span className="topic">Tailwind CSS</span>
                          <span className="level">Utility-First Styling</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Skills;
