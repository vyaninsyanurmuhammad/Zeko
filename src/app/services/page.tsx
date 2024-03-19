import React, { useEffect } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ServicesHero = dynamic(
  () => import("@/components/services/services-hero"),
  { ssr: false }
);

const ServicesOverview = dynamic(
  () => import("@/components/services/services-overview"),
  { ssr: false }
);

const ServicesMain = dynamic(
  () => import("@/components/services/services-main"),
  { ssr: false }
);

const ServicesTagline = dynamic(
  () => import("@/components/services/services-tagline"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Zeko! - Services",
  description:
    "With our diverse range of services, Zeko is here to meet all your web design and development needs. From stunning responsive web designs to advanced app development, we are ready to help you bring your digital projects to life. Discover our comprehensive services and find the right solution for your project.",
};

const Services = () => {
  return (
    <>
      <div className="flex flex-col w-full h-fit">
        <ServicesHero />
        <ServicesOverview />
        <ServicesMain />
        <ServicesTagline />
      </div>
    </>
  );
};

export default Services;
