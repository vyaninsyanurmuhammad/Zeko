import dynamic from "next/dynamic";
import React from "react";

const HomeHero = dynamic(() => import("@/components/home/home-hero"), {
  ssr: false,
});

const HomeOverview = dynamic(() => import("@/components/home/home-overview"), {
  ssr: false,
});

const HomeServices = dynamic(() => import("@/components/home/home-services"), {
  ssr: false,
});

const HomeTestimoni = dynamic(
  () => import("@/components/home/home-testimoni"),
  {
    ssr: false,
  }
);

const HomeCompanyTagline = dynamic(
  () => import("@/components/home/home-company-tagline"),
  {
    ssr: false,
  }
);

const HomeMain = () => {
  return (
    <>
      <div className="h-full w-full overflow-y-auto scroll-smooth">
        <HomeHero />
        <HomeOverview />
        <HomeServices />
        <HomeTestimoni />
        <HomeCompanyTagline />
      </div>
    </>
  );
};

export default HomeMain;
