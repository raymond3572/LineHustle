import React from 'react';
import { useParams } from 'react-router-dom';
import OrderForm from '../components/OrderForm';

const PRODUCT_INFO = {
  single: { name: 'Single Portrait', price: '$10' },
  couple: { name: 'Couple Portrait', price: '$18' },
  pet: { name: 'Pet Portrait', price: '$8' }
};

export default function OrderPage() {
  const { productId } = useParams();
  const product = PRODUCT_INFO[productId] || {};

  return (
    <div className="container">
      <h2>Order: {product.name} {product.price ? `(${product.price})` : ''}</h2>
      <OrderForm product={product} />
    </div>
  );
}