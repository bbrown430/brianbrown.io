import React, { useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import { IconType } from "react-icons";

type ColorVariant =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "cyan"
  | "blue"
  | "purple"
  | "magenta"
  | "base";

const colorMap: Record<ColorVariant, { text: string; hover: string }> = {
  red: {
    text: "text-flexoki-red-400",
    hover: "hover:bg-flexoki-red-400",
  },
  orange: {
    text: "text-flexoki-orange-400",
    hover: "hover:bg-flexoki-orange-400",
  },
  yellow: {
    text: "text-flexoki-yellow-400",
    hover: "hover:bg-flexoki-yellow-400",
  },
  green: {
    text: "text-flexoki-green-400",
    hover: "hover:bg-flexoki-green-400",
  },
  cyan: {
    text: "text-flexoki-cyan-400",
    hover: "hover:bg-flexoki-cyan-400",
  },
  blue: {
    text: "text-flexoki-blue-400",
    hover: "hover:bg-flexoki-blue-400",
  },
  purple: {
    text: "text-flexoki-purple-400",
    hover: "hover:bg-flexoki-purple-400",
  },
  magenta: {
    text: "text-flexoki-magenta-400",
    hover: "hover:bg-flexoki-magenta-400",
  },
  base: {
    text: "text-flexoki-base-950",
    hover: "hover:bg-flexoki-base-950",
  },
};

interface HoverIconButtonProps {
  Icon?: IconType;
  svgSrc?: string;
  color?: ColorVariant;
}

const HoverIconButton: React.FC<HoverIconButtonProps> = ({
  Icon,
  svgSrc,
  color = "red",
}) => {
  const [svgContent, setSvgContent] = useState<string>("");
  const colorClasses = colorMap[color];

  useEffect(() => {
    if (svgSrc) {
      fetch(svgSrc)
        .then(response => response.text())
        .then(svg => setSvgContent(svg))
        .catch(error => {
          console.error("Error loading SVG:", error);
          setSvgContent("");
        });
    }
  }, [svgSrc]);

  const IconComponent = Icon || FaCog;

  return (
    <div
      className={`
        flex items-center justify-center w-20 h-20 rounded-xl
        bg-flexoki-dark-tx ${colorClasses.hover}
        transition-colors duration-100 ease-in-out
        group
      `}
    >
      {svgSrc && svgContent ? (
        <div
          className={`
            w-12 h-12 transition-colors duration-100 ease-in-out
            ${colorClasses.text} group-hover:text-flexoki-dark-tx
            [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-current
          `}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ) : (
        <IconComponent
          className={`
            w-12 h-12 transition-colors duration-100 ease-in-out
            ${colorClasses.text} group-hover:text-flexoki-dark-tx
          `}
        />
      )}
    </div>
  );
};

export default HoverIconButton;