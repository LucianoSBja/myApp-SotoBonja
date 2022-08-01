import React, { useState } from 'react';
import './itemDetail.css';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);

	const onAdd = (quantity) => {
		setGoToCart(true);
	};

	return (
		<div className="container">
			<div className="detail">
				<img className="detail_img" src={data.img} alt="#" />
				<div className="content">
					<h1>{data.title}</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Maxime blanditiis doloremque modi!
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
