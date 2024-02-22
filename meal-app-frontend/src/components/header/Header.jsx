import React from 'react';
import './header.css';
import { FaIcons , ImIcons } from "../../icon";



function Header() {
  return (
    <div className="header-container">
        <div className="header__nums">
            <span className="phone_icon">
                <FaIcons.Phone />
            </span>
            <span className="phone_num">+2348032748696</span>
            <span className="email">hammadawowole@gmail.com</span>
        </div>
        <div className="header__icons">
            <div className="icons">
                <span><ImIcons.Facebook /></span>
                <span><FaIcons.XTwitter /></span>
                <span><FaIcons.Instagram /></span>
                <span><FaIcons.Discord /></span>
                <span><FaIcons.Google /></span>
            </div>
        </div>
    </div>
  )
}

export default Header;