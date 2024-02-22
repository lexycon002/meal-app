import React, {useState, useEffect } from 'react';
import './recipeProduct.css';
import pizzaImg from '../../assets/h1_pizza.png';
import apppleImg from '../../assets/banner_image_2.png'
import productData from './productItems';


function RecipeProduct() {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 6) % productData[0].all_products.length);
    }, 5000);

    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  let productArray = productData[0].all_products.slice(currentIndex, currentIndex + 6);
  // If there are less than 6 items in productArray, fill the gap with items from the beginning
  if (productArray.length < 6) {
    const remainingItems = 6 - productArray.length;
    productArray = [
      ...productArray,
      ...productData[0].all_products.slice(0, remainingItems)
    ];
  }
    const truncate = (text, n) => {
        if(text.length > n){
            const trunc = text.substring(0, n).concat("...");
            return trunc;
        }
        return text;
    }
  return (
    <>
    <div className='recipe__product__container'>
        <div className="recipe__products">
            <img src={pizzaImg} alt="pizza_product" />
        </div>
        <div className="recipe__product__items">
            <div className="recipe__top__item">
                <h3>Top Recipes</h3>
                <img src={apppleImg} alt="apple__img" />
            </div>
            <div className="product__wrapper">
            {productArray.map((recipe, index)=> (
                <div className="recipe__product__list" key={index}>
                    <div className="recipe__item__bg">
                        <div className="recipe__img__cont">
                            <img src={recipe.prod_img} alt="" />
                        </div>
                        <div className="recipe__info__cont">
                            <h3>{recipe.prod_title}</h3>
                            <p>{truncate(recipe.prod_desc, 5)}</p>
                            <span>{`$${recipe.prod_price_1}`}</span>
                            <span>{`$${recipe.prod_price_2}`}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
    </>
  )
}

export default RecipeProduct;