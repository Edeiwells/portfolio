import React, { useState } from 'react';
import projectsData from '../../components/projects/projects'; // Assurez-vous que le chemin est correct
import './works.scss';

const Works = () => {
  const [projects] = useState(projectsData);

  return (
    <div className="works-container">
      <h1>My Works</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;