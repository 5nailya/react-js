import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaMapMarkerAlt, FaClock, FaCheck } from 'react-icons/fa';

class MyCard extends Component {
  render() {
    const { name, rating, verified, location, date, text, imageUrl } = this.props;

    return (
      <Card className="h-100 shadow-sm border-0">
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div className="d-flex">
              <Image
                src={imageUrl}
                alt={name}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  marginRight: '10px',
                  objectFit: 'cover',
                }}
              />
              <div className="d-flex flex-column">
                <Card.Title className="mb-0 fs-6">{name}</Card.Title>
                <div className="d-flex align-items-center">
                  <span className="me-1">({rating})</span>
                  {verified && <FaCheck className="text-success" />}
                  <span className="ms-1">Verified User</span>
                </div>
              </div>
            </div>
            <div className="text-muted small text-end">
              <div className="d-flex flex-column align-items-end">
                <div className="d-flex align-items-center">
                  <FaMapMarkerAlt className="me-1" /> {location}
                </div>
                <div className="d-flex align-items-center">
                  <FaClock className="me-1" /> {date}
                </div>
              </div>
            </div>
          </div>
          <Card.Text className="mb-2 small">{text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default MyCard;