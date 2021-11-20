import React from "react";
import styles from "./style.module.css"

const VideoItem = ({ video }) => {
  return (
    <div className={styles.videoItem}>
      <img src={video.snippet.thumbnails.medium.url}></img>
      <div>{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
