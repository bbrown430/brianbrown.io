import React from "react";
import { IconHero } from "./icon-hero";
import LogoButton from "./ui/logo-button";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const LandingTitle: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="items-start max-w-[580px] p-4 gap-2 flex flex-col">
        <h1 className="text-8xl font-black">Brian Brown</h1>
        <h3 className="text-muted-foreground text-2xl">
          I’m a computer engineer based in Boston, MA. I’m passionate about
          creative solutions, automation, and innovation.
        </h3>
        <div className="flex flex-row gap-4 mt-2">
          <LogoButton
            icon={FaLinkedin}
            link="https://www.linkedin.com/in/brian-brown-neu/"
          />
          <LogoButton
            icon={FaGithub}
            link="https://github.com/bbrown430"
          />
        </div>
      </div>
      <IconHero />
    </div>
  );
};

export default LandingTitle;
