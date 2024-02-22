import React, { useContext, useEffect, useState } from 'react';
import './banner.css';
import { CartContext } from '../../context/cart';
import productData from './productItems';

function Banner() {
  const { addToCart } = useContext(CartContext);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const productInfo = productData[0].all_products;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % productInfo.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [productInfo.length]);

  const OrderNow = () => {
    addToCart(productInfo[currentProductIndex]);
  };

  return (
    <div className="banner__container">
      <div className="banner__overlay"></div>
      <div className="banner__contents">
        <div className="banner__titles">
          <div className="banner__big_text">
            Endless <span>pizza</span> delight
          </div>
          <div className="banner__small_text">Grab a slice, or ten!</div>
          <div className="banner__description">
            Dive into unlimited flavors and eat to your heart's content
          </div>
          <div className="banner__btn">
            <div className="banner__order">
              <button onClick={OrderNow}>Order Now</button>
            </div>
            <div className="banner__amount">
              <span>{`$${(productInfo[currentProductIndex].prod_price_2).toFixed(2)}`}</span>
              <span>{`$${(productInfo[currentProductIndex].prod_price_1).toFixed(2)}`}</span>
            </div>
          </div>
            <p className="">{productInfo[currentProductIndex].prod_title}</p>
        </div>
        <div className="banner__image">
          <img src={productInfo[currentProductIndex].prod_img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
