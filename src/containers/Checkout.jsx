import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removerFromCart } = useContext(AppContext);
  const { cart } = state;
  const handleRemove = (product) => () => {
    removerFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin pedidos...</h3>}
        {cart.map((item) => (
          <div className="Products-item" key={item.title}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <span>
              ${item.price}
              <button type="button" onClick={handleRemove(item)}>
                <i className="fas fa-trash"></i>
              </button>
            </span>
          </div>
        ))}

        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar Pedido</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
