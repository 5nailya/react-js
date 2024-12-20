import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageGallery from './components/ImageGallery';
import ServiceDescription from './components/ServiceDescription';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import { Container, Row } from 'react-bootstrap';
import './App.css';

const reviewData = {
  rating: 4.5,
  verified: true,
  location: "Los Angela's, USA",
  date: '04 Days ago',
  text: "Ana Studios was very logical and creative at the same time\nThe client received excellent feedback on DePalma Studios’ designs due to their website's improved look and feel. The team was very communicative and collaborative, and they demonstrated a unique understanding of the client’s requirements, providing very.",
  imageUrl: 'https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-4.jpg'
};

const names = ["Mark Jco", "John Doe", "Jane Smith", "Peter Jones", "Emily White"];

function App() {
  const images = [
    { src: 'https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-3.jpg', alt: 'Image 1'},
    { src: 'https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-4.jpg', alt: 'Image 2'},
    { src: 'https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-2.jpg', alt: 'Image 3' },
  ];

  return (
    <div className="App">
      <Header />
      <Hero />
      <ImageGallery images={images} />
      <ServiceDescription />
      <Container className="mt-5">
        <Row className="justify-content-center">
          {names.map((name, index) => (
            <div key={index} className="mb-5">
              <MyCard {...reviewData} name={name} imageUrl={index % 2 === 0 ? 'https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-4.jpg' : 'https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-2.jpg'} />
            </div>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;