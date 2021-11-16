import React from "react";
import SearchBar from "./SearchBar/index";
import youtube from "../apis/youtube"
import styles from "./App.module.css";

class App extends React.Component {
  onInputSubmit=(input)=>{
    youtube.get('/search',{
      params: {
        q: input
      }
    })
  }
  render() {
    return (
      <div className={styles.container}>
        <SearchBar onFormSubmit={this.onInputSubmit}/>
      </div>
    );
  }
}

export default App;
