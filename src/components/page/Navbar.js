"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

import logo from "../../../public/SHOP.CO.png";

import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
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
  }
);
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [toggleShop, setToggleShop] = useState(false);

  const pathname = usePathname();

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
        <span className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <div>
                <LuMenu
                  size={30}
                  onClick={handleToggleNavbar}
                  className="cursor-pointer md:hidden block"
                />
              </div>
            </SheetTrigger>
            <SheetTitle className="sr-only">Menu-Bar</SheetTitle>
            <SheetDescription className="sr-only">Menu-Bar</SheetDescription>
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

          <Link href={"/"} passHref>
            <Image
              src={logo}
              // width={160}
              // height={22}
              // style={{ width: "auto", height: "auto" }}
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
                          className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                            pathname === link.href ? "bg-accent" : ""
                          }
                         `}
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
          <Input
            type="text"
            placeholder="Search for products..."
            className="w-[577px] bg-sc-grayBg pl-12 rounded-full outline-none"
          />
          <FiSearch className="absolute top-3 left-4" color="gray" size={20} />
        </span>

        <article className="flex items-center gap-4">
          <Link href={"/cart"} passHref>
            <IoCartOutline size={25} />
          </Link>
          <FaRegUserCircle size={25} />
        </article>
      </section>
    </nav>
  );
};

export default Navbar;
