import React from 'react';
import './navBar.css';
import logo from './logo.svg';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<header className="container">
			<div className="logo">
				<img src={logo} className="App_logo" alt="logo" />
			</div>
			<nav className="nav">
				<ul className="nav_links">
					<li>
						<NavLink className="nav__links" to="/">
							Productos
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__links" to="/categoria/new">
							Nuevos
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__links" to="/sobremi">
							Mi Historia
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__links" to="/contacto">
							Contacto
						</NavLink>
					</li>
				</ul>
			</nav>
			<div>
				<NavLink to="/cart">
					<CartWidget />
				</NavLink>
			</div>
		</header>
	);
};
