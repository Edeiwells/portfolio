import React from 'react';
import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faJs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="about-container">
      <div className="intro">
        <img src="/arthur.jpeg" alt="Arthur Schmitt" />
        <div className="description">
          <h1>About Me</h1>
          <p>I am a former fleet manager who transitioned into web development to pursue my childhood dream of creating and delivering innovative IT solutions. Regardless of the industry whether medical, commercial, or internal business operations.
            I am passionate about leveraging technology to solve problems and improve efficiency. My background, combined with my curiosity, teamwork, and rigorous approach, allows me to develop impactful and well-structured solutions.</p>
        </div>
      </div>
      <div className="experiences">
        <h2>Professional Experiences</h2>
        <ul>
          <li>
            <h3>Fleet Manager</h3>
            <p>Zity 2021 - 2024</p>
            <p></p>
          </li>
          <li>
            <h3>Customer and Partner Success</h3>
            <p>Marcel 2019 - 2021</p>
            <p></p>
          </li>
        </ul>
      </div>
      <div className="skills">
        <h2>Languages & Technologies</h2>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPhp} size="2x" />
            <p>PHP</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faJs} size="2x" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faHtml5} size="2x" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="2x" />
            <p>SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;