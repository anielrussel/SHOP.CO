import React from "react";

import ProductCard from "../ui/ProductCard";

import shirt from "../../../../public/shirt.png";
import ViewButton from "../ui/ViewButton";

const products = [
  {
    image: shirt,
    name: "SC Black Shirt",
    rating: 4.5,
    price: "$120",
  },
  {
    image: shirt,
    name: "SC Black Shirt",
    rating: 4.5,
    price: "$120",
    prevPrice: "$260",
    discount: "-20%",
  },
  {
    image: shirt,
    name: "SC Black Shirt",
    rating: 4.5,
    price: "$120",
  },
  {
    image: shirt,
    name: "SC Black Shirt",
    rating: 4.5,
    price: "$120",
  },
];

const HPNewArrivals = () => {
  return (
    <div className="h-auto flex flex-col items-center py-20 md:px-20 px-5 gap-16">
      <h1 className="text-[48px]">NEW ARRIVALS</h1>
      <section className="flex md:justify-between gap-4 md:gap-0 w-full overflow-x-auto">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            src={product.image}
            name={product.name}
            rating={product.rating}
            price={product.price}
            prevPrice={product?.prevPrice}
            discount={product?.discount}
          />
        ))}
      </section>
      <ViewButton title={"View All"} />
    </div>
  );
};

export default HPNewArrivals;
