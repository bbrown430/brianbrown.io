// Updated HoverIconButton.tsx
import React, { useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import { IconType } from "react-icons";
import { ColorVariant, getColorClasses } from "@/utils/colors";

interface HoverIconButtonProps {
  Icon?: IconType;
  svgSrc?: string;
  color?: ColorVariant;
  tooltip?: string;
  stars?: number;
}

const renderStars = (score: number) => {
  const clamped = Math.max(0, Math.min(10, score));
  const full = Math.floor(clamped / 2);
  const half = clamped % 2 === 1 ? 1 : 0;
  return (
    <div>
      {"★".repeat(full)}
      {half ? "½" : ""}
    </div>
  );
};

const HoverIconButton: React.FC<HoverIconButtonProps> = ({
  Icon,
  svgSrc,
  color = "red",
  tooltip,
  stars,
}) => {
  const [svgContent, setSvgContent] = useState<string>("");
  const colorClasses = getColorClasses(color);
  const IconComponent = Icon || FaCog;

  useEffect(() => {
    if (svgSrc) {
      fetch(svgSrc)
        .then((response) => response.text())
        .then((svg) => setSvgContent(svg))
        .catch((error) => {
          console.error("Error loading SVG:", error);
          setSvgContent("");
        });
    }
  }, [svgSrc]);

  return (
    <div className="relative group">
      {tooltip && (
        <div
          className={`
            absolute translate-x-15 -translate-y-14
            opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100
            transition-all duration-400 ease-out
            origin-bottom-left
            pointer-events-none z-[500]
          `}
        >
          <div className="px-3 py-3 rounded-xl leading-snug bg-flexoki-black border-primary border-2 text-primary text-start">
            {tooltip}
            {stars !== undefined && renderStars(stars)}
          </div>
        </div>
      )}

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
              w-12 h-12 transition-colors duration-150 ease-in-out
              ${colorClasses.text} group-hover:text-flexoki-dark-tx
              [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-current
            `}
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <IconComponent
            className={`
              w-12 h-12 transition-colors duration-150 ease-in-out
              ${colorClasses.text} group-hover:text-flexoki-dark-tx
            `}
          />
        )}
      </div>
    </div>
  );
};

export default HoverIconButton;