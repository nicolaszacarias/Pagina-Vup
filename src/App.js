// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './containers/footer/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/Detail';

import './App.css';
import fondo from './fondo.png'; // ✅ Ruta desde src

const App = () => {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        }}
      >
        <div className="grandient__bg">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

