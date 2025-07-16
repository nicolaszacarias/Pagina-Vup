import React from 'react';
import Features from '../../components/feature/Feature';
import './vupx.css';
import { Link } from 'react-router-dom';
import products from '../../services/data';
const Vup = () => (
  <div className="gpt3__whatgpt3 section__margin" id="Servicios">
    <div className="gpt3__whatgpt3-feature">
      <Features title="Que es Vup" text="Creamos contenido único para marcas que buscan diferenciarse. Nuestro equipo de especialistas combina estrategia, creatividad y técnica para desarrollar piezas visuales y narrativas que impacten. Desde redes sociales hasta campañas integrales, brindamos soluciones efectivas que reflejan tu esencia. Nos apasiona contar historias que conectan, emocionan y generan valor en cada plataforma." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Elegí el pack ideal para tu crecimiento</h1>
      <p>Explora nuestros servicios</p>
    </div>
   <div className="gpt3__whatgpt3-container">
  {products.map((product) => (
    <Link to={`/producto/${product.id}`} key={product.id} className="link-feature">
      <Features title={product.name} text="Texto y animación para poner, además de botón para entrar" />
    </Link>
  ))}
</div>
  </div>
);

export default Vup;