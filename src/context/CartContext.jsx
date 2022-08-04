import React, { useState, useContext } from 'react';

const CartContex = React.createContext([]);

export const useCartContext = () => useContext(CartContex);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const clearCart = () => setCart([]);

	const isIncart = (id) => {
		return cart.find((producto) => producto.id === id) ? true : false;
	};

	const removeProducto = (id) =>
		setCart(cart.filter((producto) => producto.id !== id));

	const addProducto = (item, quantity) => {
		if (isIncart(item.id)) {
			setCart(
				cart.map((producto) => {
					return producto.id === item.id
						? { ...producto, quantity: producto.quantity + quantity }
						: producto;
				})
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};

	return (
		<CartContex.Provider
			value={{
				clearCart,
				isIncart,
				removeProducto,
				addProducto,
			}}
		>
			{' '}
			{children}{' '}
		</CartContex.Provider>
	);
};

export default CartProvider;
