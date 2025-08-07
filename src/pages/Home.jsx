import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
//import img1 from '../assets/work1.jpg';
//import img2 from '../assets/work2.jpg';
//import img3 from '../assets/work3.jpg';
//import img4 from '../assets/work4.jpg';

function Home() {
  const navigate = useNavigate();
  //const galleryImages = [img1, img2, img3, img4];
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Maa Beauty Care!</h1>
      <p className="home-subtitle">Experience luxury and care. Visit our services page to begin your transformation.</p>
      
      <button className="home-button" onClick={() => navigate('/services')}>
        View Services
      </button>

      {/*
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
      */}
      
    </div>
  );
}
export default Home;