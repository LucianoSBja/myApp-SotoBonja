import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';

const producto = {
	id: 1,
	img: 'https://http2.mlstatic.com/D_NQ_NP_953586-MCO45131846536_032021-O.webp',
	title: 'Diadema de lazo',
};

export const ItemDetailContainer = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(producto);
			}, 3000);
		});

		getData.then((res) => setData(res));
	}, []);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
