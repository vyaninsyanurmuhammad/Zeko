import dynamic from "next/dynamic";
import React from "react";

const HeroStandard = dynamic(() => import("@/components/hero-standard"), {
  ssr: false,
});

const AboutHistory = dynamic(() => import("@/components/about/about-history"), {
  ssr: false,
});

const AboutCulture = dynamic(() => import("@/components/about/about-culture"), {
  ssr: false,
});

const AboutTeams = dynamic(() => import("@/components/about/about-teams"), {
  ssr: false,
});

const AboutMain = () => {
  return (
    <>
      <div className="flex flex-col w-full h-fit">
        <HeroStandard
          title="Welcome to Zeko! We're more than just a company;"
          subTitle="we're a community driven by passion, innovation, and a commitment to excellence. Learn more about who we are, our journey, our team, and our culture."
          imageSrc={
            "https://images.ctfassets.net/uflk394shvqp/uoBF4A1zgTdZYKScFgatg/d61e617cb042f30cad9a03c5dab08c89/161-jenis-jenis-meeting.webp"
          }
        />
        <AboutHistory />
        <AboutCulture />
        <AboutTeams />
      </div>
    </>
  );
};

export default AboutMain;
