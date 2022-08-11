import './item.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ info }) => {
	return (
		<Link to={`/detalle/${info.id}`} className="producto">
			<div className="containerCards">
				<img src={info.img} alt="" />
				<p>{info.nombre}</p>
			</div>
		</Link>
	);
};

export default Item;
