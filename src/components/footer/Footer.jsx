import React from 'react'
import './footer.css';
import visa from '../../assets/visa.png'
import payPal from '../../assets/paypal.png'
import amercianExpress from '../../assets/amarican_express.png'
import masterCard from '../../assets/master_card.png'
import { FaIcons , ImIcons } from "../../icon";


function Footer() {

  const date = new Date();
  const year = date.getFullYear()
  return (
    <div className="footer__container">
        <div className="footer__wrapper">
        <div className="footer__payment">
            <a href="#">
                <span> <img src={masterCard} alt="" /> </span>
            </a>
            <a href="#">
                <span> <img src={visa} alt="" /> </span>
            </a>
            <a href="#">
                <span> <img src={amercianExpress} alt="" /> </span>
            </a>
            <a href="#">
                <span> <img src={payPal} alt="" /> </span>
            </a>
        </div>
        <div className="footer__copyright">
            <span>Copyright &copy; <span className="date">{year}</span> All right reserved | Built by Lgraphics</span>
        </div>
        <div className="footer__icons">
          <a href="#">
            <span><ImIcons.Facebook /></span>
          </a>
          <a href="#">
            <span><FaIcons.XTwitter /></span>
          </a>
          <a href="#">
            <span><FaIcons.Instagram /></span>
          </a>
          <a href="#">
            <span><FaIcons.Discord /></span>
          </a>
          <a href="#">
            <span><FaIcons.Google /></span>
          </a>
        </div>
        </div>
    </div>
  )
}

export default Footer