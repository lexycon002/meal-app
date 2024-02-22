import React from 'react'
import './checkout.css';


function CheckOut() {
  return (
    <div className="checkout__container">
        <div className="checkout__banner">
            <h2>Checkout</h2>
        </div>
      <div className="checkout__info">
          {/* <div className="checkout__form__container container__box">
              <h2>Customer Billing Details</h2>
              <form className="form_info">
                  <div className="customer__name --mb form-group">
                    <span>
                      <input  className="form__input" type="text" name="name" required />
                      <label className="label" for="first_name" >First Name</label>
                    </span>
                    <span>
                      <input  className="form__input" type="text" name="name" required />
                      <label className="label__right" for="last_name" >Last Name</label>                    </span>
                  </div>
                  <div className="company__name --mb form-group">
                    <span>
                      <input  className="form__input" type="text" name="name" required />
                      <label className="label" for="company" >Company Name</label>                    </span>
                  </div>
                  <div className="customer__other__info --mb form-group">
                    <span>
                      <input  className="form__input" type="text" name="name" required />
                      <label className="label" for="phone" >Phone Number</label>                    </span>
                    <span>
                      <input  className="form__input" type="text" name="name" required />
                      <label className="label__right" for="email" >Email</label>                    </span>
                  </div>
                  <div className="customer__address form-group">
                    <span>
                      <textarea className="form__input" required></textarea>
                      <label className="label" for="address" >Address</label>
                    </span>
                  </div>
              </form>
          </div> */}
          <div className="checkout__items__container container__box">
              <h2>Your Order</h2>
              <div className="checkout__items__wrapper">
                  <div className="checkout__items">
                      <div className="checkout__heading">
                        <h3>Product</h3>
                        <h4>Total</h4>
                      </div>
                      <div className="checkout__body">
                        <div className="checkout__row">
                          <p>sharwama pizza x8</p>
                          <span>$8.45</span>
                        </div>
                        <div className="checkout__row">
                          <p>chicken breast x2</p>
                          <span>$5.30</span>
                        </div>
                        <div className="checkout__row">
                          <h4>cart subtotal</h4>
                          <span>$13.75</span>
                        </div>
                        <div className="checkout__row">
                          <h4>shipping</h4>
                          <p>free shipping</p>
                        </div>
                        <div className="checkout__row">
                          <h4>order total</h4>
                          <span>$5.30</span>
                        </div>
                      </div>
                  </div>
              </div>
              <div className="checkout__payment__info">
                  <h2>Payment Methods</h2>
                  <div className="bank__payment payment__plan">
                    <span>
                        <input type="radio" />
                        <h5>Direct Bank Transfer</h5>
                    </span>
                    <p>Your payment can be made direclty into our bank account</p>
                  </div>
                  <div className="check__payment payment__plan">
                    <span>
                        <input type="radio" />
                        <h5>Check Payment</h5>
                    </span>
                  </div>
                  <div className="cash__delivery payment__plan">
                    <span>
                        <input type="radio" />
                        <h5>Cash Delivery</h5>
                    </span>
                  </div>
              </div>
              <button>Proceed to payment</button>
          </div>
      </div>
    </div>
  )
}

export default CheckOut