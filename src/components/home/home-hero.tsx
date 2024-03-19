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
import HeroImage from "@/assets/images/hero-image.png";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import Link from "next/link";

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
  }, []);

  return (
    <>
      <div className="relative w-full h-[960px] lg:h-[1120px] xl:h-[990px] 2xl:h-[870px] flex text-white pb-12 lg:pb-24">
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col w-full h-full">
            <div className="w-full h-full flex flex-col gap-8 p-12 lg:p-24 bg-slate-blue-900">
              <div className="w-full h-full flex flex-col justify-end gap-6 mt-24">
                <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold">
                  {displayText}
                </motion.h1>
                <motion.p className="text-xl">
                  {displayTextDescription}
                </motion.p>
              </div>
              <div className="flex gap-2 text-slate-blue-900 px-6 py-3 bg-white w-fit h-fit rounded-full items-center">
                <Link href={"/teams"}>
                  <span className="text-xl">Let's see our team</span>
                </Link>
                <ArrowRight size={32} />
              </div>
            </div>
            <div className="w-full h-fit flex justify-center sm:justify-between flex-wrap gap-3 items-center bg-slate-800 px-12 lg:px-24 py-12">
              <AmazonLogo size={52} />
              <DribbbleLogo size={52} />
              <DropboxLogo size={52} />
              <GithubLogo size={52} />
              <GitlabLogo size={52} />
            </div>
          </div>

          <div className="w-2/3 hidden lg:block lg:relative bg-blue-500">
            <Image
              className="relative object-cover"
              src={HeroImage.src}
              fill
              alt="hero-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
