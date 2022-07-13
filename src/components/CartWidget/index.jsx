import React from 'react';
import carrito from './carrito.svg';
import './CartWidget.css';

export const CartWidget = () => {
	return <img className="btn_carrito" src={carrito} alt="carrito" />;
};

export default CartWidget;
