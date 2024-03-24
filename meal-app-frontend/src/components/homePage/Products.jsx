import React,{ useEffect, useContext, useState } from 'react';
import './products.css';
import { Io5Icons } from '../../icon';
import productData from "./productItems";
import { useSpring, animated } from 'react-spring';
import { CartContext } from '../../context/cart';



function Products() {
    const [ selectproductOption, setSelectProductOption] = useState("all_products");
    const [selectedProductData, setSelectedProductData] = useState([]);
    const [ displayedItems, setDisplayedItems] = useState(5);
    const [isActive, setIsActive]= useState("all_products");
    const { addToCart } = useContext(CartContext);



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

    // function to load more item/product
    const loadMoreItems = () => {
        setDisplayedItems(prevCount => prevCount + 5);
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
        <div className="products__items__cont__wrapper">
            {selectedProductData && selectedProductData.slice(0, displayedItems).map((prod, index) => (
                    <AnimatedProductItem key={index} prod={prod} index={index} addToCart={addToCart} />
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

    //Function to short to shorten a long text
    const truncate = (text, n) => {
        if(text.length > n){
            const trunc = text.substring(0, n).concat("...");
            return trunc;
        }
        return text;
    }
    const AnimatedProductItem = ({ prod, index, addToCart }) => {
    const propsContainer = useSpring({ opacity: 1, from: { opacity: 0 } });
    const propsInner = useSpring({ transform: 'translateY(0px)', from: { transform: 'translateY(-50px)' } });

    return (
        <animated.div style={propsContainer}>
            <animated.div style={propsInner}>
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
                                        <span className="other_icons"><Io5Icons.Cart className="icon__click"  onClick={()=> addToCart(prod)} /></span>
                                    </div>
                                </div>
                        </div>
                </div>
            </animated.div>
        </animated.div>
    );
};
export default Products