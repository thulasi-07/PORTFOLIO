import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  const skills = [
  { name: 'HTML', icon: '🔤' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Vue.js', icon: '🖼️' },
  { name: 'Laravel', icon: '🧰' },
  { name: 'Figma', icon: '🎨' },
  { name: 'MySQL', icon: '🗄️' },
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="skills-title">Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} xs={6} md={3} className="mb-4">
              <Card className="skill-card text-center">
                <Card.Body>
                  <div className="skill-icon">{skill.icon}</div>
                  <Card.Title>{skill.name}</Card.Title>
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
