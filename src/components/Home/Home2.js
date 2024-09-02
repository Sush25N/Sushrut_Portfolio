import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dp_pic.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p
              className="home-about-body"
              style={{ fontSize: "1.2em", lineHeight: "1.6" }}
              data-aos="fade-up"
            >
              <br />
              I'm a <i className="primary-header">Front-End Developer</i> with a
              passion for crafting responsive and engaging web and mobile
              applications using <i className="primary-header">React.js</i> and{" "}
              <i className="primary-header">React Native</i>.
              <br />
              <br />
              Skilled in <i className="primary-header">state management</i>,
              <i className="primary-header">performance optimization</i> &
              <i className="primary-header">
                collaborating with UI/UX designers
              </i>
              to create intuitive user interfaces.
              <br />
              <br />
              Always eager to learn and apply new technologies to deliver
              innovative solutions that enhance user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/Sush25N"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sushgabhane456@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sushrut-gabhane-5a3695196/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
