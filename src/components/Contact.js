// src/components/Contact.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section uniform-section py-5">
      <Container>
        <h2 className="text-center section-heading fw-bold mb-5">Contact</h2>
        <Row className="justify-content-center">
          <Col md={8} className="mb-4">
            <div className="contact-info-box">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h5>Email</h5>
              <p>thulasipanndeshwara02@gmail.com</p>
            </div>
          </Col>
          <Col md={8} className="mb-4">
            <div className="contact-info-box">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <h5>Phone</h5>
              <p>+91 9482645666</p>
            </div>
          </Col>
          <Col md={8} className="mb-4">
            <div className="contact-info-box">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h5>Location</h5>
              <p>Mangaluru, Karnataka, India</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
