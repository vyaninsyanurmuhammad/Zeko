import React from "react";
import Image from "next/image";

const AboutHistory = () => {
  return (
    <>
      <div className="flex flex-col gap-24 p-12 lg:p-24">
        <div className="flex flex-col gap-8">
          <span className="text-2xl text-start font-medium text-slate-blue-900">
            Company History
          </span>
          <p className="text-xl text-start text-slate-800">
            At Zeko, our journey began with a simple yet ambitious vision: to
            revolutionize the way people connect and interact with technology.
            Founded in 2015 by tech enthusiasts Alex and Maya, Zeko started as a
            humble startup in a garage, fueled by passion and driven by
            innovation. Since then, we&apos;ve grown exponentially, reaching
            milestones that once seemed distant dreams. From launching our first
            product to expanding into new markets, every step of our journey has
            been marked by perseverance, creativity, and a relentless pursuit of
            excellence.
          </p>
        </div>
        <div className="h-[560px] w-full rounded-2xl bg-slate-blue-900 overflow-hidden relative">
          <Image className="h-full w-full !relative object-cover" sizes="100%" src={"https://images.ctfassets.net/uflk394shvqp/3i3aQqr7h9T1fS0dXQxfi7/d8665f08c4ea9935b1c80dcc74e3c517/gd-group-discussion-tips.jpg"} fill alt="history-img-1"/>
        </div> 
      </div>
    </>
  );
};

export default AboutHistory;
