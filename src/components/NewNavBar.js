import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NewNavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Baby Steps for Earth</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/explore">Explore Goals</Nav.Link>
          <Nav.Link href="/profile">Your Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NewNavBar;
