import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

function Home() {
  const [currCategory, setCurrCategory] = useState("Beef");

  return (
    <div className="home">
      <Header />
      <ExploreMenu
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
      />
      <FoodDisplay currCategory={currCategory} />
    </div>
  );
}

export default Home;
