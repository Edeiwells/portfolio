import React, { useState } from 'react';
import './contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = formData;

    if (!firstName || !lastName || !email || !message) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const apiKey = 'AIzaSyCCc2Dq6cVEDlrUpQVR4SbYQoQOo2D4Guo';
    const url = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${apiKey}`;

    const requestBody = {
      comment: {
        text: message
      },
      languages: ['fr', 'en'],
      requestedAttributes: {
        TOXICITY: {},
        IDENTITY_ATTACK: {},
        INSULT: {},
        PROFANITY: {},
        THREAT: {}
      }
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const result = await response.json();
      const toxicityScore = result.attributeScores.TOXICITY.summaryScore.value;

      if (toxicityScore > 0.5) {
        setErrorMessage('Your message contains inappropriate content.');
      } else {
        alert('Your message has been sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while sending your message.');
    }
  };

  return (
    <div className="contact-container">
      <h1>How to contact me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>If you have any questions, feel free to reach out to us through the contact details below.</p>
          <div className="contact-details">
            <div className="detail">
              <strong>Email:</strong> a.schmitt@epmistes.net
            </div>
            <div className="detail">
              <strong>Phone:</strong> + 336 69 25 84 00
            </div>
            <div className="detail">
              <strong>Or leave directly a message through the form</strong>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="spacer"></div> {/* Section vide pour permettre au footer d'être en bas de la page */}
    </div>
  );
};

export default Contact;