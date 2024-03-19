import React from "react";

const OverviewBox = ({
  title,
  description,
  color = "primary",
}: {
  title: string;
  description: string;
  color?: "primary" | "secondary";
}) => {
  return (
    <>
      <div
        className={`${
          color === "primary"
            ? "bg-slate-blue-900"
            : color === "secondary"
            ? "bg-slate-100"
            : ""
        } hover:bg-opacity-80 transition-all ease-in-out flex flex-col justify-start items-start p-12 xl:p-24 gap-8`}
      >
        <span
          className={`${
            color === "primary"
              ? "text-white"
              : color === "secondary"
              ? "text-slate-900"
              : ""
          } text-2xl font-bold`}
        >
          {title}
        </span>
        <p
          className={`${
            color === "primary"
              ? "text-slate-200"
              : color === "secondary"
              ? "text-slate-500"
              : ""
          } text-xl text-slate-200`}
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default OverviewBox;
