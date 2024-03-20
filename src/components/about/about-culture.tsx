"use client";

import React from "react";
import OverviewBox from "../overview-box";

const AboutCulture = () => {
  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-4 p-12 lg:p-24 group">
        <div className="col-span-2 flex flex-col gap-8 lg:pr-24 pb-12 lg:pb-24">
          <span className="text-2xl text-start font-medium text-slate-blue-900">
            Company Culture
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-800 flex flex-col after:content-[''] after:bg-slate-blue-900 after:group-hover:w-full after:w-0 after:h-2 after:transition-all after:ease-in-out after:duration-1000">
            At Zeko, we don&apos;t just build products
          </h2>
          <p className="text-xl sm:text-2xl text-start text-slate-500">
            we foster a culture of collaboration, creativity, and continuous
            learning. Our values guide everything we do, shaping our
            interactions, decisions, and aspirations.
          </p>
        </div>
        <OverviewBox
          title={"Innovation"}
          description={
            "We thrive on pushing the boundaries of what's possible, constantly seeking new ways to innovate and disrupt the status quo"
          }
        />
        <OverviewBox
          title={"Collaboration"}
          description={
            "We believe that the best ideas emerge from diverse perspectives, so we foster an environment where teamwork and cooperation are celebrated."
          }
          color="secondary"
        />

        <div className="hidden lg:block lg:row-span-1" />
        <OverviewBox
          title={"Customer-Centricity"}
          description={
            "Our customers are at the heart of everything we do. We listen, we empathize, and we go above and beyond to exceed their expectations"
          }
          color="primary"
        />
        <OverviewBox
          title={"Integrity"}
          description={
            "We uphold the highest standards of integrity and ethics in all our dealings, earning the trust and respect of our customers, partners, and colleagues."
          }
          color="secondary"
        />
        <OverviewBox
          title={"Fun"}
          description={
            "We believe that work should be enjoyable, so we infuse a sense of fun and camaraderie into everything we do."
          }
          color="primary"
        />
      </div>
    </>
  );
};

export default AboutCulture;
