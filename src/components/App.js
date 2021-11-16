import React from "react";
import SearchBar from "./SearchBar/index";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <SearchBar />
      </div>
    );
  }
}

export default App;
