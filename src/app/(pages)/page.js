import React from "react";
import HPHeroSection from "../components/page/HPHeroSection";
import HPPartners from "../components/page/HPPartners";
import HPNewArrivals from "../components/page/HPNewArrivals";
import HPTopSelling from "../components/page/HPTopSelling";
import HPDressStyle from "../components/page/HPDressStyle";
import HPFeedbacks from "../components/page/HPFeedbacks";

const HomePage = () => {
  return (
    <main>
      <HPHeroSection />
      <HPPartners />
      <HPNewArrivals />
      <div className="px-20">
        <hr />
      </div>
      <HPTopSelling />
      <HPDressStyle />
      <HPFeedbacks />
    </main>
  );
};

export default HomePage;
