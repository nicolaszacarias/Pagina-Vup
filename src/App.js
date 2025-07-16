import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './containers/footer/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/Detail';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='grandient__bg'>
          <Navbar />
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
