import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

import logo  from '../../../../public/SHOP.CO.png'

const links = [
  {title: 'Shop', href: '#'},
  {title: 'On Sale', href: '#'},
  {title: 'New Arrivals', href: '#'},
  {title: 'Brands', href: '#'},
]
const Navbar = ({children}) => {
  return (
    <main>
      <div>
      <section className="bg-black text-white text-sm font-light text-center py-2">
        <p>
          Sign up and get 20% off to your first order.{" "}
          <span className="underline font-normal">Sign Up Now</span>
        </p>
      </section>

      <section className="flex items-center justify-between px-20 py-5">
        <Image src={logo} width={160} height={22} alt="shop.co" />

        <ul className="flex items-center gap-8">
          {links.map((link, index) => <Link key={index} href={link.href}>
          <li>{link.title}</li>
          </Link>)}
        </ul>

        <span className="relative">
          <input type="text" placeholder="Search for products..." className="w-[577px] h-[48px] bg-sc-grayBg pl-12 rounded-full outline-none"/>
          <FiSearch className="absolute top-3 left-4" color="gray" size={20} />
        </span>

        <article className="flex items-center gap-4">
          <IoCartOutline size={25} />
          <FaRegUserCircle size={25} />
        </article>
      </section>
      </div>

      <div className="">
        {children}
      </div>
    </main>
  );
};

export default Navbar;
