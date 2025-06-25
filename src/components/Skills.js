import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  const skills = [
  { name: 'HTML', icon: '🔤' },
  { name: 'CSS', icon: '🎨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Vue.js', icon: '🖼️' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'Java', icon: '☕' },        
  { name: 'Python', icon: '🐍' },      
  { name: 'Laravel', icon: '🧰' },
  { name: 'Node.js', icon: '🟩' },     
  { name: 'Express.js', icon: '🚂' },  
  { name: 'MongoDB', icon: '🟢' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Figma', icon: '🎨' },
];


  return (
    <section id="skills" className="skills-section uniform-section py-5">
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
