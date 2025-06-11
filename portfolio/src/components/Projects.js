import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Netflix Clone',
      description: 'Created a UI clone of Netflix using HTML and CSS. Fully responsive layout mimicking the original design.',
      image: 'https://i.imgur.com/1vD3yKn.png',
      link: 'https://your-netflix-clone-link.com',
    },
    {
      title: 'SmartForm Portal',
      description: 'A dynamic platform for lecturers and students to create and submit smart forms with auto-fill features.',
      image: 'https://i.imgur.com/RAiwZGC.png',
      link: 'https://your-smartform-portal.com',
    },
    {
      title: 'Volunteer Network',
      description: 'A full-stack app for managing local volunteer events with features like AI matching and certificate generation.',
      image: 'https://i.imgur.com/jgfogp6.png',
      link: 'https://your-volunteer-network.com',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="projects-title">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="project-card">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    variant="dark"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
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

export default Projects;
