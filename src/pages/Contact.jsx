import React from 'react';
import '../styles/Contact.css';

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
          <div><strong>Address:</strong> 103 N CHARTER RD APT B, GLEN BURNIE, MARYLAND, USA</div>
        </div>
        <button className="contact-button" onClick={() => window.location.href = 'mailto:palakprajapati12345678@gmail.com'}>
          Email Us
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