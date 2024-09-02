"use client";

import React, { useState } from "react";
import { Breadcrumb, Rate } from "antd";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

import graphic_front from "../../../../../public/shirt1.png";
import graphic_back from "../../../../../public/shirt2.png";
import graphic_model from "../../../../../public/shirt3.png";
import shirt from "../../../../../public/shirt.png";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/page/ProductCard";

const products = [
  {
    id: 1,
    name: "Shirt 1",
    image: graphic_front,
  },
  {
    id: 2,
    name: "Shirt 2",
    image: graphic_back,
  },
  {
    id: 2,
    name: "Shirt 3",
    image: graphic_model,
  },
];

const availableColors = [
  {
    id: 1,
    label: "Algae Green",
    color: "#314F4A",
    value: "algaegreen",
  },
  {
    id: 2,
    label: "Dark Green",
    color: "#4F4631",
    value: "darkgreen",
  },
  {
    id: 3,
    label: "Dark Violet",
    color: "#31344F",
    value: "darkviolet",
  },
];

const availableSizes = [
  {
    id: 1,
    label: "Small",
    value: "small",
  },
  {
    id: 1,
    label: "Medium",
    value: "medium",
  },
  {
    id: 1,
    label: "Large",
    value: "large",
  },
  {
    id: 1,
    label: "X-Large",
    value: "extralarge",
  },
];

const feedbacks = [
  {
    name: "Sarah M.",
    message: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    rating: 5,
  },
  {
    name: "Alex K.",
    message: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    rating: 4.5,
  },
  {
    name: "James L.",
    message: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    rating: 4,
  },
  {
    name: "James L.",
    message: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    rating: 4,
  },
];

const moreProducts = [
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

const ProductPage = ({ params }) => {
  const [selectedImage, setSelectedImage] = useState(products[0].image);

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className="md:px-20 px-5 pb-20">
      <Breadcrumb
        separator=">"
        items={[{ title: "Home" }, { title: "Shop" }, { title: params.id }]}
        className="py-5"
      />

      {/* product decription */}
      <div className="grid md:grid-cols-2 gap-10">
        <section className="flex md:flex-row flex-col-reverse md:justify-between gap-4">
          <div className="flex md:flex-col justify-between">
            {products.map((product) => (
              <Image
                key={product.id}
                src={product.image}
                alt={product.name}
                width={"auto"}
                onClick={() => handleSelectImage(product.image)}
                className={`md:w-[152px] md:h-[167px] w-[112px] h-[106px] rounded-[20px] ${
                  selectedImage === product.image ? "border border-black" : ""
                }`}
              />
            ))}
          </div>

          <div>
            <Image
              src={selectedImage}
              alt="Selected Product"
              width={"auto"}
              priority
              quality={100}
              className="w-full h-full rounded-[20px]"
            />
          </div>
        </section>

        <section className="flex flex-col md:justify-between gap-5 md:gap-0">
          <article className="flex flex-col gap-2">
            <h1 className="uppercase md:text-[40px] text-2xl">
              one life graphic t-shirt
            </h1>
            <span>
              <Rate disabled allowHalf defaultValue={4.5} /> 4.5/5
            </span>
            <span className="md:text-4xl text-2xl font-bold flex gap-3">
              <h2>$260</h2>
              <h2 className="text-black/60 line-through">$300</h2>
              <p className="bg-sc-red/10 text-base py-2 px-4 rounded-full font-medium text-sc-red">
                -40%
              </p>
            </span>
            <p className="md:text-base text-sm font-normal text-black/60">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </article>

          <hr />

          <article className="flex flex-col gap-2">
            <label>Select colors</label>
            <div className="flex gap-4">
              {availableColors.map((color) => (
                <Checkbox
                  key={color.id}
                  defaultValue={"algaegreen"}
                  className={`rounded-full w-10 h-10`}
                  style={{
                    backgroundColor: color?.color,
                    borderColor: "rgba(0, 0, 0, 0.2)",
                  }}
                />
              ))}
            </div>
          </article>

          <hr />

          <article className="flex flex-col flex-wrap gap-4">
            <label>Choose Size</label>
            <div>
              {availableSizes.map((size) => (
                <Button
                  key={size.id}
                  variant={"secondary"}
                  className="rounded-full px-6"
                >
                  {size.label}
                </Button>
              ))}
            </div>
          </article>

          <hr />

          <article className="flex gap-5">
            <section className="flex justify-between items-center bg-sc-grayBtn px-8 py-1 rounded-full w-1/3">
              <span>+</span>
              <p>1</p>
              <span>-</span>
            </section>
            <Button className="rounded-full w-full">Add to Cart</Button>
          </article>
        </section>
      </div>
      {/* product decription */}

      {/* product reviews */}
      <div className="mt-20">
        <h2 className="md:text-xl text-base font-medium pb-4">
          Rating & Reviews
        </h2>
        <hr />
        <section className="flex justify-between flex-wrap mt-10">
          <span className="flex gap-1 items-center">
            <h2 className="md:text-2xl text-xl font-bold">All Reviews</h2>
            <p className="text-base font-normal text-black/60">{`(45)`}</p>
          </span>
          <article className="flex gap-2">
            <Select defaultValue={"latest"}>
              <SelectTrigger className="w-[120px] rounded-full bg-sc-grayBtn">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="rounded-full px-5">Write a Review</Button>
          </article>
        </section>

        <section className="grid md:grid-cols-2 gap-5 my-5">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.name}
              className="border border-black/10 p-5 rounded-2xl"
            >
              <Rate disabled allowHalf defaultValue={feedback.rating} />
              <span className="py-2 text-xl font-bold flex items-center gap-2">
                <h2>{feedback.name}</h2>
                <FaCheck
                  className="bg-[#01AB31] rounded-full p-1"
                  color="white"
                />
              </span>
              <p className="text-base font-medium text-black/60">
                {feedback.message}
              </p>
            </div>
          ))}
        </section>
        <section className="flex justify-center mt-10">
          <Button variant="outline" className="rounded-full px-8">
            Load More Reviews
          </Button>
        </section>
      </div>
      {/* product reviews */}

      {/* other products */}
      <div className="h-auto flex flex-col items-center py-20 gap-16">
        <h1 className="md:text-[48px] text-[32px] text-center">
          YOU MIGHT ALSO LIKE
        </h1>
        <section className="flex md:justify-between gap-4 md:gap-0 w-full overflow-x-auto">
          {moreProducts.map((product) => (
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
      </div>
      {/* other products */}
    </div>
  );
};

export default ProductPage;
