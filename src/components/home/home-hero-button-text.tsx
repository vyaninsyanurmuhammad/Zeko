import React from "react";

const HomeHeroButtonText = () => {
  return (
    <>
      <span className="w-full h-fit hidden sm:block">
        Let&apos;s see our team
      </span>
      <span className="w-full h-fit block sm:hidden">
        Our team
      </span>
    </>
  );
};

export default HomeHeroButtonText;
