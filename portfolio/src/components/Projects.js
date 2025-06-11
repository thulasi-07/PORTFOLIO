import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'A WEB APPLICATION FOR PET ADOPTION',
      description: 'Empower pet lovers! Our comprehensive pet adoption website, built with HTML, CSS, JS, PHP, and MySQL, connects users with their perfect furry companions. Git repo for seamless collaboration.',
      image: 'https://i.imgur.com/1vD3yKn.png',
      link: 'http://github.com/thulasi-07/petadoption',
    },
    {
      title: 'NETFLIX FRONT-END CLONE',
      description: 'This project is a replica of the Netflix landing page, created using HTML and CSS to practice front-end development skills. It features a responsive design with a fixed navigation bar, a visually appealing hero section, various content sections showcasing movies and TV shows, and a comprehensive footer.',
      image: 'https://i.imgur.com/RAiwZGC.png',
      link: 'http://github.com/thulasi-07/Netflix-clone',
    },
    {
      title: 'QUESTION PAPER GENERATION SYSTEM',
      description: 'A full-stack app for managing local volunteer events with features like AI matching and certificate generation.',
      image: 'https://i.imgur.com/jgfogp6.png',
      link: 'https://github.com/thulasi-07/hackthonSjec',
    },
    {
      title: 'ToDo - List',
      description: 'A simple and interactive to-do list application that helps users manage tasks efficiently. Users can add, edit, delete, and mark tasks as complete. Built with a clean UI for a seamless experience, this project is perfect for learning the basics of web development and task management functionality.',
      image: 'https://i.imgur.com/jgfogp6.png',
      link: 'https://github.com/thulasi-07/ToDoList',
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
                    GitHub
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
