import React, { Component } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  handlePrev = () => {
    const { images } = this.props;
    const prevIndex = (this.state.currentImageIndex - 1 + images.length) % images.length;
    this.setState({ currentImageIndex: prevIndex });
  };

  handleNext = () => {
    const { images } = this.props;
    const nextIndex = (this.state.currentImageIndex + 1) % images.length;
    this.setState({ currentImageIndex: nextIndex });
  };

  render() {
    const { images } = this.props;

    if (!images || images.length === 0) {
      return <p>No images to display.</p>;
    }

    const currentImage = images[this.state.currentImageIndex];

    return (
      <Container className="mt-5">
        <Row className="align-items-center justify-content-center">
          <Col xs="auto">
            <Button variant="danger" onClick={this.handlePrev} disabled={images.length <= 1}>
              <FaChevronLeft />
            </Button>
          </Col>
          <Col md={8} className="text-center">
            {currentImage && currentImage.src ? (
              <a href={currentImage.link} target="_blank" rel="noopener noreferrer">
                <Image src={currentImage.src} alt={currentImage.alt} fluid rounded style={{ maxHeight: '500px', objectFit: 'contain' }} />
              </a>
            ) : (
              <p>Error loading image.</p>
            )}
          </Col>
          <Col xs="auto">
            <Button variant="danger" onClick={this.handleNext} disabled={images.length <= 1}>
              <FaChevronRight />
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ImageGallery;