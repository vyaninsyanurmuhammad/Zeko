import { Button } from "@nextui-org/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import dynamic from "next/dynamic";
import HomeHeroButtonTextLayout from "./home-hero-button-text-layout";

const HomeHeroButton = () => {
  return (
    <>
      <Button
        className="flex gap-2 text-slate-blue-900 px-6 py-3 bg-white w-full sm:w-fit h-fit rounded-full items-center overflow-hidden"
        title="nav-teams"
      >
        <HomeHeroButtonTextLayout />
        <ArrowRight size={32} />
      </Button>
    </>
  );
};

export default HomeHeroButton;
