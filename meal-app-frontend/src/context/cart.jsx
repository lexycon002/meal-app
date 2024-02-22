import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [incrementBtn, setIncrementBtn] = useState(0)
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [cartItems, setCartItems] = useState(
        localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : []
    );

    // To add item to cart
    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            toast.success("Item already in cart");
            return;
        }
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
        setIsAddedToCart(true);
        toast.success("Item added to cart successfully");
        setIncrementBtn(incrementBtn + 1);
    };

    // To remove item from the cart
    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {

            if (isItemInCart.quantity === 1) {
                setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
                // decrease incrementBtn
                setIncrementBtn(incrementBtn - 1);
            } else if(isItemInCart.quantity > 0 ) {
                setCartItems(
                    cartItems.map((cartItem) =>
                        cartItem.id === item.id
                            ? {...cartItem, quantity: cartItem.quantity - 1 } //if the quantity of the quantity of the item is greater than 1, decrease the quantity of the item
                            : cartItem
                    )
                );
            }
            // decrease incrementBtn
            if (incrementBtn > 0) {
                setIncrementBtn(incrementBtn - 1);
            }
        }
    };

    // To clear cart
    const clearCart = () => {
        setCartItems([]); // set the cart item to an empty array
    };

    // To get cart total
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => {
        return total + (item.prod_price_2 * item.quantity);
    }, 0);

        // calculate the total price of the item in the cart
    };
    const getTotalCartItems = () => {
        return  cartItems.reduce((total, item) => total + item.quantity, 0);
    }
        // To increase the quantity of an item in the cart
    const increaseQuantity = (itemId) => {
        setCartItems(prevCartItems => prevCartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    };

        // To decrease the quantity of an item in the cart
    const decreaseQuantity = (itemId) => {
        setCartItems(prevCartItems => prevCartItems.map(item => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }));
    };
    // To remove item from the cart
        const deleteFromCart = (itemId) => {
            setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
    };

    // To store items in the local storage
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // To retrieve items from the local storage
    useEffect(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                getTotalCartItems,
                incrementBtn,
                increaseQuantity,
                decreaseQuantity,
                deleteFromCart,
                isAddedToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
