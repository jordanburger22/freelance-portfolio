import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ServiceModal from '../components/ServiceModal';
import { useNavigate } from 'react-router-dom';

import {
  developmentContent,
  backendContent,
  frontendContent,
  mentorshipContent,
  workshopsContent
} from '../content/serviceContent.jsx'; // Adjust the import path as necessary

const Services = () => {

    const navigate = useNavigate();

  return (
    <Container>
      {/* Intro Section */}
      <section className="my-5 text-center">
        <h2 className="fs-2 fs-md-1">What I Can Offer</h2>
        <p className="fs-5 fs-md-4">
          I specialize in building scalable, efficient web applications and delivering high-quality code. 
          Let's work together to bring your vision to life.
        </p>
      </section>

      {/* Development Services */}
      <section className="my-5">
        <h3 className="text-center fs-4 fs-md-3">Development Services</h3>
        <Row className="g-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title className="fs-5 fs-md-4">Full Stack Web Development</Card.Title>
                <ServiceModal 
                  title="Full Stack Web Development" 
                  content={developmentContent}
                  buttonText="Learn More" 
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title className="fs-5 fs-md-4">Backend Development</Card.Title>
                <ServiceModal 
                  title="Backend Development" 
                  content={backendContent}
                  buttonText="Learn More" 
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title className="fs-5 fs-md-4">Frontend Development</Card.Title>
                <ServiceModal 
                  title="Frontend Development" 
                  content={frontendContent}
                  buttonText="Learn More" 
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Teaching & Mentoring */}
      <section className="my-5">
        <h3 className="text-center fs-4 fs-md-3">Teaching & Mentoring</h3>
        <Row className="g-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="fs-5 fs-md-4">Mentorship</Card.Title>
                <ServiceModal 
                  title="Mentorship" 
                  content={mentorshipContent}
                  buttonText="Learn More" 
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="fs-5 fs-md-4">Workshops</Card.Title>
                <ServiceModal 
                  title="Workshops" 
                  content={workshopsContent}
                  buttonText="Learn More" 
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Call to Action */}
      <section className="my-5 text-center">
        <h3 className="fs-4 fs-md-3">Let's Work Together</h3>
        <p className="fs-5 fs-md-4">
          Ready to take your project to the next level?{" "}
          <span className='contact-link' onClick={() => navigate('/contact')}>Contact me today</span> to discuss how I can help you achieve your goals.
        </p>
      </section>
    </Container>
  );
};

export default Services;
