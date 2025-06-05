import { ColorVariant, getColorClasses } from "@/utils/colors";
import ProjectBrief from "./project-brief";

interface TimelineBlockProps {
  side?: "left" | "right";
  color: ColorVariant;
  title: string;
  skills: string[];
  description: string;
  navigate?: string;
  lottiePath?: string;
  className?: string;
  date: string;
  lottieWidth?: string;
}

const TimelineBlock: React.FC<TimelineBlockProps> = ({
  side = "left",
  color,
  title,
  skills,
  description,
  navigate = "",
  lottiePath = "",
  className = "",
  date,
  lottieWidth,
}) => {
  const colorClasses = getColorClasses(color);
  const alignment = side === "left" ? "right" : "left";

  const projectBrief = (
    <ProjectBrief
      title={title}
      skills={skills}
      description={description}
      color={color}
      alignment={alignment}
      navigate={navigate}
      lottiePath={lottiePath}
      date={date}
      lottieWidth={lottieWidth}
    />
  );

  return (
    <div
      className={`flex items-center justify-center  ${className} z-100`}
    >
      {/* Left Side: Show only if side is 'left' OR on medium+ screens */}
      {(side === "left" || side === "right") && (
        <div
          className={`lg:w-140 p-4 ${side === "left" ? "" : "hidden lg:block"}`}
        >
          {side === "left" ? projectBrief : null}
        </div>
      )}

      {/* Middle Dot: Only visible on medium+ screens */}
      <div className="w-24 items-center justify-center hidden lg:flex">
        <div className={`w-4 h-4 rounded-full ${colorClasses.bg}`} />
      </div>

      {/* Right Side: Show only if side is 'right' OR on medium+ screens */}
      {(side === "right" || side === "left") && (
        <div
          className={`lg:w-140 p-4 ${side === "right" ? "" : "hidden lg:block"}`}
        >
          {side === "right" ? projectBrief : null}
        </div>
      )}
    </div>
  );
};

export default TimelineBlock;
