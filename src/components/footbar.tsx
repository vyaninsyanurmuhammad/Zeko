import { Atom } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Footbar = () => {
  return (
    <>
      <div className="w-full p-12 lg:p-24 flex flex-col gap-12">
        <div className="flex gap-8 text-slate-blue-900">
          <Atom size={48} weight="bold" />
          <span className="text-5xl font-bold">Zeko!</span>
        </div>
        <div className="w-full flex flex-col gap-6">
          <span className="h-px flex bg-slate-blue-300 rounded-full"></span>
          <span className="text-lg text-gray-500">© 2022 Zeko!. All rights reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footbar;
