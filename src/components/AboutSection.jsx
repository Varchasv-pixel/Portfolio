import { Briefcase, Code, User } from "lucide-react";
import "./About.css";

export const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">
          About <span className="highlight">Me</span>
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <h3 className="about-subtitle">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="about-paragraph">
              With over 2 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>
            <p className="about-paragraph">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
            <div className="about-buttons">
              <a href="#contact" className="button cosmic-button">
                Get In Touch
              </a>
              
            </div>
          </div>

          <div className="about-cards">
            <div className="card gradient-border card-hover">
              <div className="card-content">
                <div className="icon-bg">
                  <Code className="icon" />
                </div>
                <div className="card-text">
                  <h4 className="card-title">Web Development</h4>
                  <p className="card-description">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="card gradient-border card-hover">
              <div className="card-content">
                <div className="icon-bg">
                  <User className="icon" />
                </div>
                <div className="card-text">
                  <h4 className="card-title">UI/UX Design</h4>
                  <p className="card-description">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="card gradient-border card-hover">
              <div className="card-content">
                <div className="icon-bg">
                  <Briefcase className="icon" />
                </div>
                <div className="card-text">
                  <h4 className="card-title">Project Management</h4>
                  <p className="card-description">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
