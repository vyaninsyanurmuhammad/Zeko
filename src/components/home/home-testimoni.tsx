import React from "react";
import HomeTestimoniCard from "./home-testimoni-card";

const HomeTestimoni = () => {
  return (
    <>
      <div className="flex flex-col w-full px-12 lg:px-24 py-24 lg:py-48 gap-24 bg-slate-100">
        <div className="flex flex-col gap-8">
          <span className="text-2xl text-center lg:text-start font-medium text-slate-blue-900">
            Testimonial
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold text-center lg:text-start text-slate-800">
            Find out how we've made a difference for others
          </h2>
        </div>
        <div className="h-fit column-1 lg:columns-3 gap-12 space-y-20">
          <HomeTestimoniCard
            comment={
              "I recently used Superb! to create my landing page and it was a breeze."
            }
            name={"Asal Design"}
            from={"CEO, Kretya Studio"}
          />
          <HomeTestimoniCard
            comment={
              "The drag-and-drop interface made it easy to customize and the end result was exactly what I was looking for."
            }
            name={"Burno Wilish"}
            from={"Ul Designer, Kretya Studio"}
          />
          <HomeTestimoniCard
            comment={
              "Thanks for the great service. We've used zeko for the last five years. Great job."
            }
            name={"Bjorgan"}
            from={"Co-Founder, Kretya Studio"}
          />
          <HomeTestimoniCard
            comment={"Zeko is worth much more than I paid. We're loving it."}
            name={"Celline Lavn"}
            from={"UI Designer, Kretya Studio"}
          />
          <HomeTestimoniCard
            comment={"I've tried so many different products in the past to solve my [insert problem], but none of them have worked as well as the XYZ Product."}
            name={"Justine Drago"}
            from={"UI/UX Designer, Kretya Studio"}
          />
          <HomeTestimoniCard
            comment={"I've been using the Zeko for a few months now and I'm blown away by the results."}
            name={"Merine Excore"}
            from={"UX Writter, Kretya Studio"}
          />
        </div>
      </div>
    </>
  );
};

export default HomeTestimoni;
