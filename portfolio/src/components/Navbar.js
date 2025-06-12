import React from 'react';
import { Link } from 'react-scroll';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar expand="xl" className="custom-navbar" fixed="top">
      <Container>
        <Navbar.Brand className="brand-name">Thulasi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-links">
            <Link to="about" smooth={true} duration={600} className="nav-link">About</Link>
            <Link to="education" smooth={true} duration={600} className="nav-link">Education</Link>
            <Link to="skills" smooth={true} duration={600} className="nav-link">Skills</Link>
            <Link to="experience" smooth={true} duration={600} className="nav-link">Experience</Link>
            <Link to="projects" smooth={true} duration={600} className="nav-link">Projects</Link>
            <Link to="certifications" smooth={true} duration={600} className="nav-link">Certifications</Link>
            <Link to="contact" smooth={true} duration={600} className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
