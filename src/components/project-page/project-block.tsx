import React from "react";
import SectionHeader from "../typography/section-header";
import VideoPlayer from "../video-player";
import SectionSubheader from "../typography/section-subheader";

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
  const parseText = (text: string) => {
    const lines = text.split(/\n+/);
    const elements: React.ReactNode[] = [];

    let inList = false;
    let listItems: React.ReactNode[] = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (/^[-*]\s+/.test(trimmed)) {
        inList = true;
        const content = trimmed.replace(/^[-*]\s+/, "");
        listItems.push(<li key={`li-${index}`}>{formatInline(content)}</li>);
      } else {
        if (inList) {
          elements.push(
            <ul key={`ul-${index}`} className="list-disc list-inside mb-2">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }

        if (trimmed !== "") {
          elements.push(
            <p key={`p-${index}`} className="mb-2">
              {formatInline(trimmed)}
            </p>
          );
        } else {
          elements.push(<br key={`br-${index}`} />);
        }
      }
    });

    if (inList) {
      elements.push(
        <ul key={`ul-final`} className="list-disc list-inside mb-2">
          {listItems}
        </ul>
      );
    }

    return elements;
  };

  const formatInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      } else if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={index}>{part.slice(1, -1)}</em>;
      } else {
        return part;
      }
    });
  };

  return (
    <div
      className={`flex flex-col ${
        paragraphText ? "md:flex-row" : "md:flex-col"
      } px-4`}
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
        <div className="md:w-2/5 flex justify-center items-center">
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
              className="max-w-full h-auto rounded-lg object-cover pt-2"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectBlock;
