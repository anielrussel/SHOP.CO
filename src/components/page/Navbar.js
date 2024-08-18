"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import logo from "../../../public/SHOP.CO.png";

import { Input } from "@/components/ui/input";

const links = [
  {
    title: "Shop",
    href: "#",
    icon1: <IoIosArrowDown />,
    icon2: <IoIosArrowUp />,
    children: [
      {
        title: "Shirts",
        href: "/shirts",
      },
      {
        title: "Jeans",
        href: "#",
      },
      {
        title: "Shorts",
        href: "#",
      },
      {
        title: "Hoodies",
        href: "#",
      },
    ],
  },
  { title: "On Sale", href: "#" },
  { title: "New Arrivals", href: "#" },
  { title: "Brands", href: "#" },
];
const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [toggleShop, setToggleShop] = useState(false);

  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar);
  };

  const handleToggleShop = () => {
    setToggleShop(!toggleShop);
  };
  return (
    <nav>
      <section className="bg-black text-white text-sm font-light text-center py-2">
        <p>
          Sign up and get 20% off to your first order.{" "}
          <span className="underline font-normal">Sign Up Now</span>
        </p>
      </section>

      <section className="flex items-center justify-between md:px-20 px-5 py-5">
        <span className="flex items-center gap-4">
          <LuMenu
            size={30}
            onClick={handleToggleNavbar}
            className="cursor-pointer md:hidden block"
          />
          <Link href={"/"}>
            <Image
              src={logo}
              width={160}
              height={22}
              alt="shop.co"
              className="w-[100px] md:w-[160px]"
            />
          </Link>
        </span>

        <ul className="hidden md:flex items-center gap-8 relative">
          {links.map((link) => (
            <>
              <Link key={link.title} href={link.href}>
                <li className="flex items-center gap-2">
                  {link.title}
                  {toggleShop ? (
                    <span onClick={handleToggleShop}>{link.icon2}</span>
                  ) : (
                    <span onClick={handleToggleShop}>{link.icon1}</span>
                  )}
                </li>
              </Link>
              {/* sub menus */}
              {toggleShop && (
                <ul className="absolute z-50 top-8 -left-2 bg-white shadow-lg rounded-lg py-3 flex flex-col gap-2">
                  {link.children &&
                    link.children.map((childLinks) => (
                      <Link key={childLinks.title} href={childLinks.href}>
                        <li className="pl-3 pr-10">{childLinks.title}</li>
                      </Link>
                    ))}
                </ul>
              )}
            </>
          ))}
        </ul>

        <span className="md:relative hidden md:block">
          {/* <input
            type="text"
            placeholder="Search for products..."
            className="w-[577px] h-[48px] bg-sc-grayBg pl-12 rounded-full outline-none"
          /> */}
          <Input
            type="text"
            placeholder="Search for products..."
            className="w-[577px] bg-sc-grayBg pl-12 rounded-full outline-none"
          />
          <FiSearch className="absolute top-3 left-4" color="gray" size={20} />
        </span>

        <article className="flex items-center gap-4">
          <IoCartOutline size={25} />
          <FaRegUserCircle size={25} />
        </article>
      </section>

      {/* mobile links */}
      {toggleNavbar && (
        <section className="md:hidden fixed bg-white h-screen w-full top-0 right-0 z-50 pt-12 px-5">
          <span className="flex flex-col gap-10">
            <IoClose
              size={30}
              onClick={handleToggleNavbar}
              className="cursor-ointer"
            />
            <Image src={logo} width={100} height={22} alt="shop.co" />
          </span>
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <li>{link.title}</li>
              </Link>
            ))}
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
