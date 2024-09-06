import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import linkedIn from '../assets/linkedin-app-white-icon.png';

const Contact = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      alert("There was an error sending your message.");
    }
  };

  return (
    <Container>
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out using the form below or connect with me on LinkedIn.
      </p>

      <Row>
        <Col md={6}>
          {/* Hidden HTML Form for Netlify */}
          <form
            data-netlify="true"
            name="contact"
            method="POST"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message"></textarea>
          </form>

          {/* Visible React Form */}
          <Form
            onSubmit={handleSubmit}
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