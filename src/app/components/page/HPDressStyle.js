import React from "react";

import Image from "next/image";

import casual from "../../../../public/casual.png";
import formal from "../../../../public/formal.png";
import party from "../../../../public/party.png";
import gym from "../../../../public/gym.png";

const HPDressStyle = () => {
  return (
    <div className="md:px-20 px-5">
      <div className="bg-sc-grayBtn rounded-xl px-16 py-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl">BROWSE BY DRESS STYLE</h1>
        <section className="md:grid md:grid-cols-3 md:grid-flow-row-dense flex flex-col gap-5 mt-16 w-full">
          <div className="md:h-[289px] h-[190px] relative">
            <Image
              src={casual}
              fill
              objectFit="cover"
              priority
              alt="casual"
              className="rounded-3xl shadow-md"
            />
            <h2 className="absolute top-8 left-5 md:text-4xl text-2xl font-bold">
              Casual
            </h2>
          </div>
          <div className="md:col-span-2 md:h-[289px] h-[190px] relative">
            <Image
              src={formal}
              fill
              objectFit="cover"
              priority
              alt="formal"
              className="rounded-3xl h-full shadow-md"
            />
            <h2 className="absolute top-8 left-5 md:text-4xl text-2xl font-bold">
              Formal
            </h2>
          </div>
          <div className="col-span-2 md:h-[289px] h-[190px] relative">
            <Image
              src={party}
              fill
              objectFit="cover"
              priority
              alt="party"
              className="rounded-3xl shadow-md"
            />
            <h2 className="absolute top-8 left-5 md:text-4xl text-2xl font-bold">
              Party
            </h2>
          </div>
          <div className="md:h-[289px] h-[190px] relative">
            <Image
              src={gym}
              fill
              objectFit="cover"
              priority
              alt="gym"
              className="rounded-3xl h-full shadow-md"
            />
            <h2 className="absolute top-8 left-5 md:text-4xl text-2xl font-bold">
              Gym
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HPDressStyle;
