import "./Home.css";
import Header from "../../components/Header/Header";
import { useState } from "react";

function Home() {
  const [currCategory, setCurrCategory] = useState("Beef");

  return (
    <div className="home">
      <Header />
    </div>
  );
}

export default Home;
