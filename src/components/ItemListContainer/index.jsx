import React, { useEffect, useState } from 'react';
import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';

const productos = [
	{
		id: 1,
		img: 'https://http2.mlstatic.com/D_NQ_NP_953586-MCO45131846536_032021-O.webp',
		title: 'Diadema de lazo',
	},
	{
		id: 2,
		img: 'https://http2.mlstatic.com/D_NQ_NP_901605-MCO46656717643_072021-O.webp',
		title: 'Diadema tejida',
	},
	{
		id: 3,
		img: 'https://http2.mlstatic.com/D_NQ_NP_847602-MCO47701476325_092021-O.webp',
		title: 'Diadema de tela',
	},
];

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(productos);
			}, 3000);
		});
		getData.then((res) => setData(res));
	}, []);

	const onAdd = (quantity) => {
		console.log(`Compraste ${quantity} unidades`);
	};

	return (
		<>
			<Title greeting={texto} />
			<ItemCount initial={1} stock={5} onAdd={onAdd} />
			<ItemList data={data} />
		</>
	);
};

export default ItemListContainer;
