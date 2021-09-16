import React from 'react'
import './style/navbar.css'
import menu from '../assets/ico/menu.svg'
import iconav from '../assets/img/nav.png'
import logo from '../assets/img/logo.png'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav__container">
                <div className="navbar__logo">
                    <img src={logo} alt="" />
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
