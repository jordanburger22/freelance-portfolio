import React, { useState } from 'react';
import { Button, Offcanvas, ListGroup } from 'react-bootstrap';
import hamburger from '../assets/hamburger-menu.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <div className='navbar'>
      <Button variant="dark" onClick={handleShow} className="menu-button">
        <img src={hamburger} alt="Menu" />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item action onClick={() => handleNavigate('/')}>About Me</ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNavigate('/services')}>Services</ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNavigate('/values')}>Approach & Values</ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNavigate('/portfolio')}>Portfolio</ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNavigate('/contact')}>Contact Me</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Navbar;
