// src/components/About.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profilePic from "../assests/profile.jpg"; // Ensure correct path


const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        {/* Section Title */}
        <h2 className="section-title text-center fw-bold mb-6 display-6">About</h2>



        <Row className="align-items-center">
          {/* Left Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src={profilePic}
              alt="Thulasi"
              className="img-fluid rounded"
              style={{
                maxWidth: "300px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
              }}
            />
          </Col>

          {/* Right Content */}
          <Col md={6} className="text-md-start text-center">
            <p className="text-muted">Hello, I'm</p>
            <h1 className="fw-bold">Thulasi</h1>
            <h3 className="text-secondary">Web Developer</h3>
            {/* <p className="mt-3">
              I'm a passionate Front-End Developer skilled in React.js, Vue.js, and Laravel. I love building clean, responsive, and interactive user interfaces. Always eager to learn and grow through real-world projects.
            </p> */}
            <div className="d-flex justify-content-md-start justify-content-center gap-3 mt-3">
              <Button variant="dark" href="/Thulasi-CV.pdf" download>
                Download CV
              </Button>
              <Button variant="outline-dark" href="#contact">
                Contact Me
              </Button>
            </div>
            <div className="d-flex justify-content-md-start justify-content-center gap-4 mt-4">
              <a href="https://www.linkedin.com/in/thulasi666" target="_blank" rel="noreferrer">
                <FaLinkedin size={28} />
              </a>
              <a href="https://github.com/thulasi-07" target="_blank" rel="noreferrer">
                <FaGithub size={28} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
