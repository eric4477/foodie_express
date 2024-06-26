import { createContext, useState } from "react";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [meals, setMeals] = useState([]);
  const [allMeals, setAllMeals] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => {
        return { ...prev, [itemId]: 1 };
      });
    } else {
      setCartItems((prev) => {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      });
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = allMeals[item];
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalItems = (items) => {
    return Object.values(items).reduce((total, count) => total + count, 0);
  };

  const generateRandomPrice = () => {
    return Math.floor(Math.random() * (50 - 10 + 1)) + 10;
  };
  const updateMeals = (newMeals) => {
    const mealsWithPrices = newMeals.map((meal) => ({
      ...meal,
      price: meal.price || generateRandomPrice(),
    }));

    setMeals(mealsWithPrices);

    setAllMeals((prev) => {
      const updatedMeals = { ...prev };
      mealsWithPrices.forEach((meal) => {
        if (!updatedMeals[meal.idMeal]) {
          updatedMeals[meal.idMeal] = meal;
        }
      });
      return updatedMeals;
    });
  };

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalItems,
    getTotalCartAmount,
    meals,
    allMeals,
    setMeals: updateMeals,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
