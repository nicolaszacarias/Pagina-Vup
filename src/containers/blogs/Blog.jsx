import React from 'react';
import Article from '../../components/article/Article';
import Foto1 from './../../Foto1.jpg';
import Foto2 from './../../Foto2.jpg';
import Foto3 from './../../Foto3.jpg';
import Foto4 from './../../Foto4.jpg';
import Foto5 from './../../Foto5.png';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="Instalaciones">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={Foto1} date="Luces" text="Toda la iluminacion por que vos sos el foco" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={Foto2} date="Camaras" text="Con camaras ultimo modelo" />
        <Article imgUrl={Foto3} date="Microfonos" text="La sonoridad que vos busques la tenemos" />
        <Article imgUrl={Foto4} date="Estudio" text="Con un estudio preparado para lo que necesites" />
        <Article imgUrl={Foto5} date="Posteos y historias" text="En todo momento vas a tener contenido para publicar." /> 
      </div>
    </div>
  </div>
);

export default Blog;

