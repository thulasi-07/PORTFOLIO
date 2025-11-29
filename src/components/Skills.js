import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '🔤', desc: 'The backbone of web pages, structuring content and layout for websites.' },
    { name: 'CSS', icon: '🎨', desc: 'Used to style and layout web pages, including colors, fonts, and animations.' },
    { name: 'React.js', icon: '⚛️', desc: 'A popular frontend library for building dynamic, component-based user interfaces.' },
    { name: 'Vue.js', icon: '🖼️', desc: 'Progressive JavaScript framework to create interactive and scalable web apps.' },
    { name: 'Tailwind CSS', icon: '💨', desc: 'A utility-first CSS framework for rapid, responsive, and consistent design.' },
    { name: 'JavaScript', icon: '📜', desc: 'Core programming language for client-side and server-side interactivity.' },
    { name: 'Laravel', icon: '🧰', desc: 'PHP framework for building robust backend systems and APIs with ease.' },
    { name: 'Express.js', icon: '🚂', desc: 'Fast, minimal framework for building Node.js servers and APIs.' },
    { name: 'Node.js', icon: '🟩', desc: 'JavaScript runtime environment to build backend applications and REST APIs.' },
    { name: 'MongoDB', icon: '🟢', desc: 'NoSQL database for storing flexible, document-based data efficiently.' },
    { name: 'MySQL', icon: '🗄️', desc: 'Relational database for structured data, supporting queries and transactions.' },
    { name: 'Figma', icon: '🎨', desc: 'Collaborative design tool for UI/UX prototyping and creating mockups.' },
  ];

  return (
    <section id="skills" className="skills-section uniform-section py-5">
      <Container>
        <h2 className="skills-title">Skills
          <p className="text-secondary" style={{ fontSize: "1rem", marginTop: "6px", color: "#555", fontWeight: "400" }}>
            Technologies and tools I work with.
          </p>
        </h2>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} xs={6} md={3} className="mb-4">
              <Card className="skill-card text-center">
                <Card.Body>
                  <div className="skill-icon">{skill.icon}</div>
                  <Card.Title>{skill.name}</Card.Title>
                  <Card.Text>{skill.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
