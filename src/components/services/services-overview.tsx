import React from "react";
import OverviewBox from "../overview-box";

const ServicesOverview = () => {
  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-4 p-12 lg:p-24">
        <div className="col-span-1 flex flex-col gap-8 py-12 lg:py-24 lg:pr-24 justify-center">
          <p className="text-xl text-start text-slate-500">
            At Zeko, we&apos;re dedicated to providing innovative solutions that
            empower individuals and businesses to thrive in today&apos;s digital
            world. Explore our range of products and services designed to
            streamline your workflow, enhance your productivity, and unlock new
            possibilities
          </p>
        </div>
        <OverviewBox
          title={"Investigate, Deeply"}
          description={
            "We believe in the power of research. By diving deep into your culture, industry trends, and user needs, we uncover the hidden insights that will inform our strategic approach."
          }
          color="primary"
        />
        <OverviewBox
          title={"Create, Boldly"}
          description={
            "Empowered by our deep investigations, we ignite creativity at every turn. From memorable brand narratives, invigorating websites to scalable products, our design work aims to inspire teams and captivate audiences."
          }
          color="secondary"
        />
        <OverviewBox
          title={"Build, Reliably"}
          description={
            "Through the lens of technology, our designs come to life. We craft dependable and adaptable websites and products, turning ideas into tangible digital realities."
          }
          color="primary"
        />
        <div className="col-span-2 relative flex flex-col bg-slate-100">
          <div className="h-full w-full px-12 py-12 flex flex-col xl:flex-row items-center gap-8 hover:bg-violet-100 transition-all duration-200 ease-in-out">
            <span className="text-4xl font-bold text-slate-blue-900 w-full lg:w-1/5">
              $75m
            </span>
            <span className="text-2xl text-slate-500 w-full">
              IMMO’s record-setting $75 million Series B is the largest for a
              proptech in Europe.
            </span>
          </div>
          <div className="h-full w-full px-12 py-12 flex flex-col xl:flex-row items-center gap-8 hover:bg-teal-100 transition-all duration-200 ease-in-out">
            <span className="text-4xl font-bold text-slate-blue-900 w-full lg:w-1/5">
              90%
            </span>
            <span className="text-2xl text-slate-500 w-full">
              Satisfaction rate achieved during user tests and focus groups for
              the Progressive Insurance agent quoting app.
            </span>
          </div>
          <div className="h-full w-full px-12 py-12 flex flex-col xl:flex-row items-center gap-8 hover:bg-amber-100 transition-all duration-200 ease-in-out">
            <span className="text-4xl font-bold text-slate-blue-900 w-full lg:w-1/5">
              200m
            </span>
            <span className="text-2xl text-slate-500 w-full">
              200 million daily users relish communicating with their clients
              using the new Crisp product suite.
            </span>
          </div>
        </div>
        <OverviewBox
          title={"Fun"}
          description={
            "We believe that work should be enjoyable, so we infuse a sense of fun and camaraderie into everything we do."
          }
          color="primary"
        />
        <OverviewBox
          title={"Improve, Always"}
          description={
            "We believe in continuous improvement, tirelessly refining and enhancing your digital presence with ongoing analysis and thoughtful optimization."
          }
          color="secondary"
        />
      </div>
    </>
  );
};

export default ServicesOverview;
