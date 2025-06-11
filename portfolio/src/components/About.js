// src/components/About.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";
import profilePic from "../assests/profile.jpg"; // Replace with your image path

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">About Me</h2>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src={profilePic}
              alt="Profile"
              className="about-img img-fluid rounded-circle shadow-lg"
            />
          </Col>
          <Col md={6}>
            <Card className="about-card p-4 border-0 shadow-sm">
              <Card.Body>
                <Card.Text className="about-description">
                  Hello! I'm <strong>Your Name</strong>, a passionate Front-End Developer with experience in creating responsive and interactive user interfaces. I specialize in React.js and enjoy crafting beautiful and functional websites. I'm always eager to learn and take on new challenges.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
