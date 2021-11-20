import React from "react";
import SearchBar from "./SearchBar/index";
import youtube from "../apis/youtube";
import styles from "./App.module.css";
require("dotenv").config();

const KEY = process.env.REACT_APP_API_KEY_YOUTUBE;

class App extends React.Component {
  state = { videos: [] };

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
  render() {
    return (
      <div className={styles.container}>
        <SearchBar onFormSubmit={this.onInputSubmit} />
        Showing {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
