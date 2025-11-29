import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Vinyasa Tech Solutions',
      duration: '1 Month',
      description:
        'During my one-month internship (Oct 28 – Nov 28, 2024) at Vinyasa Tech Solutions, I focused on front-end development using React. I gained hands-on experience in building responsive UIs and understanding the full web development lifecycle. As part of a team, I worked on recreating the Myntra homepage UI using HTML, CSS, and Tailwind CSS. Additionally, I developed a To-Do List App independently in React and Tailwind CSS, strengthening my skills in component-based architecture, state management, and clean UI design.',
    },
    {
      title: 'Web Developer Intern',
      company: 'Intellogic Software Pvt. Ltd.',
      duration: '3 Months',
      description:
        'During my three-month internship (May - July, 2025) at Intellogic Software Pvt. Ltd., which began with a one-month intensive training program in Vue.js and Laravel. Following the training, I contributed to the development of various submodules in a live healthcare project — the OPD Management System. My work involved implementing real-time features, improving user interfaces, and collaborating closely with the development team to deliver production-level functionalities. This experience enhanced my full-stack development skills and gave me practical exposure to building scalable web applications in a professional environment, as I had the opportunity to work on a live project.',
    },
    {
      title: 'Software Engineer Trainee',
      company: 'Inbytes Smart Solutions Private Limited',
      duration: '1 Month',
      description:
        'Completed an intensive training program from October to November focused on full-stack web development using Vue.js for the frontend and Laravel for the backend. The training involved working on a live project, which provided hands-on experience in real-world development scenarios.',
    },
    {
      title: 'Software Engineer',
      company: 'Inbytes Smart Solutions Private Limited',
      duration: 'November 2025 – Present',
      location: '(On-Site / City, India)',
      description:
        'Currently working as a Software Engineer, contributing to the development of scalable and user-focused web applications. Focused on writing clean, efficient code and collaborating with the team to deliver high-quality digital solutions.',
    },
      ];


  return (
    <section id="experience" className="experience-section py-5">
      <Container>
        <h2 className="experience-title text-center fw-bold mb-5 display-6">Experience
          <p className="text-secondary" style={{ fontSize: "1rem", marginTop: "6px", color: "#555", fontWeight: "400" }}>
            Internships and work experiences.
          </p>
        </h2>
       <Row className="justify-content-center">
          {experiences.map((exp, idx) => (
            <Col md={12} className="mb-4" key={idx}>
              <Card className="experience-card-horizontal shadow-sm">
                <div className="exp-emoji-box">
                  {idx === 0 && "💻"}
                  {idx === 1 && "🌐"}
                  {idx === 2 && "🚀"}
                  {idx === 3 && "🧩"}
                </div>

                <Card.Body>
                  <Card.Title className="experience-role fw-bold">{exp.title}</Card.Title>

                  <Card.Subtitle className="mb-1 text-muted experience-company">
                    {exp.company}
                  </Card.Subtitle>

                  <Card.Text className="experience-duration text-muted">
                    {exp.duration}
                  </Card.Text>

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
