import React, { useState } from 'react';
import '../styles/Services.css';
import threadingImg from '../assets/threadingImg.jpg';
import waxingImg from '../assets/waxingImg.jpg';
import makeupImg from '../assets/makeupImg.jpg';
import haircutImg from '../assets/haircutImg.jpg';
import hairStylingImg from '../assets/hairStylingImg.jpg';
import hairColorImg from '../assets/hairColorImg.jpg';
import hennaImg from '../assets/hennaImg.jpg';
import clothesTailoringImg from '../assets/clothesTailoringImg.jpg';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const services = [
  {
    name: 'Threading',
    image: threadingImg,
    items: ['Forehead - $2', 'Upper Lip - $2', 'Eyebrow - $8', 'Sideburns - $10', 'Full Face - $15'],
  },
  {
    name: 'Waxing',
    image: waxingImg,
    items: ['Face Wax - $20', 'Full Arm - $20', 'Half Arm - $15', 'Underarm - $10', 'Full Leg - $30', 'Half Leg - $20'],
  },
  {
    name: 'Makeup',
    image: makeupImg,
    items: ['TBA'],
  },
  {
    name: 'Haircut',
    image: haircutImg,
    items: ['Blow Dry - $10', 'Straight Cut - $10', 'Bob Cut - $15', ' U or V Cut - $15', 'Layer/Step Cut - $20', 
      'Feather Cut - $20', 'Long Shake Cut - $20', 'Diamond Cut - $20', 'Graduation Cut - $20', 'Butterfly Cut - $20', 'Other - Please Inquire'],
  },
  {
    name: 'Hair Styling',
    image: hairStylingImg,
    items: ['TBA'],
  },
  {
    name: 'Hair Color',
    image: hairColorImg,
    items: ['TBA'],
  },
  {
    name: 'Henna',
    image: hennaImg,
    items: ['TBA'],
  },
  {
    name: 'Clothes Tailoring',
    image: clothesTailoringImg,
    items: ['TBA'],
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