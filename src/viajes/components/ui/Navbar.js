import React from "react";
import './Navbar.css';

export const Navbar = () => {
    return (
        <div id="content">
            <nav id="navbar">
                <ul>
                    <li> <a href="#"> Perfil </a> </li>
                    <li> <a href="/contacto"> Contacto </a> </li>
                    <li> <a href="/viajes"> Viajes </a> </li>
                    <li> <a href="/main"> Página principal </a> </li>
                </ul>
            </nav>
        </div>
    )
}