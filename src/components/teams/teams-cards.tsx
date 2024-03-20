"use client";

import { getTeamsThunk } from "@/redux/features/teams/teams-thunk";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Skeleton } from "@nextui-org/react";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const TeamsCardLayout = dynamic(() => import('./teams-card-layout'), { ssr: false })

const TeamsCards = () => {
  const teams = useAppSelector((state) => state.teamsReducer.teams);
  const teamsLoading = useAppSelector((state) => state.teamsReducer.isLoading);

  const colors = [
    "hover:bg-slate-blue-400",
    "hover:bg-lime-500",
    "hover:bg-cyan-400",
    "hover:bg-emerald-400",
    "hover:bg-pink-400",
  ];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTeamsThunk());
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-fit flex flex-col gap-8 items-start py-24 bg-slate-800">
        <div className="flex flex-col gap-8 px-12 lg:px-24">
          <span className="text-2xl text-start font-medium text-slate-blue-900">
            Our Teams
          </span>
        </div>

        <div className="w-full flex flex-col">
          {teamsLoading ? (
            <>
              <div
                className={`w-full flex flex-row px-12 lg:px-24 py-12 justify-between items-center group gap-6 lg:gap-10`}
              >
                <div className="h-20 w-20 rounded-full flex shrink-0 relative overflow-hidden">
                  <Skeleton className="w-full h-full opacity-20" />
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-2 lg:gap-10">
                  <span className="w-full text-white text-2xl lg:text-4xl font-semibold">
                    <Skeleton className="rounded-full w-full h-6 lg:h-9 opacity-20" />
                  </span>
                  <span className="w-full flex justify-start lg:justify-center items-center text-start lg:text-center text-slate-400 group-hover:text-slate-100 text-base lg:text-3xl font-medium">
                    <Skeleton className="rounded-full w-full h-4 lg:h-8 opacity-20" />
                  </span>
                </div>

                <span className="hidden sm:flex w-1/2 justify-end items-center text-white text-xl lg:text-4xl font-medium text-end">
                  <Skeleton className="rounded-full w-full h-5 lg:h-9 opacity-20" />
                </span>
              </div>
            </>
          ) : (
            teams.map((data, index) => (
              <TeamsCardLayout
                key={index}
                color={colors[index % colors.length]}
                image={data.image}
                name={data.name}
                position={data.position}
                location={data.location}
              />
            ))
          )}
        </div>

        <span className="text-4xl lg:text-5xl font-medium text-white text-start w-3/4 pt-24 pb-12 px-12 lg:px-24">
          If you like to work in remote teams that value great work over loud
          voices, we’d love to hear from you!
        </span>
      </div>
    </>
  );
};

export default TeamsCards;
