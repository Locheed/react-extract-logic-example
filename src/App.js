import React, { Component } from "react";
import "./App.css";

// Imported module of logic
import changeLettering from "./changeLettering";

class App extends Component {
  state = {
    text:
      "Extract Logic away from React Components. Reusable, much cleaner and easier to test"
  };

  // Handling state change after logic returns altered data from changeLettering module
  handleChange = text => {
    this.setState({ text: changeLettering(text) });
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
