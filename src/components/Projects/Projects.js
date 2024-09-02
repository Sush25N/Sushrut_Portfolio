import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import Dashboard from "../../Assets/Projects/Dashboard_1.png";
import Portfolio from "../../Assets/Projects/Sushrut_portfolio.png";
import Shopping_Karo from "../../Assets/Projects/Shopping_Karo.png";
import Weather_App from "../../Assets/Projects/Weather_App.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Shopping_Karo}
              title="Shopping_Karo"
              description={
                <ul>
                  <li>
                    Developed a full-fledged e-commerce platform with user
                    authentication, product management, shopping cart, and
                    payment integration using Stripe.
                  </li>
                  <li>
                    Implemented complex state management using Redux to handle
                    user sessions, cart updates, and product filtering, ensuring
                    smooth user experience.
                  </li>
                </ul>
              }
              ghLink="https://github.com/Sush25N/E_Com_App"
              demoLink="https://ornate-queijadas-657bdb.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Sushrut Portfolio"
              description={
                <ul>
                  <li>
                    Developed a responsive personal portfolio website showcasing
                    projects, skills, and contact information, featuring smooth
                    animations & supports both dark and light mode.
                  </li>
                  <li>
                    Deployed using Netlify, ensuring fast loading times and
                    seamless navigation across devices.
                  </li>
                </ul>
              }
              ghLink="https://github.com/Sush25N/Sushrut_Portfolio"
              demoLink="https://sushrut-gabhane-portfolio.netlify.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              title="Performance Monitoring Dashboard"
              description={
                <ul>
                  <li>
                    This dashboard is typically used for managing and monitoring
                    business operations, especially for a restaurant,
                    e-commerce, or delivery service.
                  </li>
                  <li>
                    It allows stakeholders to track key metrics, visualize data
                    trends, and gain insights into business performance,
                    customer behavior, and financial health.
                  </li>
                </ul>
              }
              ghLink="https://github.com/Sush25N/Dashbpoard_1"
              demoLink="https://magical-kheer-981778.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Weather_App}
              title="Weather App"
              description={
                <ul>
                  <li>
                    Built a weather application that provides current weather
                    conditions, weekly forecasts, and location-based weather
                    updates using OpenWeather API.
                  </li>
                  <li>
                    Implemented responsive design with Bootstrap, ensuring
                    compatibility and usability across all devices.
                  </li>
                </ul>
              }
              ghLink="https://github.com/Sush25N/Weather_Application"
              // demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
