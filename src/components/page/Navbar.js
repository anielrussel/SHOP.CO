"use client";

import React, { useState, forwardRef } from "react";
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  {
    id: "shop",
    title: "Shop",
    href: "/shop",
  },
  { id: "onsale", title: "On Sale", href: "#" },
  { id: "newarrival", title: "New Arrivals", href: "#" },
  { id: "brands", title: "Brands", href: "#" },
];

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

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
          <Sheet>
            <SheetTrigger asChild>
              <LuMenu
                size={30}
                onClick={handleToggleNavbar}
                className="cursor-pointer md:hidden block"
              />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                {links.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <SheetTitle>{link.title}</SheetTitle>
                  </Link>
                ))}
              </SheetHeader>
            </SheetContent>
          </Sheet>

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

        <ul className="hidden md:flex items-center gap-4 relative">
          {links.map((link) => (
            <div key={link.id}>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    {link?.children ? (
                      <NavigationMenuTrigger>
                        {link.title}
                      </NavigationMenuTrigger>
                    ) : (
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                    <NavigationMenuContent>
                      <ul className="flex flex-col gap-0 w-[200px]">
                        {link.children &&
                          link.children.map((childLinks) => (
                            <ListItem
                              key={childLinks.id}
                              title={childLinks.title}
                              href={childLinks.href}
                            >
                              {childLinks?.description}
                            </ListItem>
                          ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
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

      {/* {toggleNavbar && (
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
      )} */}
    </nav>
  );
};

export default Navbar;
