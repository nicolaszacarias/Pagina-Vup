import React from 'react';
import Header from '../containers/header/Header';
import Vupx from '../containers/vupx/Vupx';
import Features from '../containers/features/Features';
import Possibility from '../containers/possibility/Possibility';
import Cta from '../components/cta/Cta';
import Blog from '../containers/blogs/Blog';

const Home = () => {
  return (
    <>
      <Header />
      <Vupx />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
    </>
  );
};

export default Home;
