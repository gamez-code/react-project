import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';
import AppContext from '../context/AppContext';

const Information = ({history}) => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef({});
  const { cart } = state;
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push("/checkout/payment")
  };
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de Contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electrónico" name="email" />
            <input type="text" placeholder="Apartamento" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código Postal" name="cp" />
            <input type="text" placeholder="Teléfono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <Link to="/checkout/payment">
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((product) => (
          <div className="Information-item" key={product.title}>
            <div className="information-element">
              <h4>{product.title}</h4>
              <span>{`$ ${product.price}`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
