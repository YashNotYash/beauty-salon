import React from 'react';
import '../styles/Contact.css';
import instagramIcon from '../assets/instagram.png';

function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          We'd love to hear from you! Please reach out with any questions or to book an appointment.
        </p>
        <div className="contact-info">
          <div><strong>Phone:</strong> <a href="tel:+4106849964">+1 410 684 9964</a></div>
          <div><strong>Email:</strong> <a href="mailto:palakprajapati12345678@gmail.com">palakprajapati12345678@gmail.com</a></div>
          <strong>Instagram:</strong>
          <a
            href="https://www.instagram.com/maa_beauty_care0109"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
            style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '0.5rem', paddingTop: '0.2rem' }}
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="instagram-icon"
              style={{ width: '22px', height: '22px', marginRight: '0.3rem' }}
            />
            @maa_beauty_care0109
          </a>
          <div><strong>Address:</strong> 103 N Charter Rd Apt B, Glen Burnie, Maryland, USA 21061</div>

        </div>
        <button className="contact-button" onClick={() => window.location.href = 'mailto:palakprajapati12345678@gmail.com'}>
          ✉ Email Us
        </button>
        <button style = {{ marginLeft: '0.5rem', padding: '0.7rem 1.2rem' }} className="contact-button" onClick={() => window.location.href = 'tel:+14106849964'}>
          📞 Call Now
        </button>
        
      </div>
      <div className="contact-map">
          <iframe
            className="contact-map-iframe"
            title="Google Map"
            src="https://www.google.com/maps?q=103+N+CHARTER+RD+APT+B,+GLEN+BURNIE,+MARYLAND,+USA&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
    </>
  );
}

export default Contact;