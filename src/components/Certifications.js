

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCertificate } from "react-icons/fa";
import "./Certifications.css";


const Certifications = () => {
  const certifications = [
    {
      title:"Programming with Javascript",
      issuer: "Coursera",
      date: "Dec 2024",
      // description: "Completed a 1-month frontend development internship focused on React and UI/UX design.",
      link: "https://www.coursera.org/account/accomplishments/verify/20TXZHR1TSJX"
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Coursera",
      date: "Jul 2024",
      // description: "Built OPD management features using Vue.js and Laravel during my 3-month internship.",
      link: "https://www.coursera.org/account/accomplishments/verify/LBD9K8VBTWAQ"
    },
    {
      title: "Frontend Developer Intern",
      issuer: "Vinyasa Tech Solutions",
      year: "Dec 2024",
      // description: "Vue.js & Laravel-based web application development during a 3-month program.",
      link: "/Internship Certificate.pdf"
    }
  ];

  return (
    <section id="certifications" className="certifications-section uniform-section py-5">
      <Container>
        <h2 className="section-heading fw-bold">Certifications</h2>
        <Row className="justify-content-center">
          {certifications.map((cert, index) => (
            <Col key={index} md={6} lg={4} className="mb-4 d-flex">
              <Card className="cert-card w-100">
                <div className="cert-icon">
                  <FaCertificate />
                </div>
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{cert.issuer}</Card.Subtitle>
                  <Card.Text className="text-muted small">{cert.year}</Card.Text>
                  <Card.Text>{cert.description}</Card.Text>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
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
