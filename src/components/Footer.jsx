import React from 'react';
import '../styles/Footer.css';
import instagramIcon from '../assets/instagram.png';

function Footer() {
  return (
    <footer className="footer-container">
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
      <p>&copy; {new Date().getFullYear()} Maa Beauty Care. All rights reserved.</p>
      <p className="developer-tag">Developed by <a href="https://www.instagram.com/yashn0tyash/" target="_blank" rel="noopener noreferrer">Yashkumar Prajapati</a></p>
    </footer>
  );
}

export default Footer;
