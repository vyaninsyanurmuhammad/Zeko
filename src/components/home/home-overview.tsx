import React from "react";
import HomeOverviewValueLayout from "./home-overview-value-layout";
import OverviewOne from "@/assets/images/overview-1.png"
import OverviewTwo from "@/assets/images/overview-2.png"
import OverviewThree from "@/assets/images/overview-3.png"

const HomeOverview = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col gap-24 items-center p-12 lg:p-24">
        <div className="flex flex-col gap-8">
          <span className="text-2xl text-center font-medium text-slate-blue-900">
            Company Overview
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold text-center text-slate-800">
            Learn about the guiding principles that drive Zeko to succeed.
          </h2>
        </div>
        <div className="w-full h-fit flex flex-col">
          <HomeOverviewValueLayout
            title={"Our Core Value"}
            description={
              "At Zeko, we are committed to producing high-quality products that are aligned with our core values. These values shape everything we do, from the design and development of our products to the way we interact with our customers. Discover what sets us apart and inspires us to be the best we can be."
            }
            image={OverviewOne}
          />
          <HomeOverviewValueLayout
            title={"Why We Do What We Do"}
            description={
              "At Zeko, we are driven by a strong sense of purpose and a passion for what we do. Our values are the foundation of our business, and they guide every decision we make. From sustainability and innovation to customer satisfaction and social responsibility."
            }
            imagePostiton="right"
            image={OverviewTwo}

          />
          <HomeOverviewValueLayout
            title={"Our Commitment to Excellence"} description={
              "At Zeko, we strive for excellence in everything we do. Our values are the driving force behind our product and our business, and we are committed to continuously improving and exceeding our customers' expectations."
            }
            imagePostiton="left"
            image={OverviewThree}

          />
        </div>
      </div>
    </>
  );
};

export default HomeOverview;
