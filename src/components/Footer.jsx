import React from 'react';
import '../styles/Footer.css';
import instagramIcon from '../assets/instagram.png';

function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; 2025 Maa Beauty Care. All Rights Reserved.</p>
      <a
        href="https://www.instagram.com/maa_beauty_care0109"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-link"
      >
        <img
          src={instagramIcon}
          alt="Instagram"
          className="instagram-icon"
        />
        Follow us on Instagram!
      </a>
    </footer>
  );
}

export default Footer;
