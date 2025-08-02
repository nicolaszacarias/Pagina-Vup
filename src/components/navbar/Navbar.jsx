import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from './../../Vuplogo.png';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
           <a href="/"><img src={logo} /> </a>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="/#inicio">Inicio</a></p>
          <p><a href="/#Servicios">Servicios</a></p>
          <p><a href="/#Cursos">Cursos</a></p>
          <p><a href="/#Instalaciones">Extras</a></p>
          <p><a href="/#contact-us">Contactanos</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p></p>
        <Link>
        <button type="button">Login</button>
        </Link>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="/#inicio">Inicio</a></p>
          <p><a href="/#Servicios">Servicios</a></p>
          <p><a href="/#Cursos">Cursos</a></p>
          <p><a href="/#Instalaciones">Extras</a></p>
          <p><a href="/#contact-us">Contactanos</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            {/* <p>Sign in</p> */}
            <Link>
            <button type="button">Login</button>
            </Link>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
