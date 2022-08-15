import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';
import {addDoc,collection, getFirestore} from 'firebase/firestore';

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	const order = {
	buyer: {
		name:'Luciano',
		email:'luciano@gmail.com',
		phone: '1233213',
		address:'assd'
	},
	item: cart.map(productos => ({id: productos.id, nombre:productos.nombre, price: productos.price, quantity: productos.quantity})),
	total:totalPrice(),
}
	const handleClick = () => {

		const db = getFirestore();
		const ordersCollection = collection (db, 'orders');
		addDoc(ordersCollection, order)
		.then (({ id }) => console.log(id))


	}


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
			<button onClick={handleClick}>Emitir Compra</button>
		</>
	);
};
export default Cart;
