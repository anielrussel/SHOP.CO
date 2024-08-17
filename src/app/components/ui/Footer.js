import React from "react";
import { TfiEmail } from "react-icons/tfi";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

import logo from "../../../../public/SHOP.CO.png";
import Image from "next/image";

const socials = [
  <FaXTwitter />,
  <FaFacebookF />,
  <FaInstagram />,
  <FaGithub />,
];

const Footer = () => {
  return (
    <footer>
      <div className="md:px-20 px-5 -mb-20 relative z-20">
        <div className=" bg-black flex md:flex-row flex-col gap-4 md:justify-between items-center md:px-16 py-8 px-10 rounded-3xl">
          <h1 className="md:text-[40px] md:leading-normal text-3xl text-white md:w-1/2 w-full">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <section className="flex flex-col gap-2 w-full md:w-1/3">
            <span className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="rounded-full py-2 pl-12 outline-none w-full"
              />
              <TfiEmail
                size={16}
                color="gray"
                className="absolute top-3 left-5"
              />
            </span>
            <button className="text-black text-base font-medium rounded-full bg-white py-2">
              Subscribe to Newsletter
            </button>
          </section>
        </div>
      </div>
      <div className="bg-sc-grayBtn md:px-20 px-5 pt-28 grid grid-cols-5">
        <section>
          <article>
            <Image
              src={logo}
              width={160}
              height={22}
              alt="shop.co"
              className="w-[100px] md:w-[160px]"
            />
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <span className="flex gap-4">
              {socials.map((social, index) => (
                <div
                  key={index}
                  className="border border-black/20 rounded-full p-2"
                >
                  {social}
                </div>
              ))}
            </span>
          </article>
        </section>
        <section>Company</section>
        <section>Help</section>
        <section>FAQ</section>
        <section>Resources</section>
      </div>
    </footer>
  );
};

export default Footer;
