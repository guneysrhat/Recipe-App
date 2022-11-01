import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const APP_ID = "7f7f9891";
  const APP_KEY = "eb8cae3b0f8da5c9d3648e6a013be9c4";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Home</div>;
};

export default Home;
