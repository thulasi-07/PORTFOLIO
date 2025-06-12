// src/components/Education.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "St. Joseph Engineering College, Mangaluru",
      year: "2023 – 2025",
      details: "8.05"
    },
    {
      degree: "Bachelor of Science (BSc)",
      institution: "Canara College, Mangaluru",
      year: "2020 – 2023",
      details: "7.48"
    },
    {
      degree: "PUC (Science - PCMB)",
      institution: "Jain Pre-University College, Moodbidri",
      year: "2018 – 2020",
      details: "74%"
    },
    {
      degree: "SSLC",
      institution: "Jain High School, Moodbidri",
      year: "2016 – 2018",
      details: "89.28%"
    }
  ];

  return (
    <section id="education" className="education-section py-5">
      <Container>
        <h2 className="text-center section-heading fw-bold">🎓 Education</h2>
        <Row className="justify-content-center">
          {educationList.map((edu, index) => (
            <Col key={index} md={6} lg={4} className="mb-4 d-flex">
              <Card className="edu-card w-100">
                <div className="edu-icon">
                  <FaGraduationCap />
                </div>
                <Card.Body>
                  <Card.Title>{edu.degree}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{edu.institution}</Card.Subtitle>
                  <Card.Text className="text-muted small">{edu.year}</Card.Text>
                  <Card.Text>{edu.details}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
