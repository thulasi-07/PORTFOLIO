// src/components/About.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profilePic from "../assests/profile.jpg"; // Make sure it's in /assets


const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-md-row">
          <Col md={6} className="text-md-start text-center mt-4 mt-md-0">
            <p className="hello">Hello, I'm</p>
            <h1 className="name">Thulasi</h1>
            <h3 className="role">Web Developer</h3>
            <p className="about-description mt-3">
              I'm a passionate Front-End Developer with experience in creating
              responsive and interactive user interfaces. I specialize in React.js
              and enjoy crafting beautiful and functional websites. I'm always
              eager to learn and take on new challenges.
            </p>
            <div className="btns mt-3">
              <Button
                variant="dark"
                className="me-2"
                href="/Thulasi-CV.pdf"
                download
              >
                Download CV
              </Button>
              <Button variant="outline-dark" href="#contact">
                Contact Me
              </Button>
            </div>
            <div className="social-icons mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-3"
              >
                <FaGithub size={28} />
              </a>
            </div>
          </Col>

          <Col md={6} className="text-center">
            <img
              src={profilePic}
              alt="Thulasi"
              className="about-img shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
