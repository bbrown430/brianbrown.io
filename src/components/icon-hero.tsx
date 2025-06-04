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

export function IconHero() {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex gap-2">
        <HoverIconButton
          Icon={FaPython}
          color="yellow"
          tooltip="Python"
          stars={8}
        />
      </div>

      <div className="flex gap-2">
        <HoverIconButton
          Icon={FaReact}
          color="cyan"
          tooltip="React"
          stars={7}
        />
        <HoverIconButton
          Icon={SiTypescript}
          color="blue"
          tooltip="TypeScript"
          stars={7}
        />
      </div>

      <div className="flex gap-2">
        <HoverIconButton
          Icon={FaJava}
          color="orange"
          tooltip="Java"
          stars={7}
        />
        <HoverIconButton
          Icon={TbBrandCSharp}
          color="purple"
          tooltip="C#"
          stars={7}
        />
        <HoverIconButton
          Icon={TbBrandCpp}
          color="green"
          tooltip="C++"
          stars={6}
        />
      </div>

      <div className="flex gap-2">
        <HoverIconButton Icon={FaAws} color="orange" tooltip="AWS" stars={8} />
        <HoverIconButton Icon={TbSql} color="blue" tooltip="SQL" stars={9} />
        <HoverIconButton
          Icon={SiFastapi}
          color="cyan"
          tooltip="FastAPI"
          stars={7}
        />
        <HoverIconButton
          Icon={FaNodeJs}
          color="green"
          tooltip="Node.js"
          stars={6}
        />
      </div>

      <div className="flex gap-2">
        <HoverIconButton
          Icon={FiFigma}
          color="cyan"
          tooltip="Figma"
          stars={9}
        />
        <HoverIconButton
          Icon={SiTailwindcss}
          color="blue"
          tooltip="Tailwind CSS"
          stars={9}
        />
        <HoverIconButton
          Icon={SiAdobeaftereffects}
          color="purple"
          tooltip="After Effects"
          stars={9}
        />
        <HoverIconButton
          Icon={SiAdobephotoshop}
          color="blue"
          tooltip="Photoshop"
          stars={8}
        />
        <HoverIconButton
          Icon={SiAdobeillustrator}
          color="orange"
          tooltip="Illustrator"
          stars={8}
        />
      </div>

      <div className="flex gap-2">
        <HoverIconButton Icon={FaGitAlt} color="red" tooltip="Git" stars={9} />
        <HoverIconButton
          Icon={SiMongodb}
          color="green"
          tooltip="MongoDB"
          stars={7}
        />
        <HoverIconButton
          Icon={SiArduino}
          color="cyan"
          tooltip="Arduino"
          stars={7}
        />
        <HoverIconButton
          Icon={SiKicad}
          color="blue"
          tooltip="KiCad"
          stars={6}
        />
        <HoverIconButton
          Icon={SiNotion}
          color="base"
          tooltip="Notion"
          stars={9}
        />
        <HoverIconButton
          svgSrc="/logos/solidworks.svg"
          color="red"
          tooltip="SOLIDWORKS"
          stars={8}
        />
      </div>
    </div>
  );
}
