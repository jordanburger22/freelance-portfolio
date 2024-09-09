import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import githubImg from '../assets/github-mark-white.png';
import blackPine from '../assets/black-pine.png';
import junkedOut from '../assets/junked-out.png';
import leagueSearch from '../assets/league-search.png';
import gitfit from '../assets/gitfit.png';

const Portfolio = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const portfolioProjects = [
        {
            githubUrl: 'https://github.com/jordanburger22/black-pine-final',
            webpageUrl: 'https://blackpinewellness.com/',
            screenshot: blackPine,
            appName: 'Black Pine Wellness',
            appDescription: 'I developed a website for a local massage and wellness company featuring detailed service listings with prices. The site includes a secure admin login for updating prices, modifying service descriptions, and adding new services. This project demonstrates my ability to create user-friendly websites with robust admin functionalities.',
            languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS', 'Bcrypt', 'Dotenv', 'Express-JWT', "Json Web Token"]
        },
        {
            githubUrl: 'https://github.com/jordanburger22/junked-out',
            webpageUrl: 'https://junked-out.netlify.app/',
            screenshot: junkedOut,
            appName: 'Junked Out',
            appDescription: "I developed the Junked Out LLC app, a custom web application designed to streamline the process of booking junk removal and small structure demolition services for residential and commercial clients. This project showcases my ability to build functional, user-centric applications with a focus on both front-end development. Form submissions are handled with Netlify's built in form handling.",
            languagesAndLibraries: ['React', 'Node.js', 'React Bootstrap', 'CSS', 'React-Router-Dom']
        },
        {
            githubUrl: 'https://github.com/jordanburger22/league-data',
            webpageUrl: 'https://league-search-feature.netlify.app/',
            screenshot: leagueSearch,
            appName: 'League Champions Search Feature Project',
            appDescription: 'In the League Champions Search Feature Project, I created a foundational web application displaying League of Legends champions, designed to be enhanced by students as part of their learning experience. The project includes a base implementation where students can add a search feature with autocomplete functionality, improving the user interface and experience. The task involves integrating a search bar within the ChampionList component, styling it to fit the existing design, and ensuring that the autocomplete feature activates after three characters. This project serves as a practical exercise for students to practice working with dynamic features, object conversion, and CSS styling, while also providing hands-on experience with filtering data and navigating existing codebases.',
            languagesAndLibraries: ['React', 'Node.js', 'CSS', 'React-Router-Dom', 'Axios']
        },
        {
            githubUrl: 'https://github.com/jordanburger22/GitFit',
            webpageUrl: 'https://gitfit.onrender.com/',
            screenshot: gitfit,
            appName: 'GitFit',
            appDescription: "The Workout Tracking App is a dynamic fitness management tool I developed to help users effectively log and track their workouts. Built with React for the frontend and Express with Mongoose for the backend, the app features a robust exercise database of 46 common exercises categorized by muscle group, allowing users to filter and plan their workouts efficiently. With secure user authentication implemented using express-jwt and bcrypt, users can safely register, log in, and manage their workout data. This project highlights my proficiency in creating full-stack applications, integrating user authentication, and managing data with a modern tech stack.",
            languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'CSS', 'Bcrypt', 'Dotenv', 'Express-JWT', "Json Web Token", "React-Router-Dom"],
            guestCreds: {
                username: 'johndoe22',
                password: 'randompassword'
            }
        }
    ];
    // johndoe22
    // randompassword

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
                            {proj.guestCreds && (
                                <>
                                <div className="guest-creds">
                                    <Card.Text>Guest Username: {proj.guestCreds.username}</Card.Text>
                                    <Card.Text>Guest Password: {proj.guestCreds.password}</Card.Text>
                                </div>
                                <br></br>
                                </>
                            )}
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
