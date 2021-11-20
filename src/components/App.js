import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./VIdeoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";
import youtube from "../apis/youtube";
import styles from "./App.module.css";
require("dotenv").config();

const KEY = process.env.REACT_APP_API_KEY_YOUTUBE;

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onInputSubmit = async (input) => {
    const response = await youtube.get("/search", {
      params: {
        credentials: "include",
        q: input,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });
    console.log(response.data.items);

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    console.log(video);
    this.setState({selectedVideo: video})
  };

  render() {
    return (
      <div className={styles.container}>
        <SearchBar onFormSubmit={this.onInputSubmit} />
        Showing {this.state.videos.length} videos
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
