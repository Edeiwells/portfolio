import React, { useState } from 'react';
import './carousel.scss';

const Carousel = ({ feedbacks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="carousel-content">
        {feedbacks.map((feedback, index) => (
          <div
            key={feedback.id}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(${(currentIndex) * -100}%)` }}
          >
            <h3>{feedback.name}</h3>
            <p>{feedback.message}</p>
            <span className="feedback-type">{feedback.type}</span>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Carousel;