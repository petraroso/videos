import React from "react";
import VideoItem from "../VideoItem/VideoItem";

const VideoList = ({ onVideoSelect, videos }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div>{renderedList}</div>;
};
export default VideoList;
