import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Curso1',
    text: 'Rever idea',
  },
  {
    title: 'Curso2',
    text: 'Rever idea',
  },
  {
    title: 'Curso3',
    text: 'Rever idea',
  },
  {
    title: 'Curso4',
    text: 'Rever idea',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Aprendé con nosotros y convertí tu futuro en éxito. Inscribite y crecé ya.</h1>
      <p>Solicita ahora para Aprender a manejar tus redes.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
