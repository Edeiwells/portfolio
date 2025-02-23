import React, { useState } from 'react';
import servicesData from '../../components/services/service'; // Assurez-vous que le chemin est correct
import feedbacksData from '../../components/feedback/feedback'; // Importation des feedbacks
import Carousel from '../../components/carousel/carousel'; // Importation du composant Carrousel
import './service.scss';

const Services = () => {
  const [services] = useState(servicesData);
  const [feedbacks] = useState(feedbacksData);

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul>
              {service.options.map((option, idx) => (
                <li key={idx}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="services-info">
        <div className="services-description">
          <h2>Service Description</h2>
          <p>We offer a wide range of services to meet your needs. Our team of experts is dedicated to providing the best solutions for your projects.</p>
        </div>
        <div className="pricing">
          <h2>Pricing</h2>
          <p><strong>Hourly Rate:</strong> $50/hour</p>
          <p><strong>Daily Rate:</strong> $400/day</p>
          <p><strong>Monthly Rate:</strong> $8000/month</p>
        </div>
      </div>
      <div className="feedbacks">
        <h2>Feedbacks</h2>
        <Carousel feedbacks={feedbacks} />
      </div>
    </div>
  );
};

export default Services;