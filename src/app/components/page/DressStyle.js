import React from "react";

import Image from "next/image";

import casual from "../../../../public/casual.png";
import formal from "../../../../public/formal.png";
import party from "../../../../public/party.png";
import gym from "../../../../public/gym.png";

const DressStyle = () => {
  return (
    <div className="md:px-20 px-5">
      <div className="bg-sc-grayBtn rounded-xl px-16 py-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl font-bold">
          BROWSE BY DRESS STYLE
        </h1>
        <section className="md:grid md:grid-cols-3 md:grid-flow-row-dense flex flex-col gap-5 mt-10">
          <div className="md:h-[289px] h-[190px] relative">
            <Image
              src={casual}
              //   width={"auto"}
              //   height={"auto"}
              fill
              objectFit="cover"
              priority
              alt="casual"
              className="rounded-3xl"
            />
          </div>
          <div className="md:col-span-2 md:h-[289px] h-[190px] relative">
            <Image
              src={formal}
              //   width={"auto"}
              //   height={"auto"}
              priority
              alt="formal"
              className="rounded-3xl h-full"
            />
          </div>
          <div className="col-span-2 md:h-[289px] h-[190px] relative">
            <Image
              src={party}
              //   width={"auto"}
              //   height={"auto"}
              fill
              objectFit="cover"
              priority
              alt="party"
              className="rounded-3xl"
            />
          </div>
          <div className="md:h-[289px] h-[190px] relative">
            <Image
              src={gym}
              //   width={"auto"}
              //   height={"auto"}
              fill
              objectFit="cover"
              priority
              alt="gym"
              className="rounded-3xl h-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DressStyle;
