import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class ServiceDescription extends Component {
  render() {
    return (
      <Container className="mt-5 service-description">
        <Row>
          <Col md={12}>
            <h2 className="mb-4">Men's Haircuts And Hair styles</h2>
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <p>
                Tokyo city tower, Road No: 1280, Housing Apartment, Japan
                <span className="text-muted ms-2">(4.5)</span>
              </p>
              <div className="d-flex align-items-center">
                <span className="text-decoration-line-through me-2">$200.00</span>
                <span className="fw-bold me-3">$150.00</span>
                <p className="by">By Jonathan Doe</p>
              </div>
            </div>
            <div>
              <h3>Service Description</h3>
              <p>
                Get Barbers at your doorstep now on your demand as per your
                required time and date. Trim your regular hairstyle or get a new
                look with a new style from the catalog. Even if you are too busy
                in the office and have a meeting to attend, why not get the job
                done in the office itself!! Choose a regular scissor cut or ask
                for a trimmer cut, any style you want is just a tap away!
              </p>
              <p>
                Praesent lectus facilisi tempor ridiculus arcu pharetra non
                tellus. Torquent nisl tempori amader Magnis mollis lobortis nam,
                montes ut, consequat sed amet nullam.
              </p>
              <h3 className="mt-4">Service Features</h3>
              <div className="d-flex flex-wrap gap-3">
                <span className="border rounded p-2 bg-light text-success">100% Secure Services</span>
                <span className="border rounded p-2 bg-light text-success">Covid 19 Safety</span>
                <span className="border rounded p-2 bg-light text-success">Easy Payment Method</span>
                <span className="border rounded p-2 bg-light text-success">Services Quality Ensure</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ServiceDescription;