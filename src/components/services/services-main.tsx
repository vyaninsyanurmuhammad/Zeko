import React from "react";
import dynamic from "next/dynamic";

const ServicesHero = dynamic(
  () => import("@/components/services/services-hero"),
  { ssr: false }
);

const ServicesOverview = dynamic(
  () => import("@/components/services/services-overview"),
  { ssr: false }
);

const ServicesExplain = dynamic(
  () => import("@/components/services/services-explain"),
  { ssr: false }
);

const ServicesTagline = dynamic(
  () => import("@/components/services/services-tagline"),
  { ssr: false }
);

const ServicesMain = () => {
  return (
    <>
      <div className="flex flex-col w-full h-fit">
        <ServicesHero />
        <ServicesOverview />
        <ServicesExplain />
        <ServicesTagline />
      </div>
    </>
  );
};

export default ServicesMain;
