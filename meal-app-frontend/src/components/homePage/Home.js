import Banner  from './Banner';
import MealProduct from './MealProduct';
import MealList from './MealList';
import RecipeProduct from './RecipeProduct';
import Discount from './Discount';
import Products from './Products';
import MealReview from  './MealReview';
import TeamList from './TeamList';
import ClientReview from './ClientReview';


function Home() {
  return (
    <div className="home-page">
        <>
            <Banner />
            <MealProduct />
            <MealList />
            <RecipeProduct />
            <Discount />
            <Products />
            <MealReview />
            <TeamList />
            <ClientReview />
        </>
    </div>
  );
}

export default Home;
