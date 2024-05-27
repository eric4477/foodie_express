import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import { useState, useEffect } from "react";
import FoodItem from "../FoodItem/FoodItem";
import { filterCategories } from "../../api";

function FoodDisplay({ currCategory }) {
  const { meals, setMeals } = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const result = await filterCategories(currCategory);
        const newMeals = result.meals.map((meal) => ({
          ...meal,
          price: meal.price || 0,
        }));

        setMeals(newMeals);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryData();
  }, [currCategory]);

  if (isLoading) return <div className="spinner"></div>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {meals.map((meal) => {
          return (
            <FoodItem
              key={meal.idMeal}
              id={meal.idMeal}
              name={meal.strMeal}
              price={meal.price}
              description={
                "Food provides essential nutrients for overall health and well-being"
              }
              image={meal.strMealThumb}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
