import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="xl"
      className="custom-navbar"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="brand-name">Thulasi</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="custom-toggle"
        >
          {expanded ? <FaTimes size={22} /> : <FaBars size={22} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-links" onClick={() => setExpanded(false)}>
            <Link to="about" smooth={true} duration={600} className="nav-link">About</Link>
            <Link to="education" smooth={true} duration={600} className="nav-link">Education</Link>
            <Link to="skills" smooth={true} duration={600} className="nav-link">Skills</Link>
            <Link to="experience" smooth={true} duration={600} className="nav-link">Experience</Link>
            <Link to="projects" smooth={true} duration={600} className="nav-link">Projects</Link>
            {/* <Link to="certifications" smooth={true} duration={600} className="nav-link">Certifications</Link> */}
            <Link to="contact" smooth={true} duration={600} className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
