import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import githubImg from '../assets/github-mark-white.png';
import blackPine from '../assets/black-pine.png';

const Portfolio = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const portfolioProjects = [
        {
            githubUrl: 'https://github.com/jordanburger22/black-pine-final',
            webpageUrl: 'https://blackpinewellness.com/',
            screenshot: blackPine,
            appName: 'Black Pine Wellness',
            appDescription: 'I developed a website for a local massage and wellness company featuring detailed service listings with prices. The site includes a secure admin login for updating prices, modifying service descriptions, and adding new services. This project demonstrates my ability to create user-friendly websites with robust admin functionalities.',
            languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'Bcrypt', 'Dotenv', 'Express-JWT', "Json Web Token"]
        },
        {
            githubUrl: 'https://github.com/jordanburger22/assignments',
            webpageUrl: 'https://github.com/jordanburger22/assignments',
            screenshot: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            appName: 'Project 2',
            appDescription: 'An e-commerce platform for selling digital products.',
            languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS']
        },
        {
            githubUrl: 'https://github.com/jordanburger22/assignments',
            webpageUrl: 'https://github.com/jordanburger22/assignments',
            screenshot: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            appName: 'Project 3',
            appDescription: 'A social networking app for connecting people.',
            languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS']
        },
        {
            githubUrl: 'https://github.com/jordanburger22/assignments',
            webpageUrl: 'https://github.com/jordanburger22/assignments',
            screenshot: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            appName: 'Project 4',
            appDescription: 'A blog platform for sharing articles and posts.',
            languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS']
        }
    ];

    const handleProjectHover = (index) => {
        setHoveredProject(index);
    };

    const handleProjectLeave = () => {
        setHoveredProject(null);
    };

    return (
        <div className="portfolio">
            <h1 className="portfolio-header">Crafting Solutions, One Project at a Time</h1>
            {portfolioProjects.map((proj, i) => (
                <Card
                    className="project-card mb-4 mt-4"
                    key={i}
                    onMouseEnter={() => handleProjectHover(i)}
                    onMouseLeave={handleProjectLeave}
                >
                    <div className="img-container">
                        <Card.Img variant="top" src={proj.screenshot} className="proj-img" />
                        <div className="overlay">
                            {hoveredProject === i && (
                                <Button variant='dark' className="btn-live" href={proj.webpageUrl} target="_blank" rel="noopener noreferrer">
                                    View Live Site
                                </Button>
                            )}
                        </div>
                    </div>
                    <Card.Body className="card-body-dark">
                        <div className="project-info">
                            <Card.Title className='card-txt'>{proj.appName}</Card.Title>
                            <Card.Text className='card-txt'>{proj.appDescription}</Card.Text>
                            <Button
                                className="github-btn"
                                href={proj.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant='dark'
                            >
                                <img src={githubImg} alt="GitHub Logo" className="github-logo" />
                                GitHub
                            </Button>
                        </div>
                        <div className="proj-languages">
                            {proj.languagesAndLibraries.map((str, i) => (
                                <span className="proj-languages-used" key={i}>• {str}</span>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Portfolio;
