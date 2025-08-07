import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

import img1 from '../assets/work1.png';
import img2 from '../assets/work2.png';
import img3 from '../assets/work3.png';
import img4 from '../assets/work4.png';
import img5 from '../assets/work5.png';
import img6 from '../assets/work6.png';
import img7 from '../assets/work7.png';
import img8 from '../assets/work8.png';
import img9 from '../assets/work9.png';
import img10 from '../assets/work10.png';
import img11 from '../assets/work11.jpg';
import img12 from '../assets/work12.jpg';

function Home() {
  const navigate = useNavigate();
  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
  return (
    <div className="home-page">
      <div className="home-container">
        <h1 className="home-title">Welcome to Maa Beauty Care!</h1>
        <p className="home-subtitle">Experience luxury and care. Visit our services page to begin your transformation.</p>
        
        <button className="home-button" onClick={() => navigate('/services')}>
          View Services
        </button>
        
      </div>
      <section className="gallery-section">
          <h2 className="gallery-title">Our Work</h2>
          <div className="gallery-grid">
            {galleryImages.map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                alt={`Work ${idx + 1}`}
                className="gallery-image"
              />
            ))}
          </div>
        </section>
      </div>
  );
}
export default Home;