import { Button } from "@nextui-org/react";
import { ArrowRight } from "@phosphor-icons/react";
import React from "react";

const HomeHeroButton = () => {
  return (
    <>
      <Button
        className="flex gap-2 text-slate-blue-900 px-6 py-3 bg-white w-fit h-fit rounded-full items-center"
        title="nav-teams"
      >
        <span className="text-xl">Let's see our team</span>
        <ArrowRight size={32} />
      </Button>
    </>
  );
};

export default HomeHeroButton;
