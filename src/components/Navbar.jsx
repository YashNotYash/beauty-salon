import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Maa Beauty Care</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/services" className="navbar-link">Services</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;