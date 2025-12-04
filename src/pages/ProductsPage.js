import React from 'react';
import ProductCard from '../components/ProductCard';

const PRODUCTS = [
  {
    id: 'single',
    name: 'Single Portrait',
    price: '$10',
    description: 'One person, high-res digital line illustration',
    image: 'https://placehold.co/200x200/EEE/31343A?text=Single',
  },
  {
    id: 'couple',
    name: 'Couple Portrait',
    price: '$18',
    description: 'Two people, beautiful digital line illustration',
    image: 'https://placehold.co/200x200/EEE/31343A?text=Couple',
  },
  {
    id: 'pet',
    name: 'Pet Portrait',
    price: '$8',
    description: 'Your pet immortalized as line art',
    image: 'https://placehold.co/200x200/EEE/31343A?text=Pet',
  }
];

export default function ProductsPage() {
  return (
    <div className="container">
      <h2>Our Line Illustration Products</h2>
      <div className="productsGrid">
        {PRODUCTS.map(prod => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
}