import React from 'react';
import heroImg from '../assets/images/office2.jpg';
import { Button, Col, Container, Row } from 'react-bootstrap';

function Hero() {
  return (
    <section
      className="d-flex align-items-center position-relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(224, 204, 182, 0.93)
,  rgba(245, 243, 239, 0)), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        color: 'rgba(36, 22, 8, 0.85)',
      }}
    >


      {/* Hero Content */}

      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-5 fw-bold mb-3">Manu Philip & Company</h1>
            <p className="lead mb-4">
              Trusted Chartered Accountants for your business growth and compliance.
            </p>
            <a
              href="#contact"
              className="btn btn-success btn-lg custom-contact-btn"
              style={{
                backgroundColor: '#3A5A40',
                borderColor: '#3A5A40',
                color: '#ffffff',
                padding: '12px 28px',
                fontSize: '1.1rem',
                fontWeight: '500',
                borderRadius: '8px',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(58, 90, 64, 0.3)',
                display: 'inline-block',
                textDecoration: 'none',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#588157';
                e.target.style.borderColor = '#588157';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#3A5A40';
                e.target.style.borderColor = '#3A5A40';
              }}
            >
              Contact Us
            </a>



          </Col>


        </Row>
      </Container>

    </section>
  );
}

export default Hero;
