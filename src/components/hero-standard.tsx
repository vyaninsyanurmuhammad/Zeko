"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

const HeroStandard = ({
  title,
  subTitle,
  imageSrc,
}: {
  title: string;
  subTitle: string;
  imageSrc: string;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => title.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, title.length, {
      type: "tween", // Not really needed because adding a duration will force "tween"
      duration: 3,
      ease: "easeInOut",
    });
    
    controls.stop;
  }, []);

  return (
    <>
      <div className="flex w-full h-fit pb-12 lg:pb-24">
        <div className="w-full h-[720px] xl:h-[520px] bg-slate-blue-900 p-12 lg:p-24 gap-8 flex flex-col justify-end">
          <motion.h1 className="pt-24 text-5xl font-bold text-white">
            {displayText}
          </motion.h1>
          <p className="text-2xl text-white">{subTitle}</p>
        </div>
        <div className="hidden lg:block relative w-full bg-slate-blue-900">
          <Image
            className="object-cover"
            src={imageSrc}
            fill
            sizes="100%"
            alt="standard-hero-img"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default HeroStandard;
