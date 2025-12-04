import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to LineHustle</h1>
      <p>Turn your favorite photos into unique line illustrations. Fast. Affordable. Personal!</p>
      <button onClick={() => navigate('/products')}>View Products</button>
    </div>
  );
}