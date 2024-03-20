import dynamic from "next/dynamic";
import React from "react";

const TeamsHero = dynamic(() => import("./teams-hero"), { ssr: false });
const TeamsCards = dynamic(() => import("./teams-cards"), { ssr: false });

const TeamsMain = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col">
        <TeamsHero />
        <TeamsCards />
      </div>
    </>
  );
};

export default TeamsMain;
