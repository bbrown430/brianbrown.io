import {
  FaPython,
  FaReact,
  FaJava,
  FaGitAlt,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiTailwindcss,
  SiNotion,
  SiMongodb,
  SiArduino,
  SiKicad,
  SiFastapi,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandCpp, TbSql } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";

import HoverIconButton from "./ui/hover-icon-button";

export function Landing() {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex gap-2">
        <HoverIconButton Icon={FaPython} color="yellow" tooltip="Python" />
      </div>
      <div className="flex gap-2">
        <HoverIconButton Icon={FaReact} color="cyan" />
        <HoverIconButton Icon={SiTypescript} color="blue" />
      </div>
      <div className="flex gap-2">
        <HoverIconButton Icon={FaJava} color="orange" />
        <HoverIconButton Icon={TbBrandCSharp} color="purple" />
        <HoverIconButton Icon={TbBrandCpp} color="green" />
      </div>
      <div className="flex gap-2">
        <HoverIconButton Icon={FaAws} color="orange" />
        <HoverIconButton Icon={TbSql} color="blue" />
        <HoverIconButton Icon={SiFastapi} color="cyan" />
        <HoverIconButton Icon={FaNodeJs} color="green" />
      </div>
      <div className="flex gap-2">
        <HoverIconButton Icon={FiFigma} color="cyan" />
        <HoverIconButton Icon={SiTailwindcss} color="blue" />
        <HoverIconButton Icon={SiAdobeaftereffects} color="purple" />
        <HoverIconButton Icon={SiAdobephotoshop} color="blue" />
        <HoverIconButton Icon={SiAdobeillustrator} color="orange" />
      </div>
      <div className="flex gap-2">
        <HoverIconButton Icon={FaGitAlt} color="red" />
        <HoverIconButton Icon={SiMongodb} color="green" />
        <HoverIconButton Icon={SiArduino} color="cyan" />
        <HoverIconButton Icon={SiKicad} color="blue" />
        <HoverIconButton Icon={SiNotion} color="base" />
        <HoverIconButton svgSrc="/logos/solidworks.svg" color="red" />
      </div>
    </div>
  );
}
