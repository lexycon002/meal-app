import React, { useState, useEffect }from 'react'
import axios from 'axios';
import MealProduct from './MealProduct';
import Loader from '../loader/Loader';
import RecipeProduct from './RecipeProduct';

function Api() {
  const [pizzaData, setPizzaData] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      try {
        const response = await axios.get('/products.json');
        const data = await response.data;
      // console.log(data);
      setPizzaData(data);
      setIsLoading(false);
      } catch (error) {
        console.log('Errro while fetching data', error)
        setIsLoading(false);
      }
    };
    fetchData()
  }, [])
  return (
    <div>
      {isLoading}
      <MealProduct mealData={pizzaData} isLoading={isLoading} />
      {/* <RecipeProduct recipe={pizzaData} /> */}
    </div>
  )
}

export default Api