import React from "react";
import HeroSection from "../components/page/HeroSection";
import Partners from "../components/page/Partners";
import NewArrivals from "../components/page/NewArrivals";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Partners />
      <NewArrivals />
    </main>
  );
};

export default HomePage;
