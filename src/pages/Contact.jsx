import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
          <form
            data-netlify="true"
            name="contact"
            method="post"
            onSubmit='submit'
            className="netlify-form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="Name" className="form-control" />
            <input type="email" name="email" placeholder="Email" className="form-control" />
            <input type="text" name="subject" placeholder="Subject" className="form-control" />
            <textarea name="message" placeholder="Message" className="form-control"></textarea>
            <button type="submit" className="btn btn-dark">Send</button>
          </form>
        </Col>

        <Col md={6}>
          <h2>Connect with Me</h2>
          <p>
            For professional updates and networking, feel free to connect with me on LinkedIn:
          </p>
          <Button variant="dark" href="https://www.linkedin.com/in/your-profile" target="_blank">
            <img className='linkedin-contact' src={linkedIn} alt="LinkedIn" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
