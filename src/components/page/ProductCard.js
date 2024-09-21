import React from "react";

import Image from "next/image";
import { Rate } from "antd";

const ProductCard = ({
  src,
  name,
  rating,
  price,
  prevPrice,
  discount,
  onClick,
}) => {
  return (
    <div
      className="md:min-w-[295px] md:min-h-[298px] min-w-[172px] min-h-[174px] border border-black/10 rounded-xl shadow-sm cursor-pointer"
      onClick={onClick}
    >
      <section className="bg-transparent rounded-2xl relative w-full h-[260px]">
        <Image
          src={src}
          fill
          // width={200}
          // height={200}
          // sizes="100vw"
          // style={{ width: "100%", height: "auto" }}
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt="product-image"
          className="rounded-2xl pt-5"
        />
      </section>
      <section className="flex flex-col gap-1 p-5">
        <h2 className="font-bold text-lg">{name}</h2>
        <span className="flex gap-2 items-center">
          {/* <Image src={stars} width={"auto"} height={"auto"} alt="rating" /> */}
          <Rate disabled allowHalf defaultValue={rating} />
          <p className="text-sm font-normal text-black/60">{`${rating}/5`}</p>
        </span>
        <span className="text-xl font-bold flex gap-2">
          ${price} <p className="text-black/40 line-through">{prevPrice}</p>
          {discount && (
            <p className="text-sc-red text-xs font-normal bg-sc-red/10 px-4 py-1 rounded-full flex items-center text-center">
              - {discount}%
            </p>
          )}
        </span>
      </section>
    </div>
  );
};

export default ProductCard;
