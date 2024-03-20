"use client";

import { setIsNavMenuOpen } from "@/redux/features/app-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Button } from "@nextui-org/react";
import { Atom, Equals } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

const NavbarLogo = dynamic(() => import("./navbar-logo"));
const NavbarMenuMobile = dynamic(() => import("./navbar-menu-mobile"));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [direction, setDirection] = useState("up");

  const router = usePathname();

  const isNavOpen = useAppSelector((state) => state.appReducer.isNavMenuOpen);

  let scrollY = 0;

  const NavigationList = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About Us",
      route: "/about",
    },
    {
      name: "Services",
      route: "/services",
    },
    {
      name: "Teams",
      route: "/teams",
    },
  ];

  const dispatch = useAppDispatch();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const controlDirection = () => {
    if (window.scrollY > scrollY) {
      setDirection("down");
    } else {
      setDirection("up");
    }

    scrollY = window.scrollY;
  };

  const onCLoseClick = () => {
    dispatch(setIsNavMenuOpen(!isNavOpen));
  };

  useEffect(() => {
    // Attach the event listener
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", controlDirection);
    // Remove the event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  return (
    <>
      <AnimatePresence>{isNavOpen && <NavbarMenuMobile />}</AnimatePresence>
      <div
        className={`fixed w-full h-fit px-12 lg:px-24 py-6 z-10 ${
          isScrolled ? "bg-slate-blue-900" : ""
        } ${
          direction === "down" ? "-top-72" : "top-0"
        } transition-all ease-in-out duration-700`}
      >
        <div className="flex w-full justify-between items-center text-white">
          <div className="flex w-fit gap-9 items-center">
            <Link href={"/"} shallow>
              <NavbarLogo/>
            </Link>
            <div className="hidden lg:flex gap-9">
              {NavigationList.map((data, index) => (
                <Link
                  key={index}
                  href={data.route}
                  shallow
                  className="group w-fit"
                >
                  <span
                    className={`${
                      router === data.route
                        ? "font-bold after:w-full after:bg-white"
                        : "font-normal text-white/60 after:bg-white/60"
                    } text-xl flex flex-col after:content-['' after:group-hover:w-full after:w-0 after:h-[3px] after:rounded-full after:transition-all after:ease-in-out after:duration-1000`}
                  >
                    {data.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <Button
            isIconOnly
            className={`${
              isScrolled
                ? "bg-white text-slate-blue-900"
                : "bg-slate-blue-900 text-white"
            } flex lg:hidden transition-all ease-in-out duration-700`}
            title="open-nav"
          >
            <Equals size={24} onClick={() => onCLoseClick()} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
