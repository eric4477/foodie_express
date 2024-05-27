import "./ExploreMenu.css";
import { useState, useEffect, useRef } from "react";
import { fetchCategories } from "../../api";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

function ExploreMenu({ currCategory, setCurrCategory }) {
  const listRef = useRef(null);
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        setFetchError(error);
        setIsLoading(false);
      }
    };
    loadCategories();
  }, []);

  if (isLoading) return <div className="spinner"></div>;
  if (fetchError) return <p>Error: {fetchError.message}</p>;
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from diverse menu featuring a delectable array of dishes crafted
        with the finest ingredients and culinary expertise. Our mission is to
        statisfy your cravings and elevate your dinning experience, one
        delicious meal at a time.
      </p>
      <div className="explore-menu-list-container">
        <div ref={listRef} className="explore-menu-list">
          <FaCircleChevronLeft className="chevron-left" onClick={scrollLeft} />
          <FaCircleChevronRight
            className="chevron-right"
            onClick={scrollRight}
          />

          {categories.categories.map((category) => {
            return (
              <div
                onClick={() => setCurrCategory(category.strCategory)}
                key={category.idCategory}
                className="explore-menu-list-item"
              >
                <img src={category.strCategoryThumb} alt="category" />
                <p
                  className={
                    currCategory === category.strCategory ? "active" : ""
                  }
                >
                  {category.strCategory}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
