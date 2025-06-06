import {
  FaPython,
  FaReact,
  FaJava,
  FaGitAlt,
  FaAws,
  FaDocker
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
import { ColorVariant } from "@/utils/colors";
import HoverIconButton from "./hover-icon-button";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

export function IconHero() {
  // Define your triangle layout as rows of props
  const iconRows = [
    [
      { Icon: FaPython, color: "yellow" as ColorVariant, tooltip: "Python", stars: 8 },
    ],
    [
      { Icon: FaReact, color: "cyan" as ColorVariant, tooltip: "React", stars: 7 },
      { Icon: SiTypescript, color: "blue" as ColorVariant, tooltip: "TypeScript", stars: 7 },
    ],
    [
      { Icon: FaJava, color: "orange" as ColorVariant, tooltip: "Java", stars: 7 },
      { Icon: TbBrandCSharp, color: "purple" as ColorVariant, tooltip: "C#", stars: 7 },
      { Icon: TbBrandCpp, color: "green" as ColorVariant, tooltip: "C++", stars: 6 },
    ],
    [
      { Icon: FaAws, color: "orange" as ColorVariant, tooltip: "AWS", stars: 8 },
      { Icon: TbSql, color: "blue" as ColorVariant, tooltip: "SQL", stars: 9 },
      { Icon: SiFastapi, color: "cyan" as ColorVariant, tooltip: "FastAPI", stars: 7 },
      { Icon: FaDocker, color: "blue" as ColorVariant, tooltip: "Docker", stars: 6 },
    ],
    [
      { Icon: FiFigma, color: "cyan" as ColorVariant, tooltip: "Figma", stars: 9 },
      { Icon: SiTailwindcss, color: "blue" as ColorVariant, tooltip: "Tailwind CSS", stars: 9 },
      { Icon: SiAdobeaftereffects, color: "purple" as ColorVariant, tooltip: "After Effects", stars: 9 },
      { Icon: SiAdobephotoshop, color: "blue" as ColorVariant, tooltip: "Photoshop", stars: 8 },
      { Icon: SiAdobeillustrator, color: "orange" as ColorVariant, tooltip: "Illustrator", stars: 8 },
    ],
    [
      { Icon: FaGitAlt, color: "red" as ColorVariant, tooltip: "Git", stars: 9 },
      { Icon: SiMongodb, color: "green" as ColorVariant, tooltip: "MongoDB", stars: 7 },
      { Icon: SiArduino, color: "cyan" as ColorVariant, tooltip: "Arduino", stars: 7 },
      { Icon: SiKicad, color: "blue" as ColorVariant, tooltip: "KiCad", stars: 6 },
      { Icon: SiNotion, color: "base" as ColorVariant, tooltip: "Notion", stars: 9,  },
      { svgSrc: "/logos/solidworks.svg", color: "red" as ColorVariant, tooltip: "SOLIDWORKS", stars: 8, inverse: true},
    ],
  ];
  

  return (
    <motion.div
      className="flex flex-col items-start gap-2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {iconRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((props, i) => (
            <motion.div key={i} variants={item}>
              <HoverIconButton {...props} />
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}
