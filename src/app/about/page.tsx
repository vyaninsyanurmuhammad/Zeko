import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutMain = dynamic(() => import("@/components/about/about-main"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Zeko! - About Us",
  description:
    "Zeko is a web design and development studio focused on delivering unique and satisfying digital experiences for each of our clients. Built with a team of talented and experienced professionals, we are committed to providing creative and high-quality solutions for every project. Learn more about us, our vision, and our values here.",
};

const About = () => {
  return (
    <>
      <AboutMain />
    </>
  );
};

export default About;
