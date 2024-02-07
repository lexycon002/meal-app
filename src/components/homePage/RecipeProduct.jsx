import React from 'react';
import './recipeProduct.css';
import pizzaImg from '../../assets/h1_pizza.png';
import apppleImg from '../../assets/banner_image_2.png'




const recipeData = [
      {
        recipeImg : "https://i.ibb.co/44Sf74P/7-600x600.png",
        title : "Tandoori Pizza",
        desc : "pasta",
        price_1 : "12.60",
        price_2 : "8.60",
      },
      {
        recipeImg : "https://i.ibb.co/qDsh6p2/4-600x600.png",
        title : "Margherita",
        desc : "chicken",
        price_1 : "15.25",
        price_2 : "6.30",
      },
      {
        recipeImg : "https://i.ibb.co/VQHpR4c/h1-pizza.png",
        title : "Veggie Supreme",
        desc : "veggie",
        price_1 : "10.25",
        price_2 : "6.25",
      },
      {
        recipeImg : "https://i.ibb.co/PC883zj/6-600x600.png",
        title : "Masala Pizza",
        desc : "chicken",
        price_1 : "11.35",
        price_2 : "6.25",
      },
      {
        recipeImg : "https://i.ibb.co/jb1Y3Yg/8-600x600.png",
        title : "Kebab Surprise",
        desc : "chicken",
        price_1 : "13.45",
        price_2 : "5.30",
      },
      {
        recipeImg : "https://i.ibb.co/SxdLLpR/11.png",
        title : "Pepperoni Pizza",
        desc : "veggie",
        price_1 : "10.55",
        price_2 : "4.50",
      },

]
function RecipeProduct() {
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
            {recipeData.map((recipe, index)=>(
                <div className="recipe__product__list" key={index}>
                    <div className="recipe__item__bg">
                        <div className="recipe__img__cont">
                            <img src={recipe.recipeImg} alt="" />
                        </div>
                        <div className="recipe__info__cont">
                            <h3>{recipe.title}</h3>
                            <p>{recipe.desc}</p>
                            <span>{`$${recipe.price_1}`}</span>
                            <span>{`$${recipe.price_2}`}</span>
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

export default RecipeProduct