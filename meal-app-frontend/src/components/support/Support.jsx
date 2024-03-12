import React from 'react'
import './support.css';
import { FaIcons, MdIcons } from '../../icon';
import pizza from '../../assets/loader.png'
import { NavLink } from 'react-router-dom';

const supportData = [
    {
      sup_icon:<FaIcons.Truck className="icon_truck" />,
      sup_title:"Free Delivery",
      sup_desc: "We offer free delivery on product over $50"
    },
    {
      sup_icon:<FaIcons.DollarSign className="icon_truck" />,
      sup_title:"30 days returns guarantee",
      sup_desc: "Products purchased can be return within a month of purchase if found spoilt"
    },
    {
      sup_icon:<FaIcons.LifeRing className="icon_truck" />,
      sup_title:"27/4 online support",
      sup_desc: "We offer full day service to all customers"
    },
]

function Support() {

  return (
    <div className="support__container">
        <div className="support__content__wrapper">
          {supportData.map((sup, index) => {
            const { sup_icon, sup_title, sup_desc } = sup; // Destructure inside the map function
      return (
          <div className="support__content" key={index}>
            <div className="support__icon">
              {sup_icon}
            </div>
          <div className="support__text">
            <h3>{sup_title}</h3>
            <p>{sup_desc}</p>
          </div>
        </div>
      );
    })}
      </div>
                  {/* SUPPORT INFO CONTAINER */}
        <div className="support__info__container">
            <div className="support__info support__info_1">
              <div className="logo">
                <h3>Food<span>Yoo</span></h3>
              </div>
              <div className="support__text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Unde nobis nisi, eum velit voluptate nam totam et excepturi
                  molestiae voluptatibus voluptatem ipsam.
                </p>
              </div>
              <div className="support__contact__info">
                <div className="contact__num">
                  <span className="contact__icon"><FaIcons.Mobile /> </span>
                  <span className="contact__comm">+2348032748696</span>
                </div>
                <div className="contact__email">
                  <span className="contact__icon"> <MdIcons.Email /></span>
                  <span className="contact__comm">
                    <a href="mailto:hammadawowole@gmail.com">hammadawowole@gmail.com</a>
                  </span>
                </div>
                <div className="contact__address">
                  <span className="contact__icon"><FaIcons.Location/></span>
                  <span className="contact__comm">
                    123 street, old trafford, new york.
                  </span>
                </div>
              </div>
            </div>
            <div className="support__info support__info_2">
                <h4>information</h4>
                  <div className="support__info__list">
                    <li><NavLink to="/">delivery information</NavLink></li>
                    <li><NavLink to="/">secure payment</NavLink></li>
                    <li><NavLink to="/">about us </NavLink></li>
                    <li><NavLink to="/">Top Sellers</NavLink></li>
                    <li><NavLink to="/">privacy policy</NavLink></li>
                  </div>
            </div>
            <div className="support__info support__info_3">
                <h4>Customer Support</h4>
                <div className="support__info__list">
                  <li><NavLink to="/">my account</NavLink></li>
                  <li><NavLink to="/">shopping cart</NavLink></li>
                  <li><NavLink to="/">blog</NavLink></li>
                  <li><NavLink to="/">order history</NavLink></li>
                  <li><NavLink to="/">order tracking</NavLink></li>
                </div>
            </div>
            <div className="support__info support__info_4">
                <h4>instagram</h4>
                <div className="support__info__gallery">
                    <div className="img_cont">
                      <NavLink>
                        <img src={pizza} alt="" />
                        <span> <FaIcons.Instagram className="icon_gal" /></span>
                      </NavLink>
                    </div>
                    <div className="img_cont">
                      <NavLink>
                        <img src={pizza} alt="" />
                        <span> <FaIcons.Instagram className="icon_gal" /></span>
                      </NavLink>
                    </div>
                    <div className="img_cont">
                      <NavLink>
                        <img src={pizza} alt="" />
                        <span> <FaIcons.Instagram className="icon_gal" /></span>
                      </NavLink>
                    </div>
                    <div className="img_cont">
                      <NavLink>
                        <img src={pizza} alt="" />
                        <span> <FaIcons.Instagram className="icon_gal" /></span>
                      </NavLink>
                    </div>
                    <div className="img_cont">
                      <NavLink>
                        <img src={pizza} alt="" />
                        <span> <FaIcons.Instagram className="icon_gal" /></span>
                      </NavLink>
                    </div>
                    <div className="img_cont">
                      <NavLink>
                        <img src={pizza} alt="" />
                        <span> <FaIcons.Instagram className="icon_gal" /></span>
                      </NavLink>
                    </div>
                    <div className="img_cont">
                      <NavLink>
                        <img src={pizza} alt="" />
                        <span> <FaIcons.Instagram className="icon_gal" /></span>
                      </NavLink>
                    </div>
                    <div className="img_cont">
                      <NavLink>
                        <img src={pizza} alt="" />
                        <span> <FaIcons.Instagram className="icon_gal" /></span>
                      </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support