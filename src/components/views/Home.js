import React from "react";
import AllCategories from "../global/sections/AllCategories";
import Features from "../global/sections/Features";
import Hero from "../global/sections/Hero";
import LatestProducts from "../global/sections/products/LatestProducts";

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <LatestProducts />
      <AllCategories />
    </main>
  );
};

export default Home;
