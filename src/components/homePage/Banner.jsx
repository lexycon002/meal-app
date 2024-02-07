import React from 'react'
import './banner.css';
import bannerImg from '../../assets/h1_pizza.png'

function Banner() {
  return (
    <div className="banner__container">
      <div className="banner__overlay"></div>
        <div className="banner__contents">
          <div className="banner__titles">
            <div className="banner__big_text">
                Unlimited medium <span>pizzas</span>
            </div>
            <div className="banner__small_text">
              medium 2-topping* pizza
            </div>
            <div className="banner__description">
              *Additional charge for premium toppings.
              Minimum of 2 required
            </div>
            <div className="banner__btn">
              <div className="banner__order">
                <button>Order Now</button>
              </div>
              <div className="banner__amount">
                  <span>$25.88</span>
                  <span>$15.33</span>
              </div>
            </div>
          </div>
          <div className="banner__image">
              <img src={bannerImg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Banner