import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="contact-title">📬 Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="contact-info-box">
              <FaEnvelope className="contact-icon" />
              <p>thulasipanndeshwara02@gmail.com</p>
            </div>
            <div className="contact-info-box">
              <FaPhoneAlt className="contact-icon" />
              <p>+91 9482645666</p>
            </div>
            <div className="contact-info-box">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Mangalore, Karnataka</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
