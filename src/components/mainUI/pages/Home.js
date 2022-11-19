import React from "react";
import Footer from "../sections/footer/Footer";
import Hero from "../sections/header/Hero";
import Navbar from "../sections/header/Navbar";
import TopBar from "../sections/header/TopBar";
import AllCategories from "../sections/main/AllCategories";
import Features from "../sections/main/Features";
import LatestProducts from "../sections/main/products/LatestProducts";

const Home = () => {
  return (
    <>
      <header>
        <TopBar />
        <Navbar />
        <Hero />
      </header>
      <main>
        <Features />
        <LatestProducts />
        <AllCategories />
      </main>
      <Footer />
    </>
  );
};

export default Home;
