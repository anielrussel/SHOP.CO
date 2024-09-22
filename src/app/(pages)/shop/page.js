"use client";

import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { GiSettingsKnobs } from "react-icons/gi";
import { useRouter } from "next/navigation";

import Filters from "@/components/page/Filters";
import ProductCard from "@/components/page/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

import { useGetAllProductsByCategoryQuery } from "@/stores/apiSlice";
import { calculatePreviousPrice } from "@/lib/utils";
import Link from "next/link";

const Shirts = () => {
  const { data: mensShirts, isLoading: isLoadingMensShirts } =
    useGetAllProductsByCategoryQuery("mens-shirts");
  const { data: womensDresses, isLoading: isLoadingWomensDresses } =
    useGetAllProductsByCategoryQuery("womens-dresses");
  const { data: mensShoes, isLoading: isLoadingMensShoes } =
    useGetAllProductsByCategoryQuery("mens-shoes");
  const { data: womensShoes, isLoading: isLoadingWomensShoes } =
    useGetAllProductsByCategoryQuery("womens-shoes");

  const router = useRouter();

  const allProducts = [
    ...(mensShirts?.products || []),
    ...(womensDresses?.products || []),
    ...(mensShoes?.products || []),
    ...(womensShoes?.products || []),
  ];

  const isLoading =
    isLoadingMensShirts ||
    isLoadingWomensDresses ||
    isLoadingMensShoes ||
    isLoadingWomensShoes;

  // const handleGetProductById = async (id) => {
  //   router.push(`/shop/${id}`);
  // };

  return (
    <div className="md:px-20 px-5 pb-28">
      <hr />
      <Breadcrumb
        separator=">"
        items={[{ title: "Home" }, { title: "Shop" }]}
        className="py-5"
      />
      <div className="grid grid-flow-row-dense md:grid-cols-4 gap-x-5">
        <section className="md:block hidden">
          <Filters />
        </section>
        <section className="col-span-3">
          <article className="flex justify-between font-normal items-center">
            <h2 className="font-bold md:text-3xl text-2xl">Casual</h2>
            <span className="flex gap-3 text-black md:text-base text-xs">
              <p className="text-black/60">{`Showing ${allProducts?.length} of ${allProducts?.length} Products`}</p>
              <p className="text-black/60 hidden md:block">Sort by:</p>
              <p className="hidden md:block">Most Popular</p>
            </span>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger>
                  <GiSettingsKnobs
                    size={35}
                    className="p-2 bg-sc-grayBtn rounded-full md:hidden block"
                  />
                </SheetTrigger>
                <SheetTitle className="sr-only">Filter-Bar</SheetTitle>
                <SheetDescription className="sr-only">
                  Filter-Bar
                </SheetDescription>
                <SheetContent side="right">
                  <ScrollArea className="h-screen">
                    <div className="pt-5">
                      <Filters />
                    </div>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </div>
          </article>

          <article className="grid md:grid-cols-3 grid-cols-1 gap-5 py-10">
            {isLoading
              ? // Display skeletons while loading
                Array.from({ length: 9 }).map((_, index) => (
                  <div key={index} className="space-y-2">
                    <Skeleton className="md:min-w-[295px] md:min-h-[298px] min-w-[172px] min-h-[174px] rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 md:min-w-[295px] min-w-[172px]" />
                      <Skeleton className="h-4 md:min-w-[295px] min-w-[172px]" />
                    </div>
                  </div>
                ))
              : allProducts?.map((product) => (
                  <Link key={product.id} href={`/shop/${product?.id}`} passHref>
                    <ProductCard
                      src={product?.images[0]}
                      name={product.title}
                      rating={product?.rating}
                      price={product.price}
                      prevPrice={calculatePreviousPrice(
                        product?.price,
                        product?.discountPercentage
                      )}
                      discount={product?.discountPercentage}
                      // onClick={() => handleGetProductById(product?.id)}
                    />
                  </Link>
                ))}
          </article>

          <hr />

          <article className="md:py-10 py-5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Shirts;
