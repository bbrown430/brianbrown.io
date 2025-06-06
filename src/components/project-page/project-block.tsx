import React from "react";
import SectionHeader from "../typography/section-header";
import VideoPlayer from "../video-player";
import SectionSubheader from "../typography/section-subheader";
import { parseText } from "@/utils/textParser";

interface ProjectBlockProps {
  imageLink?: string;
  videoUrl?: string;
  videoThumbnail?: string;
  title: string;
  paragraphText?: string;
  altText?: string;
  subheading?: boolean;
  timelineImage?: string;
  mediaWidth?: string;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  imageLink,
  videoUrl,
  videoThumbnail,
  title,
  paragraphText,
  altText,
  subheading = false,
  timelineImage,
  mediaWidth = "3/5"
}) => {
  // Map width values to actual Tailwind classes
  const getWidthClasses = (width: string) => {
    const widthMap = {
      "1/5": { text: "md:w-1/5", media: "md:w-4/5" },
      "2/5": { text: "md:w-2/5", media: "md:w-3/5" },
      "3/5": { text: "md:w-3/5", media: "md:w-2/5" },
      "4/5": { text: "md:w-4/5", media: "md:w-1/5" },
      "1/2": { text: "md:w-1/2", media: "md:w-1/2" },
      "1/3": { text: "md:w-1/3", media: "md:w-2/3" },
      "2/3": { text: "md:w-2/3", media: "md:w-1/3" },
      "1/4": { text: "md:w-1/4", media: "md:w-3/4" },
      "3/4": { text: "md:w-3/4", media: "md:w-1/4" },
    };
    
    return widthMap[width as keyof typeof widthMap] || widthMap["3/5"];
  };

  const widthClasses = getWidthClasses(mediaWidth);
  const textWidth = imageLink || videoUrl ? widthClasses.text : "w-full";
  const mediaWidthClass = widthClasses.media;

  return (
    <div
      className={`flex flex-col gap-0 ${
        paragraphText ? "md:flex-row" : "md:flex-col"
      } ${
        paragraphText ? "md:gap-8" : "md:gap-2"
      } sm:px-4`}
    >
      <div className={`${textWidth} flex flex-col gap-2 justify-center`}>
        <div className="flex flex-col gap-2 items-start">
          {subheading ? (
            <SectionSubheader title={title} />
          ) : (
            <SectionHeader title={title} />
          )}

          {paragraphText && (
            <div className="text-muted-foreground text-lg">
              {parseText(paragraphText)}

              {timelineImage && (
                <div className="w-full mt-4">
                  <img
                    src={timelineImage}
                    alt={altText || `${title} timeline`}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {(imageLink || videoUrl) && (
        <div className={`${mediaWidthClass} flex justify-center items-center p-2`}>
          {videoUrl ? (
            <VideoPlayer
              url={videoUrl}
              thumbnail={videoThumbnail || ""}
            />
          ) : (
            <img
              src={imageLink}
              alt={altText || title}
              className="max-w-full h-auto rounded-lg object-cover"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectBlock;