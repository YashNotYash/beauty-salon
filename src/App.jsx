import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/Navbar.css';
import './styles/Footer.css';
import './styles/App.css';

function App() {

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-logo">Maa Beauty Care</div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/services" className="navbar-link">Services</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
