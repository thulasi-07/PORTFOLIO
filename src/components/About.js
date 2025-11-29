import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profilePic from "../assests/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section uniform-section py-5">
      <style>
        {`
          @keyframes cleanReveal {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .clean-appear {
            animation: cleanReveal 1s ease forwards;
          }
        `}
      </style>

      <Container className="clean-appear">
        <h2 className="text-center fw-bold mb-5 display-6">
          About
          <p className="text-secondary" style={{ fontSize: "1rem", marginTop: "6px", color: "#555", fontWeight: "400" }}>
            Know a bit about me and my journey.
          </p>
        </h2>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0 clean-appear">
            <img
              src={profilePic}
              alt="Thulasi"
              className="img-fluid rounded"
              style={{
                maxWidth: "300px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            />
          </Col>

          <Col md={6} className="text-md-start text-center clean-appear">
            <p className="text-muted">Hello, I'm</p>
            <h1 className="fw-bold">Thulasi</h1>
            <h3 className="text-secondary">Software Engineer</h3>

            <div className="d-flex justify-content-md-start justify-content-center gap-3 mt-3">
              <Button variant="outline-dark" href="#contact">
                Contact Me
              </Button>
              <a
                href={`${process.env.PUBLIC_URL}/Thulasi-CV.pdf`}
                download
                className="btn"
                variant="outline-dark"
              >
                Download CV
              </a>
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
