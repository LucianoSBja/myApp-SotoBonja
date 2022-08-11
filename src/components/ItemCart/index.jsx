import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './itemCart.css';

const ItemCart = ({ producto }) => {
	const { removeProducto } = useCartContext();

	return (
		<div className="itemCart">
			<img src={producto.img} alt={producto.nombre} />
			<div>
				<p>Titulo: {producto.nombre}</p>
				<p>cantidad: {producto.quantity}</p>
				<p>Precio u.: {producto.price}</p>
				<p>Subtotal: {producto.quantity * producto.price}</p>
				<button onClick={() => removeProducto(producto.id)}>
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default ItemCart;
