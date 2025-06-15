import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Vinyasa Tech Solutions',
      duration: '1 Month (React)',
      description:
        'During my one-month internship (Oct 28 – Nov 28, 2024) at Vinyasa Tech Solutions, I focused on front-end development using React. I gained hands-on experience in building responsive UIs and understanding the full web development lifecycle. As part of a team, I worked on recreating the Myntra homepage UI using HTML, CSS, and Tailwind CSS. Additionally, I developed a To-Do List App independently in React and Tailwind CSS, strengthening my skills in component-based architecture, state management, and clean UI design.',
    },
    {
      title: 'Web Developer Intern',
      company: 'Intellogic Software Pvt. Ltd.',
      duration: '3 Months',
      description:
        'As part of my internship, I contributed to the development of the Patient Module in the OPD Management System. My work involved both frontend and backend development using Vue.js and Laravel.',
    },
  ];

  return (
    <section id="experience" className="experience-section py-5">
      <Container>
        <h2 className="experience-title text-center fw-bold mb-5 display-6">Experience</h2>
        <Row className="justify-content-center">
          {experiences.map((exp, idx) => (
            <Col md={6} lg={4} className="mb-4 d-flex" key={idx}>
              <Card className="experience-card flex-fill shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="experience-role fw-bold">{exp.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted experience-company">
                    {exp.company}
                  </Card.Subtitle>
                  <Card.Text className="experience-duration text-muted">{exp.duration}</Card.Text>
                  <Card.Text className="experience-desc flex-grow-1">{exp.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
