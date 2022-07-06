import React from 'react';

export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='nav__brand'>
                    <a className='nav__link' href=" # "> Logo</a>
                </div>
                <ul>
                    <li>
                        <a href=" # "> Categoria</a>
                    </li>
                    <li>
                        <a href=" # "> </a>Eventos
                    </li>
                    <li>
                        <a href=" # "> </a>Carrito
                    </li>
                </ul>
            </nav>
        </div>
    );

}