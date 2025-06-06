import React from "react";
import PageTitle from "../typography/page-title";
import PageSubtitle from "../typography/page-subtitle";
import VideoPlayer from "../video-player";
import { Button } from "../ui/button";

interface ButtonConfig {
  text: string;
  link: string;
  color?: string;
}

interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  videoUrl?: string;
  thumbnail?: string;
  imgUrl?: string;
  altText?: string;
  buttons?: ButtonConfig[];
  buttonText?: string;
  buttonLink?: string;
  buttonColor?: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  subtitle,
  videoUrl,
  thumbnail,
  imgUrl,
  altText,
  buttons,
  // Legacy props
  buttonText,
  buttonLink,
  buttonColor = "blue",
}) => {
  // Create buttons array from either new or legacy props
  const buttonsToRender =
    buttons ||
    (buttonText && buttonLink
      ? [
          {
            text: buttonText,
            link: buttonLink,
            color: buttonColor,
          },
        ]
      : []);

  return (
    <div className="flex flex-col md:flex-row gap-0 md:gap-8 items-center justify-center">
      <div className="items-start md:flex-1 p-0 md:p-4 gap-2 flex flex-col w-full">
        <PageTitle title={title} />
        <PageSubtitle title={subtitle} />

        {buttonsToRender.length > 0 && (
          <div className="flex flex-wrap mt-2 gap-2">
            {buttonsToRender.map((button, index) => (
              <a
                key={index}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={"color-outline"}
                  color={button.color || "blue"}
                  size="lg"
                  className="text-lg font-bold"
                >
                  {button.text}
                </Button>
              </a>
            ))}
          </div>
        )}
      </div>

      {(videoUrl && thumbnail) || imgUrl ? (
        <div className="flex justify-center md:flex-1 my-4 sm:mt-0 sm:p-4 w-full">
          {videoUrl && thumbnail ? (
            <VideoPlayer
              url={videoUrl}
              thumbnail={thumbnail}
              className="w-full max-w-2xl"
            />
          ) : imgUrl ? (
            <img
              src={imgUrl}
              alt={altText || title || "Project image"}
              className="rounded-lg max-w-full h-auto"
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default ProjectHeader;
