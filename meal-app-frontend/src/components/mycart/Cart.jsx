import React, { useContext } from 'react';
import "./cart.css";
import {MdIcons, FaIcons } from "../../icon";
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/cart';
import Products from '../homePage/Products';

function Cart() {
    const { cartItems, deleteFromCart, decreaseQuantity, increaseQuantity, getCartTotal } = useContext(CartContext);

    return (
        <div>
            <div className="cart__items__cont">
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <div className="cart__item" key={item.id}>
                            <div className="cart__img">
                                <span><img src={item.prod_img} alt="" /></span>
                            </div>
                            <div className="cart__info__cont">
                                <div className="cart-info">
                                    <div className="item__title">{item.prod_title}</div>
                                    <div className="item__price">${(item.prod_price_2 * item.quantity).toFixed(2)}</div>
                                    <div className="cart_incre_button">
                                        <button className="decrease btn math_operator" onClick={() => decreaseQuantity(item.id)}>
                                            <FaIcons.Minus className="operator" />
                                        </button>
                                        <div className="number btn">{item.quantity}</div>
                                        <button className="increase btn math_operator" onClick={() => increaseQuantity(item.id)}>
                                            <FaIcons.Plus className="operator" />
                                        </button>
                                    </div>
                                </div>
                                <div className="cart__info__del">
                                    <span><MdIcons.Delete onClick={() => deleteFromCart(item.id)} /></span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="empty__cart">Your Cart is Empty</p>
                )}
                {cartItems.length > 0 && (
                    <div className="cart__sub__total">
                        <div className="sub__total">
                            <p>Subtotal:</p>
                            <span>${getCartTotal().toFixed(2)}</span>
                        </div>
                        <div className="cart__checkout">
                            <NavLink className="checkout__link" to="/checkout">Check Out</NavLink>
                        </div>
                    </div>
                )}
            </div>
            <Products />
        </div>
    );
}

export default Cart;
