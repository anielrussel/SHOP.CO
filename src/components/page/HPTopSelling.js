"use client";

import React from "react";

import ProductCard from "./ProductCard";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { useGetAllProductsByCategoryQuery } from "@/stores/apiSlice";

const HPTopSelling = () => {
  const { data: womensDresses, isLoading: isLoadingWomensDresses } =
    useGetAllProductsByCategoryQuery("womens-dresses");
  return (
    <div className="h-auto flex flex-col items-center py-20 md:px-20 px-5 gap-16">
      <h1 className="text-[48px]">WOMEN'S DRESSES</h1>
      <section className="flex md:justify-between gap-4 md:gap-0 w-full overflow-x-auto">
        {isLoadingWomensDresses ? ( // Display skeletons while loading
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="md:min-w-[295px] md:min-h-[298px] min-w-[172px] min-h-[174px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 md:min-w-[295px] min-w-[172px]" />
                <Skeleton className="h-4 md:min-w-[295px] min-w-[172px]" />
              </div>
            </div>
          ))
        ) : (
          <>
            {womensDresses?.products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                src={product?.images[0]}
                name={product.title}
                rating={product?.rating}
                price={product.price}
                prevPrice={product?.prevPrice}
                discount={product?.discountPercentage}
              />
            ))}
          </>
        )}
      </section>
      <Button variant="outline" className="rounded-full w-full md:w-1/5 py-6">
        View All
      </Button>
    </div>
  );
};

export default HPTopSelling;
