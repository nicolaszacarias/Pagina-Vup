import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from './../../Vuplogo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
           <img src={logo} /> 
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#inicio">Inicio</a></p>
          <p><a href="#QEV">Que es Vup?</a></p>
          <p><a href="#possibility">Servicios</a></p>
          <p><a href="#Novedades">Novedades</a></p>
          <p><a href="#blog">Contactanos</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p></p>
        <button type="button">Comenzar</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#inicio">Inicio</a></p>
            <p><a href="#QEV">Que es Vup?</a></p>
            <p><a href="#Falta">Servicios</a></p>
            <p><a href="#Novedades">Novedades</a></p>
            <p><a href="#Falta">Contactanos</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            {/* <p>Sign in</p> */}
            <button type="button">Comenzar</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
