import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealProduct from '../mealproduct/MealProduct';
import Loader from '../loader/Loader';

function Api() {
  const [pizzaData, setPizzaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      try {
        // Fetch data from rapidAPI
        const pizzaOptions = {
          method: 'GET',
          url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
          headers: {
            'X-RapidAPI-Key': '5933b91fb7mshbe3251d3be1dee6p149982jsn80f7ca5ae827',
            'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
          }
        };

        const pizzaResponse = await axios.request(pizzaOptions);
        console.log(pizzaResponse.data)
        // setPizzaData(pizzaResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      {isLoading && <Loader />}
      <MealProduct mealData={pizzaData} isLoading={isLoading} />
    </div>
  );
}

export default Api;
