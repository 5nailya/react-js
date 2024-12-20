import React, { Component } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { FaGlobe } from 'react-icons/fa';

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand className="text-danger fw-bold" href="">
            Bookapp
          </Navbar.Brand>
          <Navbar.Toggle className="text-danger" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="">About</Nav.Link>
              <Nav.Link href="">Services</Nav.Link>
              <Nav.Link href="">Shops</Nav.Link>
              <Nav.Link href="">Contact</Nav.Link>
            </Nav>
            <Nav className="mx-auto">
              <Nav.Link href="">
                <FaGlobe className="me-2" /> Eng
              </Nav.Link>
              <Button variant="danger" className="login-btn">
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;