import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { ColorVariant, getColorClasses, getColorClassesByString, isColorVariant } from "@/utils/colors";

type Alignment = "left" | "right";

interface ProjectBriefProps {
  title: string;
  skills: string[];
  description: string;
  color: ColorVariant | string; // Now supports both ColorVariant and custom strings
  alignment: Alignment;
  navigate: string;
  lottiePath: string;
}

const ProjectBrief: React.FC<ProjectBriefProps> = ({
  title,
  skills,
  description,
  color,
  alignment,
  navigate,
  lottiePath,
}) => {
  const navigateTo = useNavigate();
  const [animationData, setAnimationData] = useState(null);

  // Get color classes based on whether it's a ColorVariant or custom string
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
    navigateTo(navigate);
  };

  const alignmentClasses =
    alignment === "left" ? "text-start items-start" : "text-end items-end";

  const isLeftAlignment = alignment === "left";

  return (
    <div className="flex flex-row items-center justify-between gap-4">
      {/* Content Section */}
      <div
        className={`flex flex-col gap-1 w-88 ${alignmentClasses} ${
          isLeftAlignment ? "order-1" : "order-2"
        }`}
      >
        <h2 className="text-4xl font-bold">{title}</h2>
        <h4 className={`text-lg font-semibold ${colorClasses.muted}`}>
          {skills.join(", ")}
        </h4>
        <p className={`mb-2 text-muted-foreground ${alignmentClasses}`}>
          {description}
        </p>
        <Button
          variant="color-outline"
          color={color}
          size="lg"
          className="text-lg font-bold"
          onClick={handleNavigate}
        >
          Explore
        </Button>
      </div>

      {/* Lottie Animation Section */}
      <div className={`w-48 ${isLeftAlignment ? "order-2" : "order-1"}`}>
        <Lottie animationData={animationData} loop={true} autoplay={true} />
      </div>
    </div>
  );
};

export default ProjectBrief;