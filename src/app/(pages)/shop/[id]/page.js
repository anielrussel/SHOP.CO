"use client";

import React, { useState } from "react";
import { Breadcrumb } from "antd";
import Image from "next/image";

import graphic_front from "../../../../../public/graphic-front.png";
import graphic_back from "../../../../../public/graphic-back.png";
import graphic_model from "../../../../../public/graphic-model.png";

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

const ProductPage = ({ params }) => {
  const [selectedImage, setSelectedImage] = useState(products[0].image);

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className="md:px-20 px-5">
      <Breadcrumb
        separator=">"
        items={[{ title: "Home" }, { title: "Shop" }, { title: params.id }]}
        className="py-5"
      />
      <div className="grid grid-cols-2">
        <section className="flex">
          <div className="flex flex-col gap-3">
            {products.map((product) => (
              <Image
                src={product.image}
                alt={product.name}
                onClick={() => handleSelectImage(product.image)}
                className="w-[152px] h-[167px] rounded-[20px]"
              />
            ))}
          </div>

          <div>
            <Image
              src={selectedImage}
              alt="Selected Product"
              priority
              quality={100}
              className="w-full h-full rounded-[20px]"
            />
          </div>
        </section>

        <section>Right Side</section>
      </div>
    </div>
  );
};

export default ProductPage;
