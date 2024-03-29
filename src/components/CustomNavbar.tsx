import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Custom Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
