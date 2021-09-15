import React from 'react'
import './style/navbar.css'
import menu from '../assets/ico/menu.svg'
import iconav from '../assets/img/nav.png'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav__container">
                <div className="navbar__logo">
                    <h4>soy un logo</h4>
                </div>
                <div className="navbar__nav">
                    <img src={iconav} alt="" />
                    <div className="sep"></div>
                    <button>
                        <img src={menu} alt="" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
