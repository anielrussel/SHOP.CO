import React from "react";
import ProductCard from "../ui/ProductCard";

const NewArrivals = () => {
  return (
    <div className="h-auto flex flex-col items-center py-16 md:px-20 px-5 gap-5">
      <h1 className="text-[48px] font-bold">NEW ARRIVALS</h1>
      <section className="flex items-center justify-between flex-wrap w-full">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </div>
  );
};

export default NewArrivals;
