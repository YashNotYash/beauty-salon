import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Maa Beauty Care!</h1>
      <p className="home-subtitle">Experience luxury and care. Visit our services page to begin your transformation.</p>
      
      <button className="home-button" onClick={() => navigate('/services')}>
        View Services
      </button>
    </div>
  );
}
export default Home;