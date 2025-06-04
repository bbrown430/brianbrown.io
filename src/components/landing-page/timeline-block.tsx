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
    date: string
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
    date
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
      />
    );
  
    return (
      <div className={`flex items-center justify-center w-full ${className} z-100`}>
        <div className="w-140 p-4">{side === "left" ? projectBrief : null}</div>
        <div className="w-24 flex items-center justify-center">
          <div className={`w-4 h-4 rounded-full ${colorClasses.bg}`} />
        </div>
        <div className="w-140 p-4">{side === "right" ? projectBrief : null}</div>
      </div>
    );
  };

export default TimelineBlock;
