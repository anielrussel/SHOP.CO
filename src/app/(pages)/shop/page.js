import React from "react";
import { Breadcrumb } from "antd";
import { GiSettingsKnobs } from "react-icons/gi";

import shirt from "../../../../public/shirt.png";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

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
              <p className="text-black/60">Showing 1-10 of 100 Products</p>
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

          <article className="grid md:grid-cols-3 grid-cols-2 gap-5 py-10">
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
