import React, { useState } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
  thumbnail: string;
  height?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  thumbnail,
  height = "360px",
}) => {
  const [playing, setPlaying] = useState(false);

  const numericHeight = parseInt(height);
  const width =
    height.endsWith("px") && !isNaN(numericHeight)
      ? `${(numericHeight * 16) / 9}px`
      : "auto";

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg"
      style={{ width, height }}
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
