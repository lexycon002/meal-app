import React from 'react';
import './mealList.css';

const mealInfo = [
    {
        heading:"Berbeque Burger",
        mealImg : "https://i.ibb.co/N7cPrZ6/berbeque-burger.jpg",
        description: "Calories free",
    },
    {
        heading:"Chessy Burger",
        mealImg : "https://i.ibb.co/0nGHbrz/chessy-burger.jpg",
        description: "Saucy burger",
    },
    {
        heading:"Chicken Burger",
        mealImg : "https://i.ibb.co/NWFs2TX/chicken-burger.jpg",
        description: "100% chicken burger",
    },

]

function MealList() {
  return (
    <div className="meallist__container">
        {mealInfo.map((meal, index)=> (
            <div className="meallist__sm__bg" key={index}>
                <div className="meallist__text">
                    <h4>{meal.heading}</h4>
                    <p>{meal.description}</p>
                    <span>Shop Now</span>
                </div>
            <div className="meallist__img">
                <img src={meal.mealImg} alt="barger__img" />
            </div>
            </div>
        ))}
    </div>
  )
}

export default MealList;