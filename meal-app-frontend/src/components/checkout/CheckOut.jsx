import React, { useContext, useState } from 'react'
import './checkout.css';
import { CartContext } from "../../context/cart";


function CheckOut() {
  const { getCartTotal, cartItems, } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod ] = useState('');

  // to handle payment method selection
  const paymentMethodSelect = (method) => {
    if (paymentMethod === method) {
      setPaymentMethod('');
    } else {
      setPaymentMethod(method);
    }
  };

  // to apply active class based on payment method selection
  const isActive = (method) => {
    return paymentMethod === method ? 'active' : '';
  }
  const shippingFee = (totalAmount) => {
    if (totalAmount < 100 ) {
      return 15;
    } else if (totalAmount >= 100 && totalAmount <= 200){
        return 20
    } else {
      return 50
    }
  }
const totalShippingFee = getCartTotal() + shippingFee(getCartTotal());
// function to handle printing the order slip
const printOrderSlip = () => {
  window.print();
}
  return (
    <div className="checkout__container">
        <div className="checkout__banner">
            <h2>Checkout</h2>
        </div>
      <div className="checkout__info">
          <div className="checkout__form__container container__box">
              <h2>Customer Billing Details</h2>
              <form className="form_info">
                  <div className="customer__name --mb form-group">
                    <span>
                      <input  className="form__input" type="text" name="name" required />
                      <label className="label" for="first_name" >First Name</label>
                    </span>
                    <span>
                      <input  className="form__input" type="text" name="name" required />
                      <label className="label__right" for="last_name" >Last Name</label>
                    </span>
                  </div>
                  <div className="company__name --mb form-group">
                    <span>
                      <input  className="form__input" type="text" name="name" required />
                      <label className="label" for="company" >Company Name</label>
                    </span>
                  </div>
                  <div className="customer__other__info --mb form-group">
                    <span>
                      <input  className="form__input" type="text" name="name" required />
                      <label className="label" for="phone" >Phone Number</label>
                    </span>
                    <span>
                      <input  className="form__input" type="text" name="name" required />
                      <label className="label__right" for="email" >Email</label>
                    </span>
                  </div>
                  <div className="customer__address form-group">
                    <span>
                      <textarea className="form__input" required></textarea>
                      <label className="label" for="address" >Address</label>
                    </span>
                  </div>
              </form>
          </div>
          <div className="checkout__items__container container__box">
              <h2>Your Order</h2>
              <div className="checkout__items__wrapper">
                  <div className="checkout__items">
                      <div className="checkout__heading">
                        <h3>Product</h3>
                        <h4>Total</h4>
                      </div>
                      <div className="checkout__body">
                        <div className="checkout__head__wrapper">
                        {cartItems.map((item, id)=>(
                          <div className="checkout__row" key={id}>
                            <span className="checkout__title">{item.prod_title} x{item.quantity}</span>
                            <span>${(item.prod_price_2 * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                        </div>
                        <div className="checkout__row checkout__order">
                          <h4>cart subtotal</h4>
                          <span>${getCartTotal().toFixed(2)}</span>
                        </div>
                        <div className="checkout__row checkout__order">
                          <h4>shipping</h4>
                          <span>${(shippingFee(getCartTotal())).toFixed(2)}</span>
                        </div>
                        <div className="checkout__row checkout__order">
                          <h4>order total</h4>
                          <span>${(totalShippingFee).toFixed(2)}</span>
                        </div>
                        <div className="hidden-for-print">Order process successfully</div>
                      </div>
                  </div>
              </div>
              <div className="checkout__payment__info">
                  <h2>Payment Methods</h2>
                  <div className={`bank__payment payment__plan ${isActive('bank')}`} onClick={() => paymentMethodSelect('bank')}>
                    <span>
                        <input type="radio" checked={paymentMethod === 'bank'} readOnly />
                        <h5>Direct Bank Transfer</h5>
                    </span>
                    <p>Your payment can be made direclty into our bank account</p>
                  </div>
                  <div className={`check__payment payment__plan ${isActive('check')}`} onClick={() => paymentMethodSelect('check')}>
                    <span>
                        <input type="radio" checked={paymentMethod === 'check'} readOnly />
                        <h5>Check Payment</h5>
                    </span>
                  </div>
                  <div className={`cash__delivery payment__plan ${isActive('cash')}`} onClick={() => paymentMethodSelect('cash')}>
                    <span>
                      <input type="radio" checked={paymentMethod === 'cash'} readOnly />
                      <h5>Cash Delivery</h5>
                    </span>
                  </div>
              </div>
              <button>Proceed to payment</button>
              <button onClick={()=>printOrderSlip()}>Print order slip</button>
          </div>
      </div>
    </div>
  )
}

export default CheckOut