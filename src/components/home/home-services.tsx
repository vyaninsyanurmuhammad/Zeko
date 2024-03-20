import React from "react";
import HomeServicesLayout from "./home-services-layout";

const HomeServices = () => {
  return (
    <>
      <div className="flex flex-col w-full p-12 lg:p-24 pb-24 lg:pb-48 justify-center gap-24">
        <div className="flex flex-col gap-8">
          <span className="text-2xl text-center font-medium text-slate-blue-900">
            Company Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center text-slate-800">
            A quick and easy guide to using our service
          </h2>
        </div>

        <div className="w-full h-fit flex flex-col lg:flex-row gap-8 lg:gap-16">
          <HomeServicesLayout
            number={"01"}
            desctiption={
              "A client reaches out to the agency with a specific need or problem they are facing. This could be anything from needing a new website designed to wanting to increase their social media presence."
            }
          />
          <span className="h-px lg:w-px lg:my-7 flex bg-slate-blue-300 rounded-full"></span>

          <HomeServicesLayout
            number={"02"}
            desctiption={
              "The agency conducts a consultation with the client to gather more information about their goals, target audience, budget, and any other relevant details."
            }
          />
          <span className="h-px lg:w-px lg:my-7 flex bg-slate-blue-300 rounded-full"></span>

          <HomeServicesLayout
            number={"03"}
            desctiption={
              "Based on the consultation, the agency creates a customized plan to address the client's needs. This may include a mix of services such as design, development, content creation."
            }
          />
        </div>
      </div>
    </>
  );
};

export default HomeServices;
