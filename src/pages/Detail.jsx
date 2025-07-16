import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../services/data';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % product.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <main className="product-wrapper">
      <div className="image-gallery">
        <div className="main-image">
          <img src={product.images[currentImage]} alt={product.name} />
        </div>
        <div className="thumbnails">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className={idx === currentImage ? 'active' : ''}
              onClick={() => setCurrentImage(idx)}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <h3>Descripción</h3>
        <p className="description">{product.description}</p>
        <button className="btn-contact">Comprar</button>
      </div>
    </main>
  );
};

export default ProductDetail;
