import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";

const Home = () => {
  const APP_ID = "7f7f9891";
  const APP_KEY = "eb8cae3b0f8da5c9d3648e6a013be9c4";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState("");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);
    setRecipes(data.hits);
  };
  console.log(recipes);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header setQuery={setQuery} />
    </div>
  );
};

export default Home;
