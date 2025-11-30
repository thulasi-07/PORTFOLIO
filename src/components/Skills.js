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
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 color="#E44D26" />, 
      // desc: 'The backbone of web pages, structuring content and layout for websites.' 
    },
    { name: 'CSS', icon: <FaCss3Alt color="#264de4" />,
      //  desc: 'Used to style and layout web pages, including colors, fonts, and animations.' 
      },
    { name: 'JavaScript', icon: <IoLogoJavascript color="#f7df1e" />,
      //  desc: 'Core programming language for client-side and server-side interactivity.' 
      },
    { name: 'React.js', icon: <FaReact color="#61DBFB" />,
      //  desc: 'A popular frontend library for building dynamic, component-based user interfaces.' 
      },
    { name: 'Vue.js', icon: <FaVuejs color="#42b883" />,
      //  desc: 'Progressive JavaScript framework to create interactive and scalable web apps.' 
      },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" />,
      //  desc: 'A utility-first CSS framework for rapid, responsive, and consistent design.' 
      },
    { name: 'Node.js', icon: <FaNodeJs color="#3c873a" />,
      //  desc: 'JavaScript runtime environment to build backend applications and REST APIs.' 
      },
    { name: 'Express.js', icon: <SiExpress color="#000" />,
      //  desc: 'Lightweight Node.js framework for creating fast and scalable server applications.' 
      },
    { name: 'MongoDB', icon: <SiMongodb color="#4FAA41" />,
      //  desc: 'NoSQL database for storing flexible, document-based data efficiently.' 
      },
    { name: 'MySQL', icon: <SiMysql color="#00758F" />,
      //  desc: 'Relational database for structured data, supporting queries and transactions.' 
      },
    { name: 'Laravel', icon: <FaLaravel color="#fb503b" />,
      //  desc: 'PHP framework for building robust backend systems and APIs with ease.' 
      },
    { name: 'Figma', icon: <FaFigma color="#a259ff" />,
      //  desc: 'Collaborative design tool for UI/UX prototyping and creating mockups.' 
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
