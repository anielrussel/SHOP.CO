import React from "react";
import { Breadcrumb } from "antd";

import shirt from "../../../../public/shirt.png";
import Filters from "@/components/page/Filters";
import ProductCard from "@/components/page/ProductCard";

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
  {
    image: shirt,
    name: "SC Black Shirt",
    rating: 4.5,
    price: "$120",
  },
];

const Shirts = () => {
  return (
    <div className="md:px-20 px-5 pb-28">
      <hr />
      <Breadcrumb
        separator=">"
        items={[{ title: "Shop" }, { title: "Shirts" }]}
        className="py-5"
      />
      <div className="grid grid-flow-row-dense grid-cols-4 gap-x-5">
        <section>
          <Filters />
        </section>
        <section className="col-span-3">
          <article className="flex justify-between font-normal text-base items-end">
            <h2 className="font-bold text-3xl">Casual</h2>
            <span className="flex gap-3 text-black">
              <p className="text-black/60">Showing 1-10 of 100 Products</p>
              <p className="text-black/60">Sort by:</p> Most Popular
            </span>
          </article>

          <article className="grid grid-cols-3 gap-5 py-10">
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
          </article>
          <hr />
        </section>
      </div>
    </div>
  );
};

export default Shirts;
