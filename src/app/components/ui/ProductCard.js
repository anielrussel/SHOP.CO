import React from "react";

import stars from "../../../../public/stars.png";

import Image from "next/image";

const ProductCard = ({ src, name, rating, price }) => {
  return (
    <div className="min-w-[295px] min-h-[298px]">
      <section className="bg-sc-grayBtn rounded-2xl">
        <Image
          src={src}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="product-image"
          className="rounded-2xl"
        />
      </section>
      <section className="flex flex-col gap-1 mt-2">
        <h2 className="font-bold text-lg">{name}</h2>
        <span className="flex gap-1">
          <Image src={stars} width={"auto"} height={"auto"} alt="rating" />
          <p className="text-sm font-normal text-black/60">{rating}</p>
        </span>
        <p className="text-xl font-bold">{price}</p>
      </section>
    </div>
  );
};

export default ProductCard;
