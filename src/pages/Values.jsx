import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Values = () => {
  const values = [
    {
      title: "Problem-Solving",
      description: "I thrive on solving complex problems by breaking them down into manageable parts and finding innovative solutions.",
      examples: [
        "Debugging complex issues in a project",
        "Designing efficient software architectures"
      ]
    },
    {
      title: "Continuous Learning",
      description: "Staying current with the latest technologies and best practices is crucial to my work. I actively seek out new learning opportunities to enhance my skills and knowledge.",
      examples: [
        "Taking advanced courses in new technologies",
        "Attending industry conferences and workshops"
      ]
    },
    {
      title: "Effective Communication",
      description: "Communicating complex technical concepts in an accessible manner is essential. I focus on clear, concise explanations and tailor my communication to the audience.",
      examples: [
        "Explaining technical concepts to non-technical stakeholders",
        "Creating easy-to-understand documentation and tutorials"
      ]
    },
    {
      title: "Adaptability",
      description: "The tech landscape is always evolving, and I pride myself on being adaptable to new tools and methodologies. This flexibility allows me to respond effectively to changing requirements and project needs.",
      examples: [
        "Quickly learning new frameworks or tools",
        "Adjusting project plans based on client feedback"
      ]
    },
    {
      title: "Collaboration",
      description: "Working well with others is key to successful projects. I value collaboration and strive to build strong relationships with colleagues, clients, and students to achieve our goals together.",
      examples: [
        "Leading cross-functional project teams",
        "Collaborating with clients to refine project requirements"
      ]
    }
  ];

  return (
    <Container className='values'>
      <h1 className="fs-2 fs-md-1">My Values & Approach</h1>
      <p className="fs-4 fs-md-3">
        As a full stack developer and mentor, my approach is driven by a set of core values that guide my work and interactions. These values shape how I approach problem-solving, communication, and collaboration with others.
      </p>
      <Row className="card-container">
        {values.map((value, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="card-item">
              <Card.Body>
                <Card.Title className="fs-5 fs-md-4">{value.title}</Card.Title>
                <Card.Text className="fs-6 fs-md-5">{value.description}</Card.Text>
                <ul>
                  {value.examples.map((example, idx) => (
                    <li key={idx} className="fs-6 fs-md-5">{example}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Values;
