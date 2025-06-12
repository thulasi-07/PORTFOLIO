// src/components/Certifications.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Certifications.css";
import { FaAward } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: "Programming with Javascript",
      issuer: "Coursera",
      date: "Dec 2024",
    //   description: "Completed a 1-month frontend development internship focused on React and UI/UX design.",
      link: "https://www.coursera.org/account/accomplishments/verify/20TXZHR1TSJX"
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Coursera",
      date: "Jul 2024",
    //   description: "Built OPD management features using Vue.js and Laravel during my 3-month internship.",
      link: "https://www.coursera.org/account/accomplishments/verify/LBD9K8VBTWAQ"
    }
    // },
    // {
    //   title: "Responsive Web Design",
    //   issuer: "freeCodeCamp",
    //   date: "2023",
    //   description: "Certified in building responsive websites using HTML, CSS, and Flexbox.",
    //   link: "#"
    // },
    // {
    //   title: "JavaScript Essentials",
    //   issuer: "SoloLearn",
    //   date: "2023",
    //   description: "Learned JS fundamentals including variables, functions, and DOM manipulation.",
    //   link: "#"
    // }
  ];

  return (
    <section id="certifications" className="cert-section">
      <Container>
        <h2 className="text-center section-heading fw-bold">🏅 Certifications</h2>
        <Row className="justify-content-center">
          {certifications.map((cert, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="ribbon-card">
                <div className="ribbon"><FaAward /></div>
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{cert.issuer}</Card.Subtitle>
                  <Card.Text className="text-muted small">{cert.date}</Card.Text>
                  <Card.Text>{cert.description}</Card.Text>
                  <Button
                    variant="dark"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                  >
                    View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;
