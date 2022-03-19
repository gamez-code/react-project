import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

function Products() {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <div className="Products">
      <div className="Products-item">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
