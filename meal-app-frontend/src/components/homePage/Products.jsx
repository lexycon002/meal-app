import React,{ useEffect, useContext, useState } from 'react';
import './products.css';
import { Io5Icons } from '../../icon';
import productData from "./productItems";
import { motion } from "framer-motion";
import { CartContext } from '../../context/cart';





function Products() {
    // const [menuClose, setMenuClose] = useState(false)
    const [ selectproductOption, setSelectProductOption] = useState("all_products");
    const [selectedProductData, setSelectedProductData] = useState([]);
    const [ displayedItems, setDisplayedItems] = useState(5);
    const [isActive, setIsActive]= useState("all_products");
    // const [ selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart,message} = useContext(CartContext);



    useEffect(() => {
        if (productData && productData.length > 0) {
            setSelectedProductData(productData[0][selectproductOption] || []);
        }
    }, [selectproductOption]);

    const handleClick = (option) => {
        setSelectProductOption(option);
        setDisplayedItems(5);
        setIsActive(option);
    }
    // const handleCloseBtn = () => {
    //     setMenuClose(true);
    //     setSelectedProduct(null);
    //     setMenuClose(false);
    // }
    // const productClick = (product) => {
    //     setSelectedProduct(product);
    // }
    const loadMoreItems = () => {
        setDisplayedItems(prevCount => prevCount + 5);
    }
    const truncate = (text, n) => {
        if(text.length > n){
            const trunc = text.substring(0, n).concat("...");
            return trunc;
        }
        return text;
    }
  return (
    <div className="products__container">
        <div className="product__text">
            <h3>All product</h3>
            <div className="product__list">
                <button className={isActive === "all_products" ? "active" : ""} onClick={()=> handleClick("all_products")}>All Product</button>
                <button className={isActive === "pizza" ? "active" : ""}    onClick={()=> handleClick("pizza")}>Pizza</button>
                <button className={isActive === "sushi" ? "active" : "" }   onClick={()=> handleClick("sushi")}>Sushi</button>
                <button className={isActive === "salad" ? "active" : "" }   onClick={()=> handleClick("salad")}>Salad</button>
                <button className={isActive === "burger" ? "active" : "" }  onClick={()=> handleClick("burger")}>Burger</button>
                <button className={isActive === "sharwama" ? "active" : ""} onClick={()=> handleClick("sharwama")}>Shawarma</button>
            </div>
        </div>
        {/* {selectedProduct && (
        <div className="selected__product__info__container">
            <div className={`selected__product__wrapper ${menuClose ? "product__blur"  : ""}`}>
                <div className="selected__product__img">
                    <div className="selected_img_gallery">
                        <img src={selectedProduct.prod_img} alt="prod_img"/>
                        <img src={selectedProduct.prod_img} alt="prod_img"/>
                        <img src={selectedProduct.prod_img} alt="prod_img"/>
                        <img src={selectedProduct.prod_img} alt="prod_img"/>
                    </div>
                    <img className="display__img"  src={selectedProduct.prod_img} alt="" />
                </div>
                <div className="selected__product__infos">
                    <div className="selected__product__close-btn">
                        <Io5Icons.MenuClose  className="close__btn" onClick={()=> handleCloseBtn()}/>
                    </div>
                    <h3>{selectedProduct.prod_title}</h3>
                    <p>{selectedProduct.prod_desc}</p>
                    <span className="old_price">{`$${(selectedProduct.prod_price_1).toFixed(2)}`}</span>
                    <span className="new_price">{`$${(selectedProduct.prod_price_2).toFixed(2)}`}</span>
                    <div className="select__ratings">
                        <span className="rating">{selectedProduct.IconFilled}</span>
                        <span className="rating">{selectedProduct.IconFilled}</span>
                        <span className="rating">{selectedProduct.IconFilled}</span>
                        <span className="rating">{selectedProduct.IconFilled}</span>
                        <span className="n_rating">{selectedProduct.IconOutline}</span>
                    </div>
                    <div className="item__incre__cont">
                        <div className="add_to_cart">
                            <button onClick={()=>addToCart(selectedProduct, selectedProduct)}>Add to cart</button>
                            <p className="update__cart">{message}</p>
                        </div>
                    </div>
                        <div className="share__btn">
                            <h3>Share :</h3>
                            <div className="share_icons">
                                <span className="share_icon"><ImIcons.Facebook /></span>
                                <span className="share_icon"><FaIcons.XTwitter /></span>
                                <span className="share_icon"><FaIcons.Instagram /></span>
                                <span className="share_icon"><FaIcons.Discord /></span>
                                <span className="share_icon"><FaIcons.Google /></span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        )} */}
        <div className="products__items__cont__wrapper">
            {selectedProductData && selectedProductData.slice(0, displayedItems).map((prod, index)=> (
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}>
                <motion.div
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div className="product__items__container">
                        <div className="product__items__bg">
                            <img src={prod.prod_img} alt="" />
                        </div>
                        <div className="products__ratings">
                            <span className="rating">{prod.IconFilled}</span>
                        <span className="rating">{prod.IconFilled}</span>
                        <span className="rating">{prod.IconFilled}</span>
                        <span className="rating">{prod.IconFilled}</span>
                        <span className="n_rating">{prod.IconOutline}</span>
                        </div>
                        <div className="products__list__text">
                                <h3>{prod.prod_title}</h3>
                                <p>{truncate(prod.prod_desc, 50)}</p>
                                <div className="other_list_cont">
                                    <div className="price_cont">
                                        <span>{`$${(prod.prod_price_1).toFixed(2)}`}</span>
                                        <span>{`$${(prod.prod_price_2).toFixed(2)}`}</span>
                                    </div>
                                    <div className="icon_sm_cont">
                                        {/* <span className="other_icons"><IoIcons.Heart className="icon__click" /></span> */}
                                        {/* <span className="other_icons"><IoIcons.Eye className="icon__click" onClick={()=> productClick(prod)}/></span> */}
                                        <span className="other_icons"><Io5Icons.Cart className="icon__click"  onClick={()=> addToCart(prod)} /></span>
                                    </div>
                                </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            ))}
        </div>
            {selectedProductData.length > displayedItems && (
                <div className="load__items">
                    <button onClick={loadMoreItems} className="load__more">Load More</button>
                </div>
            )}
    </div>
  )
}

export default Products