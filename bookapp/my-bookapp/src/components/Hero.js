import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Hero extends Component {
  render() {
    return (
      <div className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col md={8} style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <h2 className="display-4 fw-bold">Service Details</h2>
                <p className="lead">Home / Service Details</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Hero;