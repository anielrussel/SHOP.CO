"use client";

import React, { useEffect, useState } from "react";
import { Breadcrumb, Rate } from "antd";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
import { Skeleton } from "@/components/ui/skeleton";

import { useGetProductByIdQuery } from "@/stores/apiSlice";
import { calculatePreviousPrice } from "@/lib/utils";

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
    id: 2,
    label: "Medium",
    value: "medium",
  },
  {
    id: 3,
    label: "Large",
    value: "large",
  },
  {
    id: 4,
    label: "X-Large",
    value: "extralarge",
  },
];

const moreProducts = [
  {
    image: shirt,
    name: "SC Black Shirt1",
    rating: 4.5,
    price: "$120",
  },
  {
    image: shirt,
    name: "SC Black Shirt2",
    rating: 4.5,
    price: "$120",
    prevPrice: "$260",
    discount: "-20%",
  },
  {
    image: shirt,
    name: "SC Black Shirt3",
    rating: 4.5,
    price: "$120",
  },
  {
    image: shirt,
    name: "SC Black Shirt4",
    rating: 4.5,
    price: "$120",
  },
];

const ProductPage = ({ params }) => {
  const [selectedImage, setSelectedImage] = useState();

  const pathname = usePathname();

  // Get the id in the pathname
  const id = pathname.match(/\/shop\/(\d+)/)?.[1];

  const { data, isLoading } = useGetProductByIdQuery(id);

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  // Calculate the previous price
  const currentPrice = data?.price;
  const discountPercentage = data?.discountPercentage;
  const previousPrice = calculatePreviousPrice(
    currentPrice,
    discountPercentage
  );

  useEffect(() => {
    if (data?.images?.length) {
      setSelectedImage(data.images[0]);
    }
  }, [data]);

  return (
    <div className="md:px-20 px-5 pb-20">
      <Breadcrumb
        separator=">"
        items={[{ title: "Home" }, { title: "Shop" }, { title: params.id }]}
        className="py-5"
      />

      {/* product decription */}
      <div className="grid md:grid-cols-2 gap-10 mt-5">
        <section className="flex md:flex-row flex-col-reverse md:justify-between gap-4">
          <div className="flex md:flex-col justify-between">
            {isLoading ? (
              <div className="space-y-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index}>
                    <Skeleton
                      className={
                        "md:w-[152px] md:h-[167px] w-[112px] h-[106px] rounded-[20px]"
                      }
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {data?.images
                  .slice(0, 3)
                  .map(
                    (image, index) =>
                      image && (
                        <Image
                          key={index}
                          src={image}
                          alt={"images"}
                          width={100}
                          height={100}
                          priority
                          onClick={() => handleSelectImage(image)}
                          className={`md:w-[152px] md:h-[167px] w-[112px] h-[106px] rounded-[20px] ${
                            selectedImage === image
                              ? "border border-black"
                              : "border border-black/20"
                          }`}
                        />
                      )
                  )}
              </div>
            )}
          </div>

          <div>
            {isLoading ? (
              <div>
                <Skeleton className={"w-[500px] h-[500px] rounded-[20px]"} />
              </div>
            ) : (
              <>
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt="Selected Product"
                    width={300}
                    height={300}
                    priority
                    className="w-full h-full rounded-[20px] border border-black/20"
                  />
                )}
              </>
            )}
          </div>
        </section>

        <section className="flex flex-col md:justify-between gap-5 md:gap-0">
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className={"w-full h-5"} />
              <Skeleton className={"w-full h-5"} />
              <Skeleton className={"w-full h-5"} />
            </div>
          ) : (
            <article className="flex flex-col gap-2">
              <h1 className="uppercase md:text-[40px] text-2xl">
                {data?.title}
              </h1>
              <span>
                <Rate disabled allowHalf defaultValue={data?.rating} />{" "}
                {`${data?.rating}/5`}
              </span>
              <span className="md:text-4xl text-2xl font-bold flex gap-3">
                <h2>${data?.price}</h2>
                <h2 className="text-black/60 line-through">{previousPrice}</h2>
                <p className="bg-sc-red/10 text-base py-2 px-4 rounded-full font-medium text-sc-red">
                  {`- ${data?.discountPercentage}%`}
                </p>
              </span>
              <p className="md:text-base text-sm font-normal text-black/60">
                {data?.description}
              </p>
            </article>
          )}

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
            <p className="text-base font-normal text-black/60">{`(${data?.reviews.length})`}</p>
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
          {data &&
            data.reviews.map((feedback) => (
              <div
                key={feedback.reviewerName}
                className="border border-black/10 p-5 rounded-2xl"
              >
                <Rate disabled allowHalf defaultValue={feedback.rating} />
                <span className="py-2 text-xl font-bold flex items-center gap-2">
                  <h2>{feedback.reviewerName}</h2>
                  <FaCheck
                    className="bg-[#01AB31] rounded-full p-1"
                    color="white"
                  />
                </span>
                <p className="text-base font-medium text-black/60">
                  {feedback.comment}
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
