"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const HomeHeroDescription = () => {
  const description =
    "Find out why Zeko is the go-to choice for top-quality services and unbeatable customer service.";

  const countDescription = useMotionValue(0);

  const roundedDescription = useTransform(countDescription, (latest) =>
    Math.round(latest)
  );

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
    const controlsDescription = controlMotion(countDescription, description, 4);

    controlsDescription.stop;
  }, [countDescription, description]);

  return (
    <>
      <motion.p className="text-xl sm:text-2xl">
        {displayTextDescription}
      </motion.p>
    </>
  );
};

export default HomeHeroDescription;
