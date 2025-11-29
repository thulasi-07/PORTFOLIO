import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';
import petAdoptionImg from '../assests/petAdoptionImg.jpg';
import netflixImg from '../assests/netflixImg.jpeg';
import questionPaperImg from '../assests/questionPaperImg.png';
import todoListImg from '../assests/todoListImg.jpeg';
import thesmartlocalvolunteerNetworkImg from '../assests/thesmartlocalvolunteerNetworkImg.jpeg';



const Projects = () => {
  const projects = [
    {
      title: 'NETFLIX FRONT-END CLONE',
      description: 'This project is a replica of the Netflix landing page, created using HTML and CSS to practice front-end development skills. It features a responsive design with a fixed navigation bar, a visually appealing hero section, various content sections showcasing movies and TV shows, and a comprehensive footer.',
      image: netflixImg,
      link: 'http://github.com/thulasi-07/Netflix-clone',
    },
    {
      title: 'ToDo - LIST',
      description: 'A simple and interactive to-do list application that helps users manage tasks efficiently. Users can add, edit, delete, and mark tasks as complete. Built with a clean UI for a seamless experience, this project is perfect for learning the basics of web development and task management functionality.',
      image: todoListImg,
      link: 'https://github.com/thulasi-07/ToDoList',
    },
    {
      title: 'A WEB APPLICATION FOR PET ADOPTION',
      description: 'Empower pet lovers! Our comprehensive pet adoption website, built with HTML, CSS, JS, PHP, and MySQL, connects users with their perfect furry companions. Git repo for seamless collaboration.',
      image: petAdoptionImg,
      link: 'http://github.com/thulasi-07/petadoption',
    },
    {
      title: 'QUESTION PAPER GENERATION SYSTEM',
      description: 'This is a full-stack Question Paper Generation System built using the MERN stack. It allows administrators or faculty members to easily create, manage, and generate question papers based on selected subjects, topics, and difficulty levels. The system ensures a streamlined, error-free, and dynamic way to prepare question papers while storing data securely in MongoDB.',
      image: questionPaperImg,
      link: 'https://github.com/thulasi-07/hackthonSjec',
    },
    {
      title: 'THE SMART LOCAL VOLUNTEER NETWORK',
      description: 'The Smart Local Volunteer Network connects volunteers with local community projects, helping them find opportunities based on skills and interests, while enabling organizations to easily recruit volunteers.',
      image: thesmartlocalvolunteerNetworkImg,
      link: 'https://github.com/thulasi-07/TheSmartLocalVolunteerNetwork',
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="projects-title text-center fw-bold mb-5 display-6">Projects
          <p className="text-secondary" style={{ fontSize: "1rem", marginTop: "6px", color: "#555", fontWeight: "400" }}>
            My web development projects.
          </p>
        </h2>
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
