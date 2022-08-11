import React, { useEffect, useState } from 'react';
import Title from '../Title';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

//1- Traer el servidor de firestore
//2- Crear un untero al dato que queremos traer 
//3- Traer el dato con una promesa

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);

	const { categoriaId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, 'productos');
		


		if (categoriaId) {
			const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
			getDocs(queryFilter)
			.then(res => setData(res.docs.map(producto =>({id: producto.id, ...producto.data()}))))
		} else {
			getDocs(queryCollection)
			.then(res => setData(res.docs.map(producto =>({id: producto.id, ...producto.data()}))))
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
