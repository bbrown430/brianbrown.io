import React, { useState } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
  thumbnail: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  thumbnail,
  className = "",
}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`
        w-full 
        aspect-video 
        rounded-lg 
        overflow-hidden 
        shadow-lg
        ${className}
      `}
    >
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        light={thumbnail}
        onClickPreview={() => setPlaying(true)}
        controls
        playing={playing}
      />
    </div>
  );
};

export default VideoPlayer;