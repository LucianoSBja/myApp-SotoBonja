import React from 'react';
import carrito from './carrito.svg';
import './CartWidget.css';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () => {
	const { totalProducto } = useCartContext();

	return (
		<>
			<img className="btn_carrito" src={carrito} alt="carrito" />
			<span>{totalProducto() || ''}</span>
		</>
	);
};

export default CartWidget;
