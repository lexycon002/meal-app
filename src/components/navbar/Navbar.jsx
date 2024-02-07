import React, { useState } from 'react';
import './navbar.css';
import { IoIcons, Io5Icons } from '../../icon'
import shape29 from '../../assets/shape29.png';
import iconBask from '../../assets/icon-basket.png'
import { NavLink } from 'react-router-dom';


function Navbar() {
    const [menuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!menuOpen);
    }
    const handleCloseMenu = () => {
        setIsMenuOpen(false)
    }
    const logo = (
            <div className="navbar__logo">
                <h3>Food<span>Yoo</span></h3>
            </div>
        )
  return (
    <div className="navbar__container">
        <div className="navbar__wrapper">
                {logo}
            <nav className={menuOpen ? "show-menu": "hide-menu"}>
                <div className="close-btn">
                    <Io5Icons.MenuClose onClick={handleCloseMenu}/>
                </div>
                <ul className="navbar__links">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/">Pages</NavLink>
                </li>
                <li>
                    <NavLink to="/">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/">Contact</NavLink>
                </li>
            </ul>
            </nav>

            <div className="navbar__search">
                <input type="search" placeholder="Search" id="search" />
                <span> <IoIcons.Search /></span>
            </div>
            <div className="navbar__items">
                <span><img src={shape29} alt="shape__29" /> </span>
                <span>Book a Table</span>
            </div>
            <div className="navbar__cart">
                <span><img src={iconBask} alt="icon__bask" /></span>
                <span>8items - $14.35</span>
            </div>
            <div className="open-btn">
                <IoIcons.MenuBar onClick={handleToggleMenu}/>
            </div>
        </div>
    </div>
    )
}

export default Navbar