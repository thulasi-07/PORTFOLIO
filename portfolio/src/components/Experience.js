import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Vinyasa Tech Solutions',
      duration: '1 Month (React)',
      description: 'Worked on real-time projects and enhanced frontend development skills.',
    },
    {
      title: 'Web Developer Intern',
      company: 'CodSoft',
      duration: '1 Month (UI/UX & Web)',
      description: 'Created responsive websites and practiced modern UI/UX design.',
    },
    {
      title: 'Vue & Laravel Intern',
      company: 'Intologic Software Pvt. Ltd.',
      duration: '3 Months',
      description: 'Currently working on full-stack development using Vue.js and Laravel.',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="experience-title">Experience</h2>
        <Row className="justify-content-center">
          {experiences.map((exp, idx) => (
            <Col md={6} lg={4} className="mb-4" key={idx}>
              <Card className="experience-card">
                <Card.Body>
                  <Card.Title className="experience-role">{exp.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted experience-company">
                    {exp.company}
                  </Card.Subtitle>
                  <Card.Text className="experience-duration">{exp.duration}</Card.Text>
                  <Card.Text className="experience-desc">{exp.description}</Card.Text>
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
