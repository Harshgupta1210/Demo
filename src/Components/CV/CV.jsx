import React from 'react';
import './CV.css'; // Create this CSS file
import Photo_3 from '../../assets/photo_3.jpg'

const CV = () => {
  return (
    <div className="professor-container">
      <div className="professor-info">
        <p>
          <strong>A note to prospective students:</strong> If you are interested in working with me, I highly encourage you to email me in the fall before applications are due. In your email, give me a sense of your background/experience, what you are interested in studying, why you think I might be a good advisor for you. I advise PhD and MA students working on a wide range of empirical topics, but there should be some conceptual overlap (think political ecology, political economy, feminist theories/methods, labor studies, science and technology studies, development studies, etc.) I am especially interested in recruiting students from Latin America and can give some basic tips on navigating the US higher education system as an international student.
        </p>
        <div className="contact-info">
          <strong>Dr. Andrea Marston</strong><br />
          Rutgers University-New Brunswick<br />
          Department of Geography<br />
          <br />
          Lucy Stone Hall, B-255<br />
          54 Joyce Kilmer Avenue<br />
          Piscataway NJ 08854-8045<br />
          <br />
          <a href="mailto:andrea.marston@rutgers.edu">andrea.marston@rutgers.edu</a><br />
          <a href="https://example.com/cv-link">CV (Updated July 2023)</a>
          <br /><br />
          <strong>Links:</strong><br />
          <a href="https://twitter.com/geographiti">Twitter (@geographiti)</a><br />
          <a href="https://example.com/rutgers-profile">Rutgers Geography Profile</a><br />
          <a href="https://example.com/academia-profile">Academia.edu</a>
        </div>
      </div>
      <div className="professor-image">
        <img src={Photo_3} alt="Professor Andrea Marston" />
      </div>
    </div>
  );
}

export default CV;
