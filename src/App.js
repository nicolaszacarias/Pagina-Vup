import React from 'react';
import Article from './components/article/Article';
import Cta from './components/cta/Cta';
import Brand from './components/brand/Brand';
import Feature from './components/feature/Feature';
import Navbar from './components/navbar/Navbar';
import Footer from './containers/footer/Footer';
import Blog from './containers/blogs/Blog';
import Features from './containers/features/Features'
import Header from './containers/header/Header'
import Possibility from './containers/possibility/Possibility'
import Vupx from './containers/vupx/Vupx'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <div className='grandient__bg'>
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <Vupx/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
