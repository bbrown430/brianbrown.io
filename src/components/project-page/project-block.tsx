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
  videoHeight?: string;
  subheading?: boolean;
  timelineImage?: string;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  imageLink,
  videoUrl,
  videoThumbnail,
  title,
  paragraphText,
  altText,
  videoHeight,
  subheading = false,
  timelineImage,
}) => {

  return (
    <div
      className={`flex flex-col ${
        paragraphText ? "md:flex-row" : "md:flex-col"
      } px-4 gap-8`}
    >
      <div
        className={`${
          imageLink || videoUrl ? "md:w-3/5" : "w-full"
        } flex flex-col gap-2 justify-center`}
      >
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
                    alt={altText || `${title} timeline` || "Timeline image"}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(imageLink || videoUrl) && (
        <div className="md:w-2/5 flex justify-center items-center p-2">
          {videoUrl ? (
            <VideoPlayer
              url={videoUrl}
              thumbnail={videoThumbnail || ""}
              height={videoHeight || "240px"}
            />
          ) : (
            <img
              src={imageLink}
              alt={altText || title || "Project image"}
              className="max-w-full h-auto rounded-lg object-cover"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectBlock;