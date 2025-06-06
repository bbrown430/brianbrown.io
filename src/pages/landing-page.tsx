import React from "react";
import { IconHero } from "../components/landing-page/icon-hero";
import Timeline from "../components/landing-page/timeline";
import LandingTypography from "@/components/landing-page/landing-typography";


const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:my-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 xl:gap-4">
        <LandingTypography />
        <IconHero />
      </div>
      <div className="lg:my-8">
        <Timeline />
      </div>
    </div>
  );
};

export default LandingPage;
