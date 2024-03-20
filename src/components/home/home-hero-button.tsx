import { Button } from "@nextui-org/react";
import { ArrowRight } from "@phosphor-icons/react";
import React from "react";

const HomeHeroButton = () => {
  return (
    <>
      <Button
        className="flex gap-2 text-slate-blue-900 px-6 py-3 bg-white w-full sm:w-fit h-fit rounded-full items-center overflow-hidden"
        title="nav-teams"
      >
        <div className="w-full h-fit overflow-hidden">
          <span className="hidden sm:block text-xl truncate">Let&apos;s see our team</span>
          <span className="block sm:hidden text-xl truncate">Our team</span>
        </div>
        <ArrowRight size={32} />
      </Button>
    </>
  );
};

export default HomeHeroButton;
