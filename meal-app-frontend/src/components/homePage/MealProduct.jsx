import React from 'react';
import './mealproduct.css';
import productData from './productItems';

function MealProduct() {
  const productArray = productData.find(item =>
        item.hasOwnProperty("all_products")).all_products;
  return (
    <div className="mealproduct__container">
        {productArray.map((product, index)=> (
            <div className="mealproduct" key={index}>
                <img src={product.prod_img} alt={product.prod_title} />
                <span>{product.prod_title}</span>
            </div>
        ))}

    </div>
  );

}

export default MealProduct;
