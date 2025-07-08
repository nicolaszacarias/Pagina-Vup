import React from 'react';
// import people from '../../assets/people.png';
 import video from '../../Vuplogo.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="inicio">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Creamos soluciones únicas para impulsar tu negocio hoy</h1>
      <p>Potenciamos tu comunicación digital con contenido original, fotografía impactante y edición profesional. Diseñamos piezas visuales que transmiten tu esencia y generan engagement, ayudando a tu marca a crecer y destacar en el mercado.</p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      <div className="gpt3__header-content__people">
        {/* <img
    src={video}  // Cambia esta ruta por la ruta correcta de tu video
  /> */}
        {/* <p>1,600 people requested access a visit in last 24 hours</p> */}
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={video} /> 
    </div>
  </div>
);

export default Header;

