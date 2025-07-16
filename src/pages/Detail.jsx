import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../services/data';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};
console.log("Params ID:", products.id);
console.log("Producto encontrado:", products);

export default ProductDetail;
