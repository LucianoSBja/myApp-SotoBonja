import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';

const Cart = () => {
	const { cart, totalPrice } = useCartContext();
	if (cart.length === 0) {
		return (
			<>
				<p>No hay elemntos en el carrito</p>
				<Link to="/">Hacer compra</Link>
			</>
		);
	}
	return (
		<>
			{cart.map((productos) => (
				<ItemCart key={productos.id} producto={productos} />
			))}
			<p>Total:{totalPrice()}</p>
		</>
	);
};
export default Cart;
