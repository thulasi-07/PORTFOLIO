import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';
import petAdoptionImg from '../assests/petAdoptionImg.jpg';
import netflixImg from '../assests/netflixImg.jpeg';
import questionPaperImg from '../assests/questionPaperImg.png';
import todoListImg from '../assests/todoListImg.jpeg';



const Projects = () => {
  const projects = [
    {
      title: 'A WEB APPLICATION FOR PET ADOPTION',
      description: 'Empower pet lovers! Our comprehensive pet adoption website, built with HTML, CSS, JS, PHP, and MySQL, connects users with their perfect furry companions. Git repo for seamless collaboration.',
      image: petAdoptionImg,
      link: 'http://github.com/thulasi-07/petadoption',
    },
    {
      title: 'NETFLIX FRONT-END CLONE',
      description: 'This project is a replica of the Netflix landing page, created using HTML and CSS to practice front-end development skills. It features a responsive design with a fixed navigation bar, a visually appealing hero section, various content sections showcasing movies and TV shows, and a comprehensive footer.',
      image: netflixImg,
      link: 'http://github.com/thulasi-07/Netflix-clone',
    },
    {
      title: 'QUESTION PAPER GENERATION SYSTEM',
      description: 'A full-stack app for managing local volunteer events with features like AI matching and certificate generation.',
      image: questionPaperImg,
      link: 'https://github.com/thulasi-07/hackthonSjec',
    },
    {
      title: 'ToDo - List',
      description: 'A simple and interactive to-do list application that helps users manage tasks efficiently. Users can add, edit, delete, and mark tasks as complete. Built with a clean UI for a seamless experience, this project is perfect for learning the basics of web development and task management functionality.',
      image: todoListImg,
      link: 'https://github.com/thulasi-07/ToDoList',
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="projects-title text-center fw-bold mb-5 display-6">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4} className="mb-4 d-flex">
              <Card className="project-card flex-fill d-flex flex-column">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{project.description}</Card.Text>
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
