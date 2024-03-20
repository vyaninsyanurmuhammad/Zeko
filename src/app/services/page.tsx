import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ServicesMain = dynamic(
  () => import("@/components/services/services-main"),
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
      <ServicesMain />
    </>
  );
};

export default Services;
