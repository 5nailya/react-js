import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube, FaArrowUp } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="justify-content-center text-center">
        <Col xs={12} className="mb-4">
          <a href="#" className="footer-brand">
            <FaArrowUp />
          </a>
        </Col>
        <Col xs={12} className="mb-3">
          <h4 className="footer-title">Bookapp</h4>
          <p className="footer-contact">live@example.com</p>
          <p className="footer-contact">+999 22 33 5555</p>
        </Col>
        <Col xs={12} className="mb-4">
          <div className="footer-social-icons">
            <a href="" className="footer-social-icon">
              <FaInstagram />
            </a>
            <a href="" className="footer-social-icon">
              <FaDribbble />
            </a>
            <a href="" className="footer-social-icon">
              <FaTwitter />
            </a>
            <a href="" className="footer-social-icon">
              <FaYoutube />
            </a>
          </div>
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <Form>
            <div className="d-flex">
              <Form.Control type="email" placeholder="Enter email here..." className="footer-email-input" />
              <Button variant="danger" className="footer-subscribe-button">Subscribe</Button>
            </div>
          </Form>
        </Col>
        <Col xs={12} className="footer-nav">
          <nav>
            <a href="" className="footer-nav-link">Home</a>
            <a href="" className="footer-nav-link">About</a>
            <a href="" className="footer-nav-link">Services</a>
            <a href="" className="footer-nav-link">Shops</a>
            <a href="" className="footer-nav-link">Contact</a>
          </nav>
        </Col>
      </Row>
      <hr className="footer-hr mt-4" />
      <Col xs={12} className="mt-2">
        <p className="footer-copyright text-center">Copyright © 2024 Bookapp. All Rights Reserved</p>
      </Col>
    </Container>
  </footer>
);

export default Footer;