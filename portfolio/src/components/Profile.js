import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// Optional custom styling
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Profile() {
  return (
    <section id="profile" className="py-5">
      <Container className="text-center mt-5 pt-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="/profile-pic.png"
              alt="Thulasi"
              className="img-fluid rounded-circle"
              style={{ width: '50px', height: '50px',  }}
            />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <p className="text-muted">Hello, I'm</p>
            <h1 className="display-4">Thulasi</h1>
            <h3 className="text-primary mb-4">Web Developer</h3>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <Button variant="dark" href="/Thulasi_CV.pdf" download>
                Download CV
              </Button>
              <Button variant="outline-primary" href="#contact">
                Contact Me
              </Button>
            </div>
            <div className="d-flex justify-content-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub size={30} />
              </a>
              <a href="mailto:youremail@example.com">
                <FaEnvelope size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Profile;
