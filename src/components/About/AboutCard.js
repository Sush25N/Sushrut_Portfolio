import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ThemeContext } from "../../Context/theme.jsx"; // Adjust the path as necessary
import "./about.css";

const primarySkills = [
  "React JS",
  "JavaScript",
  "React Native",
  "GIT",
  "GitHub",
  "Redux",
  "Front End Development",
];

const secondarySkills = [
  "ESLint",
  "Babel",
  "Webpack",
  "Material UI",
  "HTML5",
  "CSS3",
];

function AboutCard() {
  const [{ themename }] = useContext(ThemeContext); // Access the theme context

  return (
    <div className={`about-container ${themename}`}>
      {/* Who I Am Section */}
      <Card className={`about-card-view ${themename}`}>
        <Card.Body>
          <blockquote className="blockquote mb-0" data-aos="zoom-in">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I'm{" "}
              <span className="primary-header">Sushrut Gabhane</span> from Pune,
              Maharashtra, India. I'm a passionate Front-End Developer currently
              working in a SaaS-based organization. Here are a few things about
              me:
            </p>
            <ul style={{ textAlign: "justify", marginLeft: "20px" }}>
              <li>
                I specialize in <span className="primary-header">React.js</span>{" "}
                and <span className="primary-header">React Native</span> to
                build
                <span className="primary-header">
                  responsive and engaging web and mobile applications
                </span>
                .
              </li>
              <li>
                My journey in web development began with a curiosity about how
                websites work, which has evolved into a love for
                <span className="primary-header">
                  creating intuitive user experiences
                </span>
                .
              </li>
              <li>
                I enjoy solving complex problems and turning them into{" "}
                <span className="primary-header">
                  simple and elegant solutions
                </span>{" "}
                using modern front-end technologies.
              </li>
              <li>
                <span className="primary-header">Continuous learning</span> is
                important to me. I'm always experimenting with
                <span className="primary-header">
                  new frameworks and tools
                </span>{" "}
                to enhance my development skills.
              </li>
              <li>
                Besides coding, I love{" "}
                <span className="primary-header">
                  collaborating with creative teams
                </span>{" "}
                and sharing knowledge within the developer community.
              </li>
              <li>
                When I'm not coding, you can find me reading about the latest{" "}
                <span className="primary-header">tech trends</span>,
                <span className="primary-header">
                  exploring new technologies
                </span>
                , or enjoying a good book.
              </li>
            </ul>
          </blockquote>
        </Card.Body>
      </Card>

      {/* Skills Section */}
      <div className={`skills-container ${themename}`}>
        <Card className={`skills-card-view ${themename}`}>
          <Card.Body>
            <blockquote className="blockquote mb-0" data-aos="zoom-in">
              <h3>
                <span className="primary-header">Primary</span> Skills
              </h3>
              <div className="skills-list-container">
                {primarySkills.map((skill, index) => (
                  <div key={index} className={`about-skills ${themename}`}>
                    <AiOutlineArrowRight /> {skill}
                  </div>
                ))}
              </div>
              <h3>
                <span className="primary-header">Secondary</span> Skills
              </h3>
              <div className="skills-list-container">
                {secondarySkills.map((skill, index) => (
                  <div key={index} className={`about-skills ${themename}`}>
                    <AiOutlineArrowRight /> {skill}
                  </div>
                ))}
              </div>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AboutCard;
