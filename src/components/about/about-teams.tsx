"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getTeamsThunk } from "@/redux/features/about/about-thunk";
import { Skeleton } from "@nextui-org/react";

const AboutTeams = () => {
  const teams = useAppSelector((state) => state.aboutReducer.teams);
  const teamsLoading = useAppSelector((state) => state.aboutReducer.isLoading);

  const dispatch = useAppDispatch();

  const teamsSkeleton = () => {
    const element = [];
    for (let index = 0; index < 3; index++) {
      element.push(
        <div
          key={index}
          className="relative w-full h-full flex flex-col rounded-2xl justify-end overflow-hidden shadow-xl hover:shadow-2xl hover:scale-110 transition-all ease-in-out duration-300"
        >
          <Skeleton className="flex w-full h-full" />
          <div className="flex flex-col w-full bg-white p-8 gap-2">
            <Skeleton className="flex rounded-full w-2/3 h-6" />
            <Skeleton className="flex rounded-full w-full h-4" />
          </div>
        </div>
      );
    }

    return element;
  };

  useEffect(() => {
    dispatch(getTeamsThunk());
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-fit p-12 lg:p-24 group">
        <div className="w-full h-full lg:w-3/4 lg:pr-24 pb-12 lg:pb-24 flex flex-col gap-8">
          <span className="text-2xl text-start font-medium text-slate-blue-900">
            Company teams
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold text-start text-slate-800 flex flex-col after:content-[''] after:bg-slate-blue-900 after:group-hover:w-full after:w-0 after:h-2 after:transition-all after:ease-in-out after:duration-1000">
            Meet our highly- qualified team
          </h2>
          <p className="text-xl text-start text-slate-500">
            Zeko! into the technical expertise driving the precision in our
            architectural executions. Meet our team of technical wizards who
            ensure that every blueprint transforms seamlessly into a tangible
            masterpiece.
          </p>
        </div>
        <div className="w-full h-fit lg:h-auto flex flex-col md:flex-row gap-8">
          {
            teamsLoading ? teamsSkeleton()
            : teams.map((team, index) => (
                <div
                  key={index}
                  className="relative w-full h-full flex flex-col rounded-2xl justify-end overflow-hidden shadow-xl hover:shadow-2xl hover:scale-110 transition-all ease-in-out duration-300"
                >
                  <Image
                    className="object-cover grayscale !relative"
                    src={team.image}
                    alt={team.name}
                    fill
                  />
                  <div className="flex flex-col w-full bg-white p-8">
                    <span className="text-2xl font-bold text-slate-blue-900">
                      {team.name}
                    </span>
                    <span className="text-sm text-slate-500">
                      {team.position}
                    </span>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </>
  );
};

export default AboutTeams;
