import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

const HomeOverviewValueLayout = ({
  title,
  description,
  image,
  imagePostiton = "left",
}: {
  title: string;
  description: string;
  image: string;
  imagePostiton?: "left" | "right";
}) => {
  return (
    <>
      <div className="w-full h-fit flex flex-col lg:flex-row group">
        {imagePostiton === "left" ? (
          <>
            <HomeOverviewValueImage
              image={image}
              title={title.toLowerCase().split(" ").join("-")}
            />
            <HomeOverviewValueContent
              title={title}
              description={description}
              imagePostiton={imagePostiton}
            />
          </>
        ) : imagePostiton === "right" ? (
          <>
            <HomeOverviewValueContent
              title={title}
              description={description}
              imagePostiton={imagePostiton}
            />
            <HomeOverviewValueImage
              image={image}
              title={title.toLowerCase().split(" ").join("-")}
            />
          </>
        ) : (
          <>
            <HomeOverviewValueImage
              image={image}
              title={title.toLowerCase().split(" ").join("-")}
            />
            <HomeOverviewValueContent
              title={title}
              description={description}
              imagePostiton={imagePostiton}
            />
          </>
        )}
      </div>
    </>
  );
};

const HomeOverviewValueContent = ({
  title,
  description,
  imagePostiton,
}: {
  title: string;
  description: string;
  imagePostiton: "left" | "right";
}) => {
  return (
    <>
      <div
        className={`w-full lg:w-1/2 flex flex-col gap-8 items-start py-12 lg:py-24 ${
          imagePostiton === "left"
            ? "lg:pl-24"
            : imagePostiton === "right"
            ? "lg:pr-24"
            : ""
        }`}
      >
        <div className="flex flex-col gap-6 items-start">
          <span className="text-2xl text-center font-medium text-slate-blue-900">
            Our Value
          </span>
          <h2 className="flex flex-col text-4xl lg:text-5xl xl:text-7xl font-semibold text-start text-slate-800 after:content-[''] after:bg-slate-blue-900 after:group-hover:w-full after:w-0 after:h-2 after:transition-all after:ease-in-out after:duration-1000">
            {title}
          </h2>
        </div>

        <p className="text-2xl text-gray-500">{description}</p>
      </div>
    </>
  );
};

const HomeOverviewValueImage = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <div className="hidden lg:block w-full lg:w-1/2 relative bg-slate-blue-900">
      <Image
        className="object-cover"
        src={image}
        sizes="100%"
        alt={title}
        fill
        priority
      />
    </div>
  );
};

export default HomeOverviewValueLayout;
