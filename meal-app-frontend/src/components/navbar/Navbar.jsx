import React, { useState, useContext } from 'react';
import './navbar.css';
import { IoIcons, Io5Icons } from '../../icon'
import iconBask from '../../assets/icon-basket.png'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/cart';
// import myImage from '../../assets/myImage03.png'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectIsLoggedIn } from '../../redux/authSlice';


function Navbar() {
    const [menuOpen, setIsMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const { getCartTotal,getTotalCartItems} = useContext(CartContext);


    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const handleLogout = () => {
    dispatch(logout());
    };

    const handleLogin = () => {
    dispatch(login());
    };

    const handleToggleMenu = () => {
        setIsMenuOpen(!menuOpen);
    }
    const handleCloseMenu = () => {
        setIsMenuOpen(false)
    }
    const cartToggle = () => {
        setCartOpen(!cartOpen);
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
                    <NavLink to="#">Home</NavLink>
                </li>
                <li>
                    <NavLink to="#">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="#">Pages</NavLink>
                </li>
                <li>
                    <NavLink to="#">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="#">Contact</NavLink>
                </li>
                <li className="navbar__auth">
                    {isLoggedIn ? (
                    <NavLink className="navbar__login --mr" onClick={handleLogin} to="/login">Login</NavLink>
                    ) : (
                    <NavLink className="navbar__logout --mr" onClick={handleLogout} to="/login">Logout</NavLink>
                    )}
                </li>
            </ul>
            </nav>


        <div className="navbar__cart">
            <NavLink className="cart__view__link" to="/myCart"><img src={iconBask} alt="icon__bask" onClick={() => cartToggle()} /></NavLink>
            <span>{getTotalCartItems()}items : ${getCartTotal().toFixed(2)}</span>
            <span className="cart__item__mobile">{getTotalCartItems()}</span>
        </div>
            <div className="open-btn">
                <IoIcons.MenuBar onClick={handleToggleMenu}/>
            </div>
        </div>
    </div>
    )
}

export default Navbar
