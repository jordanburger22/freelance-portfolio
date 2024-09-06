import React, { useState, useRef } from 'react';
import { Container, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import linkedIn from '../assets/linkedin-app-white-icon.png';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    setIsSubmitting(true);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setShowModal(true);
      if (formRef.current) {
        formRef.current.reset(); // Reset form fields
      }
    } catch (error) {
      alert("There was an error submitting the form.");
      console.log(error)
    } finally {
      setIsSubmitting(false);
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
          <Form
            ref={formRef} // Add ref here
            name="contact"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />

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

            <Button variant="dark" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h2>Connect with Me</h2>
          <p>
            For professional updates and networking, feel free to connect with me on LinkedIn:
          </p>
          <Button variant="dark">
            <img className="linkedin-contact" src={linkedIn} alt="LinkedIn" />
          </Button>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your message has been sent successfully. I'll get back to you as soon as possible.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contact;
