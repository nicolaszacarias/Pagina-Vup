import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import products from '../../services/data';
import { Link } from 'react-router-dom';

const Features = () => {
  const cursos = products.filter(producto =>
    producto.name.toLowerCase().includes("curso")
  );

  return (
    <div className="gpt3__features section__padding" id="Cursos">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Aprendé con nosotros y convertí tu futuro en éxito. Inscribite y crecé ya.</h1>
        <p>Solicitá ahora para aprender a manejar tus redes.</p>
      </div>
      <div className="gpt3__features-container">
{cursos.map((curso) => (
  <Link
    to={`/producto/${curso.id}`}
    key={curso.id}
    className="curso-card"
  >
    <div className="gpt3__features-container__curso-card">
      <Feature
        title={curso.name}
        text={curso.description}
      />
    </div>
  </Link>
))}
      </div>
    </div>
  );
};

export default Features;
