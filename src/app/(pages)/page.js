import React from "react";
import HeroSection from "../components/page/HeroSection";
import Partners from "../components/page/Partners";
import NewArrivals from "../components/page/NewArrivals";
import TopSelling from "../components/page/TopSelling";
import DressStyle from "../components/page/DressStyle";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Partners />
      <NewArrivals />
      <div className="px-20">
        <hr />
      </div>
      <TopSelling />
      <DressStyle />
    </main>
  );
};

export default HomePage;
