import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaLaravel,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiExpress } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 color="#E44D26" />, 
    },
    { name: 'CSS', icon: <FaCss3Alt color="#264de4" />,
      },
    { name: 'JavaScript', icon: <IoLogoJavascript color="#f7df1e" />,
      },
      { 
        name: 'TypeScript', 
        icon: <SiTypescript color="#3178c6" /> 
      },
    { name: 'React.js', icon: <FaReact color="#61DBFB" />,
      },
    { name: 'Vue.js', icon: <FaVuejs color="#42b883" />,
      },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" />,
      },
    { name: 'Node.js', icon: <FaNodeJs color="#3c873a" />,
      },
    { name: 'Express.js', icon: <SiExpress color="#000" />,
      },
    { name: 'MongoDB', icon: <SiMongodb color="#4FAA41" />,
      },
    { name: 'MySQL', icon: <SiMysql color="#00758F" />,
      },
    { name: 'Laravel', icon: <FaLaravel color="#fb503b" />,
      },
    { name: 'Figma', icon: <FaFigma color="#a259ff" />,
      },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <h2 className="skills-title">
          Skills
          <p className="text-secondary" style={{ fontSize: "1rem", marginTop: "6px", fontWeight: "400" }}>
            Technologies and tools I work with.
          </p>
        </h2>

        <Row>
          {skills.map((skill, index) => (
            <Col key={index} xs={6} md={3} className="mb-4">
              <Card className="skill-card text-center">
                <div className="skill-icon">{skill.icon}</div>

                <Card.Body>
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
