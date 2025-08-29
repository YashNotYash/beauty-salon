import React, { useState } from 'react';
import '../styles/Services.css';
import threadingImg from '../assets/threadingImg.jpg';
import waxingImg from '../assets/waxingImg.jpg';
import makeupImg from '../assets/makeupImg.jpg';
import haircutImg from '../assets/haircutImg.jpg';
import hairStylingImg from '../assets/hairStylingImg.jpg';
import facialImg from '../assets/facialImg.jpg';
import hennaImg from '../assets/hennaImg.jpg';
import clothesTailoringImg from '../assets/clothesTailoringImg.jpg';
import ReactDOM from 'react-dom';

const services = [
  {
    name: 'Threading',
    image: threadingImg,
    items: ['Forehead - $2', 'Upper Lip - $2', 'Eyebrow - $8', 'Sideburns - $10', 'Full Face - $15', 'Other - Please Inquire'],
  },
  {
    name: 'Waxing',
    image: waxingImg,
    items: ['Face Wax - $20', 'Full Arm (w/ under arm) - $30', 'Half Arm - $15', 'Under Arm - $10', 'Full Leg - $40', 'Half Leg - $20', 'Other - Please Inquire'],
  },
  {
    name: 'Makeup',
    image: makeupImg,
    items: ['We offer a variety of makeup styles.', 'Contact us to learn more!'],
  },
  {
    name: 'Haircut',
    image: haircutImg,
    items: ['Blow Dry - $15', 'Straight Cut - $10', 'Bob Cut - $20', ' U or V Cut - $15', 'Layer/Step Cut - $30', 
      'Feather Cut - $30', 'Long Shake Cut - $35', 'Diamond Cut - $35', 'Butterfly Cut - $35', 'Other - Please Inquire'],
  },
  {
    name: 'Hair Styling',
    image: hairStylingImg,
    items: ['Looking for a special hairstyle?', 'We offer a variety of styling options - contact us to learn more!'],
  },
  {
    name: 'Facial',
    image: facialImg,
    items: ['Cleanup - $20', 'Gold (Lotus) - $40 (45min to 1hr)', 'Gold (Naturel\'s) - $35 (30min to 45min)', 'Diamond - $30 (30min to 45min)', 
      'Whitening (O₃+) - $50 (45min to 1hr)', '(O₃+) (Bridal Kit) - $70 (45min to 1hr)', 'Bio-Reach Shiner Blocian - $15 (15min)', 'Other - Please Inquire'],
  },
  {
    name: 'Henna',
    image: hennaImg,
    items: ['Henna on Hand - $15', 'Bridal Henna: $150', 'Other - Please Inquire'],
  },
  {
    name: 'Clothes Tailoring',
    image: clothesTailoringImg,
    items: ['Need adjustments or custom outfits?', 'We offer several tailoring services - contact us to learn more!'],
  },
];

function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="services-container" style={{position: 'relative'}}>
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.name}
            className="service-tile"
            style={{ backgroundImage: `url(${service.image})` }}
            onClick={() => setSelected(service)}
          >
            <div className="service-name">{service.name}</div>
          </div>
        ))}
      </div>

      {selected &&
        ReactDOM.createPortal(
          <div className="service-modal-overlay" onClick={() => setSelected(null)}>
            <div className="service-modal" onClick={e => e.stopPropagation()}>
              <button className="service-modal-close" onClick={() => setSelected(null)}>×</button>
              <h3>{selected.name}</h3>
              <ul>
                {selected.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>,
          document.body
        )
      }
    </div>
  );
}

export default Services;