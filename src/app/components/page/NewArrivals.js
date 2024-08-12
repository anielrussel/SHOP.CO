import React from "react";

import ProductCard from "../ui/ProductCard";

import shirt from "../../../../public/shirt.png";

const products = [
  {
    image: shirt,
    name: "SC Black Shirt",
    rating: "4.5/5",
    price: "$120",
  },
  {
    image: shirt,
    name: "SC Black Shirt",
    rating: "4.5/5",
    price: "$120",
  },
  {
    image: shirt,
    name: "SC Black Shirt",
    rating: "4.5/5",
    price: "$120",
  },
  {
    image: shirt,
    name: "SC Black Shirt",
    rating: "4.5/5",
    price: "$120",
  },
];

const NewArrivals = () => {
  return (
    <div className="h-auto flex flex-col items-center py-24 md:px-20 px-5 gap-5">
      <h1 className="text-[48px] font-bold">NEW ARRIVALS</h1>
      <section className="flex md:justify-between gap-4 md:gap-0 w-full overflow-x-auto">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            src={product.image}
            name={product.name}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </section>
    </div>
  );
};

export default NewArrivals;
