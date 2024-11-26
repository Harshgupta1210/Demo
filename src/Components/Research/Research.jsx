import React from 'react';
import './Research.css';
import Photo_2 from '../../assets/photo_2.jpg'
import Photo_1 from '../../assets/photo_1.jpg'

const Research = () => {
  return (
    <div className="container_1">
		<h2>Research</h2>
		<section className="image-banner">
        <img 
          src={Photo_1}
          alt="Landscape" 
          className="banner-image" 
        />
      </section>
      <p className="description_1">
        I recently completed <em>Subterranean Matters</em>, a long-term project analyzing resource nationalism, geological materiality, and cooperative mining in highland Bolivia. <a href="#">Check out the book</a> when it's available in March 2024.
      </p>
      <div className="grid">
        <div className="grid-item">
          <img src={Photo_2} alt="Subterranean Matters" />
          <div className="overlay">SUBTERRANEAN MATTERS</div>
        </div>
        <div className="grid-item">
		<img src={Photo_2} alt="Green Energy Frontiers" />
          <div className="overlay">GREEN ENERGY FRONTIERS</div>
        </div>
        <div className="grid-item">
          <img src={Photo_2} alt="Feminist Geopolitics & Gold" />
          <div className="overlay">FEMINIST GEOPOLITICS & GOLD</div>
        </div>
        <div className="grid-item">
          <img src={Photo_2} alt="Energy Storage & Security" />
          <div className="overlay">ENERGY STORAGE & SECURITY</div>
        </div>
      </div>
    </div>
  );
};

export default Research;
