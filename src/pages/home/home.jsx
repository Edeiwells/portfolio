import React, { useEffect, useState } from 'react';
import './home.scss';
import projectsData from '../../components/projects/projects'; // Importation des projets
import servicesData from '../../components/services/service'; // Importation des services
import feedbacksData from '../../components/feedback/feedback'; // Importation des feedbacks
import Carousel from '../../components/carousel/carousel'; // Importation du composant Carrousel

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    setProjects(projectsData); // Initialisation des projets
    setServices(servicesData); // Initialisation des services
    setFeedbacks(feedbacksData); // Initialisation des feedbacks

    const handleScroll = () => {
      const projectElements = document.querySelectorAll('.project');
      projectElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const scrollPercent = Math.min(rect.top / window.innerHeight, 1);
        const translateY = -50 + scrollPercent * 50;
        const rotateX = -50 + scrollPercent * 50;
        const rotateY = -10 + scrollPercent * 10;
        el.style.transform = `translate3d(0, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        }
      });

      const serviceElements = document.querySelectorAll('.service-card');
      serviceElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const scrollPercent = Math.min(rect.top / window.innerHeight, 1);
        const translateY = 50 - scrollPercent * 50;
        el.style.transform = `translateY(${translateY}px)`;
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="intro">
        <div className="text">
          <h1>Hello, I'm Arthur Schmitt, a full stack developer based in Paris</h1>
        </div>
        <div className="image">
          <img src="/arthur.jpeg" alt="Arthur Schmitt" />
        </div>
      </div>
      <div className="projects">
        {projects.map(project => (
          <div key={project.id} className="project" onClick={() => window.location.href = '/works'}>
            <img src={project.image} alt={project.title} />
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="services">
        <h2>Services</h2>
        <div className="service-cards">
          {services.map(service => (
            <div key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.options.map(option => (
                  <li key={option}>
                    <i className="fas fa-check"></i> {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="feedbacks">
        <h2>Feedbacks</h2>
        <Carousel feedbacks={feedbacks} />
      </div>
    </div>
  );
};

export default Home;