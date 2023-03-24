import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <div className='navbar__logo'>
<img src="logo.png" alt="Logo de l'agence Kasa"/>
        </div>
        <div>Accueil</div>
        <div>A propos</div>
        </nav>
  );
}

export default Navbar;