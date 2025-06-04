import React from "react";
import { IconHero } from "./icon-hero";

const LandingTitle: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 ">
      <div className="items-start max-w-[580px] p-4">
        <h1 className="text-8xl font-black">Brian Brown</h1>
        <h3 className="text-muted-foreground text-2xl">
          I’m a computer engineer based in Boston, MA. I’m passionate about
          creative solutions, automation, and innovation.
        </h3>
      </div>
      <IconHero />
    </div>
  );
};

export default LandingTitle;
