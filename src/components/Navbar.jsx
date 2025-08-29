import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import instagramIcon from '../assets/instagram.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Maa Beauty Care</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/services" className="navbar-link">Services</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        <a
          href="https://www.instagram.com/maa_beauty_care0109"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            src={instagramIcon}
            alt="Instagram"
            className="instagram-icon"
            style={{ width: '28px', height: '28px'}}
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;