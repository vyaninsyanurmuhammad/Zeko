import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

const TeamsMain = dynamic(() => import("@/components/teams/teams-main"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Zeko! - Teams",
  description:
    "At Zeko, we take pride in our talented and experienced team. Comprising creative professionals and technology experts, our team collaborates to deliver the best solutions for every project. Get insights into our team members, their skills, and how they can help you achieve your digital goals.",
};

const TeamsPage = () => {
  return (
    <>
      <TeamsMain />
    </>
  );
};

export default TeamsPage;
