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
  inverse?: boolean;
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
  inverse = false,
}) => {
  const [svgContent, setSvgContent] = useState<string>("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const colorClasses = getColorClasses(color);
  const IconComponent = Icon || FaCog;

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

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

  const handleClick = () => {
    if (isTouchDevice) {
      setTooltipVisible((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setTooltipVisible(false);
  };

  const handleBlur = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      className="relative group"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
      tabIndex={0}
    >
      {tooltip && (
        <div
          className={`
            absolute
            ${
              inverse
                ? "-translate-x-22 sm:-translate-x-18 lg:-translate-x-14 lg:origin-bottom-right xl:translate-x-15 xl:origin-bottom-left"
                : "translate-x-8 sm:translate-x-13 origin-bottom-left"
            }
            md:translate-x-15 -translate-y-14 md:origin-bottom-left
            transition-all duration-400 ease-out pointer-events-none z-[500]
            ${tooltipVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
          `}
        >
          <div className="px-3 py-3 rounded-xl leading-snug bg-flexoki-black border-primary border-2 text-primary text-start pointer-events-auto">
            {tooltip}
            {stars !== undefined && renderStars(stars)}
          </div>
        </div>
      )}

      <div
        className={`
          flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl
          bg-flexoki-dark-tx ${colorClasses.hover}
          transition-colors duration-100 ease-out-out group
        `}
      >
        {svgSrc && svgContent ? (
          <div
            className={`
              w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-colors duration-150 ease-out
              ${colorClasses.text} group-hover:text-flexoki-dark-tx
              [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-current
            `}
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <IconComponent
            className={`
              w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-colors duration-150 ease-out
              ${colorClasses.text} group-hover:text-flexoki-dark-tx
            `}
          />
        )}
      </div>
    </div>
  );
};

export default HoverIconButton;
