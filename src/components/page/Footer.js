"use client";

import React from "react";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

import logo from "../../../public/SHOP.CO.png";
import visa from "../../../public/visa.png";
import mastercard from "../../../public/mastercard.png";
import paypal from "../../../public/paypal.png";
import applepay from "../../../public/applepay.png";
import googlepay from "../../../public/googlepay.png";

const socials = [
  { icon: <FaXTwitter />, name: "Twitter" },
  { icon: <FaFacebookF />, name: "Facebook" },
  { icon: <FaInstagram />, name: "Instagram" },
  { icon: <FaGithub />, name: "Github" },
];

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    title: "Help",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "Resources",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "YouTube Playlist",
    ],
  },
];

const payments = [
  {
    src: visa,
    name: "visa",
  },
  {
    src: mastercard,
    name: "mastercard",
  },
  {
    src: paypal,
    name: "paypal",
  },
  {
    src: applepay,
    name: "applepay",
  },
  {
    src: googlepay,
    name: "googlepay",
  },
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

      <div className="bg-sc-grayBtn md:px-20 px-5 pt-32 ">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0 md:justify-between pb-10">
          <section className="flex flex-col gap-5 md:w-1/5 w-full">
            <Image
              src={logo}
              width={160}
              height={22}
              alt="shop.co"
              className="w-[100px] md:w-[160px]"
            />
            <p className="text-sm font-normal text-black/60">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <span className="flex gap-4">
              {socials.map((social) => (
                <div
                  key={social.name}
                  className="border border-black/20 rounded-full p-2"
                >
                  {social.icon}
                </div>
              ))}
            </span>
          </section>
          <div className="grid md:gap-x-20 md:grid-cols-4 grid-cols-2 gap-y-5">
            {footerLinks.map((footerLink) => (
              <section key={footerLink.title} className="">
                <h2 className="text-base font-medium uppercase tracking-widest">
                  {footerLink.title}
                </h2>
                <ul className="pt-4 flex flex-col gap-2">
                  {footerLink.links.map((link, index) => (
                    <li
                      key={index}
                      className="text-base text-black/60 font-normal"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <hr />

        <div className="pt-5 pb-10 flex md:flex-row flex-col items-center gap-2 md:justify-between">
          <p>© 2000-2021, All rights reserved</p>
          <section className="flex">
            {payments.map((payment, index) => (
              <Image
                key={index}
                src={payment.src}
                width={"auto"}
                alt={payment.name}
              />
            ))}
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
