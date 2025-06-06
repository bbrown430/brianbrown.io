import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import {
  ColorVariant,
  getColorClasses,
  getColorClassesByString,
  isColorVariant,
} from "@/utils/colors";
import { parseText } from "@/utils/textParser";

type Alignment = "left" | "right";

interface ProjectBriefProps {
  title: string;
  skills: string[];
  description: string;
  color: ColorVariant | string;
  alignment: Alignment;
  navigate: string;
  lottiePath: string;
  date: string;
  lottieWidth?: string;
}

const ProjectBrief: React.FC<ProjectBriefProps> = ({
  title,
  skills,
  description,
  color,
  alignment,
  navigate,
  lottiePath,
  date,
  lottieWidth = "w-24 sm:w-40 md:w-48 lg:w-40 xl:w-48",
}) => {
  const navigateTo = useNavigate();
  const [animationData, setAnimationData] = useState(null);

  const colorClasses = isColorVariant(color)
    ? getColorClasses(color)
    : getColorClassesByString(color);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(lottiePath);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
      }
    };

    loadAnimation();
  }, [lottiePath]);

  const handleNavigate = () => {
    if (/^https?:\/\//i.test(navigate)) {
      window.open(navigate, "_blank");
    } else {
      navigateTo(navigate);
    }
  };

  const alignmentClasses =
    alignment === "left" ? "text-start items-start" : "text-end items-end";

  const isLeftAlignment = alignment === "left";

  return (
    <div
      className={`flex flex-row items-center gap-4 justify-center xl:justify-between ${
        isLeftAlignment ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      {/* Content Section */}
      <div
        className={`flex flex-col gap-1 w-56 sm:w-72 md:w-88 lg:w-64 xl:w-88 ${alignmentClasses} ${
          isLeftAlignment ? "order-1" : "order-2"
        }`}
      >
        <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
        <h4 className={`text-lg font-semibold ${colorClasses.muted}`}>
          {skills.join(", ")}
        </h4>
        <div className={`text-muted-foreground ${alignmentClasses}`}>
          {parseText(description)}
        </div>
        <div
          className={`flex items-center gap-2 ${
            isLeftAlignment ? "flex-row" : "flex-row-reverse"
          }`}
        >
            <Button
            variant="color-outline"
            color={color}
            size="lg"
            className="text-lg font-bold"
            onClick={handleNavigate}
            >
            {navigate.includes("github")
              ? "View Repo"
              : navigate.startsWith("https")
              ? "Visit Site"
              : "Explore"}
            </Button>
          <p
            className={`font-semibold ${alignmentClasses} ${colorClasses.muted}`}
          >
            {date}
          </p>
        </div>
      </div>

      {/* Lottie Animation Section */}
      <div
        className={`${lottieWidth} ${isLeftAlignment ? "order-2" : "order-1"}`}
      >
        <Lottie animationData={animationData} loop={true} autoplay={true} />
      </div>
    </div>
  );
};

export default ProjectBrief;
