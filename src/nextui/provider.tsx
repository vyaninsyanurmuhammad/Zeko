"use client";

import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";

const NextUILocalProvider = ({children} : {children: ReactNode}) => {
  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>
    </>
  );
};

export default NextUILocalProvider;
