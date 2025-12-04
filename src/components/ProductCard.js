import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ id, name, price, description, image }) {
  const navigate = useNavigate();
  return (
    <div className="productCard">
      <img src={image} alt={name} className="productImage" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="productPrice">{price}</span>
      <button onClick={() => navigate(`/order/${id}`)}>Order Now</button>
    </div>
  );
}