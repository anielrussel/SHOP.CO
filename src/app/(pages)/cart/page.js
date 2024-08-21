import React from "react";
import Image from "next/image";
import { Breadcrumb } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";

import shirt from "../../../../public/shirt.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const cartProducts = [
  {
    id: 1,
    image: shirt,
    name: "Gradient Graphic T-Shirt",
    price: "$120",
    size: "Large",
    color: "White",
  },
  {
    id: 2,
    image: shirt,
    name: "Gradient Graphic T-Shirt",
    price: "$120",
    size: "Large",
    color: "White",
  },
  {
    id: 3,
    image: shirt,
    name: "Gradient Graphic T-Shirt",
    price: "$120",
    size: "Large",
    color: "White",
  },
];

const Cart = () => {
  return (
    <div className="md:px-20 px-5 pb-20">
      <hr />
      <Breadcrumb
        separator=">"
        items={[{ title: "Home" }, { title: "Cart" }]}
        className="py-5"
      />
      <section>
        <h1 className="text-[40px]">YOUR CART</h1>
        <div className="md:grid md:grid-flow-row-dense md:grid-cols-3 md:gap-x-5 flex flex-col gap-5">
          <div className="flex flex-col gap-5 border border-black/10 rounded-xl p-5 col-span-2">
            {cartProducts.map((cart) => (
              <>
                <section key={cart.id} className="flex justify-between">
                  <div className="flex gap-4">
                    <Image
                      src={cart.image}
                      alt={cart.name}
                      className="md:w-[124px] md:h-[124px] w-[99px] h-[99px] rounded-lg"
                    />
                    <section>
                      <h2 className="text-xl font-bold">{cart.name}</h2>
                      <p className="text-sm font-normal text-black/60">
                        <span className="text-black">Size: </span>
                        {cart.size}
                      </p>
                      <p className="text-sm font-normal text-black/60">
                        <span className="text-black">Color: </span>
                        {cart.color}
                      </p>
                      <h2 className="text-2xl font-bold">{cart.price}</h2>
                    </section>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <RiDeleteBinLine size={25} color="red" />
                    <section className="flex gap-4 bg-sc-grayBtn px-4 py-1 rounded-full">
                      <span>+</span>
                      <p>1</p>
                      <span>-</span>
                    </section>
                  </div>
                </section>
                <hr />
              </>
            ))}
          </div>

          <div className="p-5 h-auto border border-black/10 rounded-xl">
            <h2 className="text-2xl font-bold">ORDER SUMMARY</h2>
            <section className="flex flex-col gap-4 pt-6 text-xl">
              <span className="flex justify-between items-center">
                <p className="font-normal text-black/60">Subtotal</p>
                <p className="font-bold">$564</p>
              </span>
              <span className="flex justify-between items-center">
                <p className="font-normal text-black/60">Discount</p>
                <p className="font-bold text-sc-red">-$113</p>
              </span>
              <span className="flex justify-between items-center">
                <p className="font-normal text-black/60">Delivery Fee</p>
                <p className="font-bold">$15</p>
              </span>
              <hr />
              <span className="flex justify-between items-center">
                <p>Total</p>
                <p className="font-bold">$467</p>
              </span>
            </section>
            <section className="flex items-end pt-10 gap-2">
              <Input placeholder="Add promo code" className="rounded-full" />
              <Button className="rounded-full px-6">Apply</Button>
            </section>
            <Button className="rounded-full w-full mt-5">Go to Checkout</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
