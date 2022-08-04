import './App.css';
import React from 'react';

import { NavBar } from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemLisContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import CartProvider from './context/CartContext';

function App() {
	return (
		<>
			<BrowserRouter>
				<CartProvider>
					<NavBar />
					<Routes>
						<Route path="/" element={<ItemLisContainer />} />
						<Route
							path="/categoria/:categoriaId"
							element={<ItemLisContainer />}
						/>
						<Route path="/cart" element={<Cart />} />
						<Route
							path="/detalle/:detalleId"
							element={<ItemDetailContainer />}
						/>
					</Routes>
				</CartProvider>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
