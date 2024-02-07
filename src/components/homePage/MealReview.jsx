import React from 'react'
import './mealreview.css';


const reviewData = [
  {
    title: "530+",
    desc: "pizza",
  },
  {
    title: "180+",
    desc: "burger",
  },
  {
    title: "250+",
    desc: "drink",
  },
]


function MealReview() {
  return (
    <div className="meal__review__container">
      {reviewData.map((review, index)=>(
        <div className="meal__review__item" key={index}>
            <p>{review.title}</p>
            <span>{review.desc}</span>
        </div>
      ))}
    </div>
  )
}

export default MealReview