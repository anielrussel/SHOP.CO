import React from "react";

import ProductCard from "./ProductCard";

import sleeve from "../../../public/sleeve.png";
import { Button } from "@/components/ui/button";

const products = [
  {
    image: sleeve,
    name: "SC Black sleeve",
    rating: 5,
    price: "$120",
  },
  {
    image: sleeve,
    name: "SC Black sleeve",
    rating: 5,
    price: "$120",
    prevPrice: "$260",
    discount: "-20%",
  },
  {
    image: sleeve,
    name: "SC Black sleeve",
    rating: 5,
    price: "$120",
  },
  {
    image: sleeve,
    name: "SC Black sleeve",
    rating: 5,
    price: "$120",
  },
];

const HPTopSelling = () => {
  return (
    <div className="h-auto flex flex-col items-center py-20 md:px-20 px-5 gap-16">
      <h1 className="text-[48px]">TOP SELLING</h1>
      <section className="flex md:justify-between gap-4 md:gap-0 w-full overflow-x-auto">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            src={product.image}
            name={product.name}
            rating={product.rating}
            price={product.price}
            prevPrice={product?.prevPrice}
            discount={product?.discount}
          />
        ))}
      </section>
      <Button variant="outline" className="rounded-full w-full md:w-1/5 py-6">
        View All
      </Button>
    </div>
  );
};

export default HPTopSelling;
