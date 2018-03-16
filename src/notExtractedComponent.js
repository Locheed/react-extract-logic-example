import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    text:
      "Extract Logic away from React Components. Much cleaner and easier to test"
  };

  // Logic inside React Component
  changeLettering = text => {
    const splittedText = text.toLowerCase().split("");
    let changedLettering = splittedText
      .map(
        (letter, index) =>
          index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
      )
      .join("");
    return changedLettering;
  };

  // Handling state change after logic returns altered data
  handleChange = text => {
    this.setState({ text: this.changeLettering(text) });
  };

  render() {
    return (
      <div className="App">
        {this.state.text}
        <button onClick={() => this.handleChange(this.state.text)}>
          Change lettering
        </button>
      </div>
    );
  }
}

export default App;
