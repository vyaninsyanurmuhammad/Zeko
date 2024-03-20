import Image from "next/image";
import React from "react";

const HomeTestimoniCard = ({
  comment,
  name,
  from,
  image,
}: {
  comment: string;
  name: string;
  from: string;
  image: string;
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 break-inside-avoid group">
        <p className="text-2xl p-10 rounded-3xl bg-white w-fit text-slate-800 font-semibold group-hover:shadow-xl group-hover:scale-110 transition-all ease-in-out">
        &ldquo;{comment}&rdquo;
        </p>

        <div className="flex gap-4 items-center">
          <div className="h-16 w-16 flex shrink-0 bg-slate-blue-900 rounded-full relative overflow-hidden">
            <Image
              src={image}
              fill
              sizes="100%"
              alt={name}
              className="!relative h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-semibold text-slate-800">
              {name}
            </span>
            <span className="text-lg text-gray-500">{from}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTestimoniCard;
