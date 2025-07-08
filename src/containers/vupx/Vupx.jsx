import React from 'react';
import Features from '../../components/feature/Feature';
import './vupx.css';

const Vup = () => (
  <div className="gpt3__whatgpt3 section__margin" id="QEV">
    <div className="gpt3__whatgpt3-feature">
      <Features title="Que es Vup" text="Creamos contenido único para marcas que buscan diferenciarse. Nuestro equipo de especialistas combina estrategia, creatividad y técnica para desarrollar piezas visuales y narrativas que impacten. Desde redes sociales hasta campañas integrales, brindamos soluciones efectivas que reflejan tu esencia. Nos apasiona contar historias que conectan, emocionan y generan valor en cada plataforma." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Elegí el pack ideal para tu crecimiento</h1>
      <p>Explora nuestros servicios</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Features title="Basico" text="Texto y imagen de animacion para poner, ademas de boton para entrar" />
      <Features title="Premium" text="Texto y imagen de animacion para poner, ademas de boton para entrar" />
      <Features title="Deluxe" text="Texto y imagen de animacion para poner, ademas de boton para entrar" />
    </div>
  </div>
);

export default Vup;