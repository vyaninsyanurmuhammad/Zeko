import { Atom } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const HomeCompanyTagline = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-12 p-12 lg:p-24 bg-gradient-to-r from-slate-blue-900 from-40% to-slate-800 text-white items-center">
        <Atom size={48} weight="bold"/>
        <span className="text-center lg:text-start text-5xl font-semibold">Get in touch to see how we can help.</span>
      </div>
    </>
  );
};

export default HomeCompanyTagline;
