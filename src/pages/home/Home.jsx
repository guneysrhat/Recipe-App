import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import { HomeImg, ImgDiv } from "./Home.style";
import HomeSvg from "../../assets/home.svg";

const Home = () => {
  const APP_ID = "7f7f9891";
  const APP_KEY = "eb8cae3b0f8da5c9d3648e6a013be9c4";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState();
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the forms");
    }
  };
  console.log(recipes);
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={HomeSvg} />
        </ImgDiv>
      )}
      <Cards />
    </div>
  );
};

export default Home;
