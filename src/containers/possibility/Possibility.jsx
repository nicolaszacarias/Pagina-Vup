import React from 'react';
import VideoCC from '../../VideoC.mp4';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="Novedades">
    <div className="gpt3__possibility-image">
      <video
        src={VideoCC}
        autoPlay
        muted
        loop
        playsInline
        className="gpt3__possibility-video"
      />
    </div>
    <div className="gpt3__possibility-content">
      <h4>TEXTO</h4>
      <h1 className="gradient__text">Texto <br /> Texto</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempo</p>
      <h4>Bla bla bla</h4>
    </div>
  </div>
);

export default Possibility;
