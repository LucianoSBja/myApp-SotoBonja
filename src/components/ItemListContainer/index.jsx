import React from 'react';
import Title from '../Title';
import ItemCount from '../ItemCount';

export const ItemListContainer = (props) => {
	const onAdd = (quantity) => {
		console.log(`Compraste ${quantity} unidades`);
	};

	return (
		<>
			<Title greeting="Chau" />
			<ItemCount initial={1} stock={5} onAdd={onAdd} />
		</>
	);
};

export default ItemListContainer;
