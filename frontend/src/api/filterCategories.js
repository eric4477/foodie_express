import axios from "axios";

const filterCategories = async (category) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching category data:", error);
    throw error;
  }
};

export default filterCategories;
