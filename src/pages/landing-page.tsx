import React from "react";
import { IconHero } from "../components/landing-page/icon-hero";
import LogoButton from "../components/ui/logo-button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Timeline from "../components/landing-page/timeline";
import PageTitle from "../components/typography/page-title";
import PageSubtitle from "../components/typography/page-subtitle";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:my-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 xl:gap-4">
        <div className="items-start max-w-sm sm:max-w-md md:max-w-lg p-4 gap-2 flex flex-col mx-4">
          <PageTitle title="Brian Brown" />
          <PageSubtitle title="I’m a computer engineer based in Boston, MA. I’m passionate about
            creative solutions, automation, and innovation."/>
          <div className="flex flex-row gap-4 mt-2">
            <LogoButton
              icon={FaLinkedin}
              link="https://www.linkedin.com/in/brian-brown-neu/"
            />
            <LogoButton icon={FaGithub} link="https://github.com/bbrown430" />
          </div>
        </div>
        <IconHero />
      </div>
      <div className="lg:my-8">
        <Timeline />
      </div>
    </div>
  );
};

export default LandingPage;
