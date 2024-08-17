import React from "react";

import stars from "../../../../public/stars.png";

import Image from "next/image";

const ProductCard = ({ src, name, rating, price, prevPrice, discount }) => {
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
        <span className="text-xl font-bold flex gap-2">
          {price} <p className="text-black/40 line-through">{prevPrice}</p>
          {discount && (
            <p className="text-sc-red text-xs font-normal bg-sc-red/10 px-4 py-1 rounded-full flex items-center text-center">
              {discount}
            </p>
          )}
        </span>
      </section>
    </div>
  );
};

export default ProductCard;
