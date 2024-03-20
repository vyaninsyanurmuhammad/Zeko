import React from "react";

const ServicesExplainLayout = ({
  title,
  description,
  listDescription,
  className,
}: {
  title: string;
  description: string;
  listDescription: string[];
  className?: string;
}) => {
  return (
    <>
      <div
        className={`flex flex-col gap-8 px-12 lg:px-24 py-12 ${className} transition-all duration-200 ease-in-out group`}
      >
        <h2
          className={`w-fit text-5xl lg:text-7xl font-bold text-start flex flex-col text-slate-800 after:content-[''] after:bg-slate-blue-900 after:group-hover:w-full after:w-0 after:h-2 after:transition-all after:ease-in-out after:duration-1000`}
        >
          {title}
        </h2>
        <p className="text-xl text-start text-slate-500">{description}</p>

        <ul className="list-disc text-xl text-slate-500 pl-12 lg:pl-24">
          {listDescription.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ServicesExplainLayout;
