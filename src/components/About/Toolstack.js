import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiNetlify,
} from "react-icons/si";

const toolStack = [
  { icon: <SiVisualstudiocode />, tooltip: "Visual Studio Code" },
  { icon: <SiPostman />, tooltip: "Postman" },
  { icon: <SiNetlify />, tooltip: "Netlify" },
  { icon: <SiGithub />, tooltip: "GitHub" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStack.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.tooltip}</Tooltip>}
          >
            <div>{tool.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
