"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getTestimoniesThunk } from "@/redux/features/home/home-thunk";
import dynamic from "next/dynamic";
import { Skeleton } from "@nextui-org/react";

const HomeTestimoniCard = dynamic(() => import("./home-testimoni-card"), {
  ssr: false,
});

const HomeTestimoni = () => {
  const testimonies = useAppSelector((state) => state.homeReducer.testimonies);
  const isLoading = useAppSelector((state) => state.homeReducer.isLoading);

  const dispatch = useAppDispatch();

  const skeletonTestimoni = () => {
    const element = [];

    for (let index = 0; index < 3; index++) {
      element.push(
        <div
          key={index}
          className="flex flex-col gap-4 break-inside-avoid group"
        >
          <Skeleton className="h-32 w-full rounded-3xl group-hover:shadow-xl group-hover:scale-110 transition-all ease-in-out bg-default-200 shadow-md" />

          <div className="flex gap-4 items-center">
            <Skeleton className="h-16 w-16 flex shrink-0 rounded-full relative shadow-md" />
            <div className="w-full h-fit flex flex-col gap-2 justify-center">
              <Skeleton className="h-6 w-full rounded-full bg-default-200 shadow-md" />
              <Skeleton className="h-5 w-3/4 rounded-full bg-slate-800 shadow-md"></Skeleton>
            </div>
          </div>
        </div>
      );
    }

    return element;
  };

  useEffect(() => {
    dispatch(getTestimoniesThunk());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col w-full px-12 lg:px-24 py-24 lg:py-48 gap-24 bg-slate-100">
        <div className="flex flex-col gap-8">
          <span className="text-2xl text-center lg:text-start font-medium text-slate-blue-900">
            Testimonial
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold text-center lg:text-start text-slate-800">
            Find out how we&apos;ve made a difference for others
          </h2>
        </div>
        <div className="h-fit column-1 lg:columns-3 gap-12 space-y-20">
          {isLoading
            ? skeletonTestimoni()
            : testimonies.map((testimoni, index) => (
                <HomeTestimoniCard
                  key={index}
                  comment={testimoni.message}
                  name={testimoni.name}
                  from={testimoni.position}
                  image={testimoni.image}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default HomeTestimoni;
