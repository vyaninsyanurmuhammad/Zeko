import { Atom } from "@phosphor-icons/react/dist/ssr";
import dynamic from "next/dynamic";
import React from "react";

const NavbarLogoText = dynamic(() => import("./navbar-logo-text"));

const NavbarLogo = () => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <Atom size={32} />
        <NavbarLogoText/>
      </div>
    </>
  );
};

export default NavbarLogo;
