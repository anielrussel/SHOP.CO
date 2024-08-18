import React from "react";
import Image from "next/image";

import herobg from "../../../public/HeroBg.png";
import vector1 from "../../../public/Vector1.png";
import { Button } from "@/components/ui/button";

const HPHeroSection = () => {
  return (
    <div className="bg-sc-grayBg grid md:grid-cols-2 px-5 md:px-20 h-auto  md:h-[90vh] pt-10 md:pt-0">
      <section className="flex flex-col justify-center items-start gap-5">
        <h1 className="text-[36px] md:text-[64px] leading-none pr-32">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-black/60 md:text-base text-sm">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <Button className="rounded-full md:w-1/3 w-full py-6">Shop Now</Button>
        <article className="flex gap-10 justify-center md:justify-between flex-wrap w-full mt-10">
          <span>
            <h2 className="text-4xl font-medium">200+</h2>
            <p className="text-black/60">International Brands</p>
          </span>
          <span>
            <h2 className="text-4xl font-medium">2,000+</h2>
            <p className="text-black/60">High Quality Products</p>
          </span>
          <span>
            <h2 className="text-4xl font-medium">30,000+</h2>
            <p className="text-black/60">Happy Customers</p>
          </span>
        </article>
      </section>
      <section className="flex items-end relative">
        <Image
          src={herobg}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          priority
          alt="Background Image"
        />
        <Image
          src={vector1}
          width={100}
          height={100}
          alt="vector"
          className="absolute md:top-28 top-5 right-10"
        />
        <Image
          src={vector1}
          width={50}
          height={50}
          alt="vector"
          className="absolute md:top-[400px] top-[120px] left-10"
        />
      </section>
    </div>
  );
};

export default HPHeroSection;
