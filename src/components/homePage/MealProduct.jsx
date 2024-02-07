import React from 'react';
import './mealproduct.css';

function MealProduct({ mealData, isLoading }) {
  return (
    <div className="mealproduct__container">
      {!isLoading && Array.isArray(mealData) && mealData.slice(0, 12).map((meal, index) => (
        <div className="mealproduct" key={index}>
          <img src={meal.img} alt={meal.name} />
          <span>{meal.name}</span>
        </div>
      ))}
    </div>
  );

}

export default MealProduct;
