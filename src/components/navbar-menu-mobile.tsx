import { setIsNavMenuOpen } from "@/redux/features/app-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Button } from "@nextui-org/react";
import { X } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarMenuMobile = () => {
  const router = usePathname();
  const isNavOpen = useAppSelector((state) => state.appReducer.isNavMenuOpen);

  const dispatch = useAppDispatch();

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

  const onCLoseClick = () => {
    dispatch(setIsNavMenuOpen(!isNavOpen));
  };

  return (
    <>
      <div className=" fixed z-20 w-full h-full flex lg:hidden">
        <motion.div
          className="w-full h-full bg-slate-800/60"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            animation: "ease-in"
          }}
          exit={{
            opacity: 0,
            animation: "ease-out"

          }}
          onClick={() => onCLoseClick()}

        ></motion.div>
        <motion.div
          className="absolute right-0 w-4/5 h-full bg-slate-800 py-6 px-4 shadow-2xl flex flex-col gap-4 items-end"
          initial={{
            x: "50%",
          }}
          animate={{
            x: 0,
            animation: "linear",
          }}
          exit={{
            x: "100%",
            animation: "linear",
          }}
          transition={{
            x: {
              type: "spring",
              bounce: 0,
            },
          }}
        >
          <Button
            isIconOnly
            className="bg-white text-slate-blue-900"
            onClick={() => onCLoseClick()}
            title="close-nav"
          >
            <X size={24} />
          </Button>
          <div className="flex flex-col gap-1 w-full">
            {NavigationList.map((data, index) => (
              <Link
                key={index}
                href={data.route}
                shallow
                className="group w-full"
                onClick={() => onCLoseClick()}
              >
                <Button
                title={data.name}
                  className={`w-full ${
                    router === data.route
                      ? "bg-slate-blue-900"
                      : "bg-transparent"
                  } justify-start`}
                >
                  <span
                    className={`${
                      router === data.route
                        ? "font-bold"
                        : "font-normal text-white/60 after:bg-white/60"
                    } text-white text-xl`}
                  >
                    {data.name}
                  </span>
                </Button>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NavbarMenuMobile;
