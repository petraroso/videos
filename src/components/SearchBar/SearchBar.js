import React from "react";
import styles from "./style.module.css";

class SearchBar extends React.Component {
  state = { input: "" };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.input)
  };
  render() {
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.onFormSubmit}>
          <div className={styles.field}>
            <label>Video search</label>
            <input
              type="text"
              value={this.state.input}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
