import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import linkedIn from '../assets/linkedin-app-white-icon.png';

const Contact = () => {


  return (
    <Container>
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out using the form below or connect with me on LinkedIn.
      </p>

      <Row>
        <Col md={6}>
          <Form
            name='contact'
            method="POST"
          >
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" name="subject" placeholder="Enter the subject" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" placeholder="Your message" />
            </Form.Group>

            <Button variant="dark" type="submit">
              Send
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h2>Connect with Me</h2>
          <p>
            For professional updates and networking, feel free to connect with me on LinkedIn:
          </p>
            <Button variant="dark"><img className='linkedin-contact' src={linkedIn} alt="LinkedIn" /></Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
4