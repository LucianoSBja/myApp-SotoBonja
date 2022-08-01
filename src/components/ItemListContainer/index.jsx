import React, { useEffect, useState } from 'react';
import Title from '../Title';

import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const productos = [
	{
		id: 1,
		img: 'https://http2.mlstatic.com/D_NQ_NP_953586-MCO45131846536_032021-O.webp',
		title: 'Diadema de lazo',
		category: 'standar',
	},
	{
		id: 2,
		img: 'https://http2.mlstatic.com/D_NQ_NP_901605-MCO46656717643_072021-O.webp',
		title: 'Diadema tejida',
		category: 'standar',
	},
	{
		id: 3,
		img: 'https://http2.mlstatic.com/D_NQ_NP_847602-MCO47701476325_092021-O.webp',
		title: 'Diadema de tela',
		category: 'new',
	},
	{
		id: 4,
		img: 'http://d2r9epyceweg5n.cloudfront.net/stores/829/766/products/colibri-verde1-67bfe14909ffbb523316255128608849-640-0.jpg',
		title: 'Diadema de tela',
		category: 'new',
	},
	{
		id: 5,
		img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/641/037/products/libertad-rojo1-d7d0a5b562db22869216279454634690-640-0.jpg',
		title: 'Diadema de tela',
		category: 'new',
	},
];

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);

	const { categoriaId } = useParams();

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(productos);
			}, 1000);
		});
		if (categoriaId) {
			getData.then((res) =>
				setData(
					res.filter((productos) => productos.category === categoriaId)
				)
			);
		} else {
			getData.then((res) => setData(res));
		}
	}, [categoriaId]);

	return (
		<>
			<Title greeting={texto} />

			<ItemList data={data} />
		</>
	);
};

export default ItemListContainer;
