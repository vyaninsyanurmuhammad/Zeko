import React from "react";

const HomeServicesLayout = ({
  number,
  desctiption,
}: {
  number: string;
  desctiption: string;
}) => {
  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <div className="h-20 w-20 rounded-full flex justify-center items-center bg-slate-blue-900 shrink-0">
          <span className="text-white text-4xl">{number}</span>
        </div>
        <p className="text-xl sm:text-2xl text-gray-500">{desctiption}</p>
      </div>
    </>
  );
};

export default HomeServicesLayout;
