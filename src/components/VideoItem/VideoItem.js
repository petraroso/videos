import React from "react";
import styles from "./style.module.css";

const VideoItem = ({ onVideoSelect, video }) => {
  return (
    <div className={styles.videoItem} onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      ></img>
      <div>{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
