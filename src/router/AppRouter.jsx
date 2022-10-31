import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "../components/globalStyles/GlobalStyles";
import Navbar from "./../components/nav/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
