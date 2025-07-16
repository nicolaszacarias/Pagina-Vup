import React from 'react';
import './footer.css';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">VUP</h2>
        <p className="footer-description">Contenido para redes con estilo único.</p>
        <div className="footer-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/5490000000000" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="tel:+549000000000"><FaPhoneAlt /></a>
          <a href="mailto:info@vup.com"><FaEnvelope /></a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} VUP. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
