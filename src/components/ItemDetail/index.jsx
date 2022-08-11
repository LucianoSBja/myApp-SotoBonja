import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import './itemDetail.css';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProducto } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProducto(data, quantity);
	};

	return (
		<div className="container">
			<div className="detail">
				<img className="detail_img" src={data.img} alt="#" />
				<div className="content">
					<h1>{data.nombre}</h1>
					<p>
						{data.descripcion}
					</p>
					{goToCart ? (
						<Link to="/cart">Terminar Compra</Link>
					) : (
						<ItemCount initial={1} stock={5} onAdd={onAdd} />
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
