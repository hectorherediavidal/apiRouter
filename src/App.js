import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <img src={product.images[1]} alt={product.title} />
          
        </div>
      ))}
    </div>
  );
};

export default Products;
