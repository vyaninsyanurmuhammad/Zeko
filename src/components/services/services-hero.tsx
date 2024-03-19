"use client";

import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import React, { useEffect } from "react";

const ServicesHero = () => {
  const title =
    "As your strategic partner, we'll immerse ourselves into your culture, challenge assumptions, and ignite holistic change.";

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => title.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, title.length, {
      type: "tween", // Not really needed because adding a duration will force "tween"
      duration: 10,
      ease: "easeInOut",
    });

    controls.stop;
  }, [count, title]);

  return (
    <>
      <div className="flex w-full h-fit pb-12 lg:pb-24">
        <div className="w-full h-[540px] lg:h-[720px] xl:h-[640px] bg-slate-blue-900 p-12 lg:p-24 gap-8 flex flex-col justify-end">
          <motion.h1 className="pt-24 text-4xl md:text-5xl lg:text-7xl font-semibold text-white text-center">
            {displayText}
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default ServicesHero;
