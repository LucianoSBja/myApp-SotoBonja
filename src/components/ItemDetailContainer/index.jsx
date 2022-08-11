import React, { useEffect, useState } from 'react';
import {getFirestore, doc, getDocs, getDoc} from 'firebase/firestore'
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';

//1- Traer el servidor de firestore
//2- Crear un untero al dato que queremos traer 
//3- Traer el dato con una promesa



export const ItemDetailContainer = () => {
	const [data, setData] = useState({});

	const { detalleId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, 'producto', '1rdIKjGh8x2THPBgdTOO');
		getDoc(queryDoc)
		.then()

	}, []);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
