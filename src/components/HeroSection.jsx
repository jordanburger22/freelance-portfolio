import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import bannerImg from '../assets/portfolio-banner.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="fs-2 fs-md-1">Full Stack Developer & Problem Solver</h1>
            <p className="fs-4 fs-md-3">
              Bringing innovative solutions to web development challenges
            </p>
            <p className="fs-5 fs-md-4">
              I’m a full stack web developer with a passion for backend
              development, experienced in building impactful technology and
              mentoring new developers. Let’s create something amazing together.
            </p>
            <Button variant="dark" onClick={() => navigate('/services')}>
              See What I Can Offer
            </Button>
          </Col>
          <Col md={6}>
            <img src={bannerImg} alt="Your Name" className="img-fluid banner-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
