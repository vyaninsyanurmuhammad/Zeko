"use client";

import {
  AmazonLogo,
  ArrowRight,
  DribbbleLogo,
  DropboxLogo,
  GithubLogo,
  GitlabLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React, { useEffect } from "react";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import dynamic from "next/dynamic";

const HomeHeroButton = dynamic(() => import("./home-hero-button"), {
  ssr: false,
});

const HomeHero = () => {
  const title = "Excellence in everything we do";
  const description =
    "Find out why Zeko is the go-to choice for top-quality services and unbeatable customer service.";

  const count = useMotionValue(0);
  const countDescription = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const roundedDescription = useTransform(countDescription, (latest) =>
    Math.round(latest)
  );

  const displayText = useTransform(rounded, (latest) => title.slice(0, latest));
  const displayTextDescription = useTransform(roundedDescription, (latest) =>
    description.slice(0, latest)
  );

  const controlMotion = (countAnimate: any, value: string, duration: number) =>
    animate(countAnimate, value.length, {
      type: "tween", // Not really needed because adding a duration will force "tween"
      duration: duration,
      ease: "easeInOut",
    });

  useEffect(() => {
    const controls = controlMotion(count, title, 5);
    const controlsDescription = controlMotion(countDescription, description, 4);

    controls.stop;
    controlsDescription.stop;
  }, [count, title, countDescription, description]);

  return (
    <>
      <div className="relative w-full h-[840px] sm:h-[960px] lg:h-[1120px] xl:h-[990px] 2xl:h-[870px] flex text-white pb-12 lg:pb-24">
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col w-full h-full">
            <div className="w-full h-full flex flex-col gap-8 p-12 lg:p-24 bg-slate-blue-900">
              <div className="w-full h-full flex flex-col justify-end gap-6 mt-24">
                <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold">
                  {displayText}
                </motion.h1>
                <motion.p className="text-xl sm:text-2xl">
                  {displayTextDescription}
                </motion.p>
              </div>
              <Link href={"/teams"}>
                <HomeHeroButton />
              </Link>
            </div>
            <div className="w-full h-fit flex justify-center sm:justify-between flex-wrap gap-3 items-center bg-slate-800 px-12 lg:px-24 py-12">
              <AmazonLogo size={52} />
              <DribbbleLogo size={52} />
              <DropboxLogo size={52} />
              <GithubLogo size={52} />
              <GitlabLogo size={52} />
            </div>
          </div>

          <div className="w-4/5 hidden lg:block relative bg-slate-blue-900">
            <Image
              className="relative object-cover object-left"
              src={
                "https://images.ctfassets.net/uflk394shvqp/3i3aQqr7h9T1fS0dXQxfi7/d8665f08c4ea9935b1c80dcc74e3c517/gd-group-discussion-tips.jpg"
              }
              fill
              sizes="100%"
              alt="hero-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
