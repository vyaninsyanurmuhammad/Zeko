import dynamic from "next/dynamic";
import React from "react";
import HomeHeroButtonText from "./home-hero-button-text";

const HomeHeroButtonTextLayout = () => {
  return (
    <>
      <div className="w-full h-fit overflow-hidden text-xl"><HomeHeroButtonText/></div>
    </>
  );
};

export default HomeHeroButtonTextLayout;
