import React from "react";
import "./navBar.css";
import logo from "./logo.svg";
import carrito from "./carrito-de-compras.svg";

export const NavBar = () => {
  return (
    <header className="container">
      <div className="logo">
        <img src={ logo } className="App_logo" alt="logo" />
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
      <img src={ carrito } className="btn_carrito"  alt="carrito" />
    </header>
  );
};
