import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url}></img>
      <div>{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
