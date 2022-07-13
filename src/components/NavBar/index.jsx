import React from 'react';
import './navBar.css';
import logo from './logo.svg';
import CartWidget from '../CartWidget';

export const NavBar = () => {
	return (
		<header className="container">
			<div className="logo">
				<img src={logo} className="App_logo" alt="logo" />
			</div>
			<nav className="nav">
				<ul className="nav_links">
					<li>
						<a href=" # ">Productos</a>
					</li>
					<li>
						<a href=" # ">Mi Historia</a>
					</li>
					<li>
						<a href=" # ">Contacto</a>
					</li>
				</ul>
			</nav>
			<div>
				<CartWidget />
			</div>
		</header>
	);
};
