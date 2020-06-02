import React, { Component } from "react";
import "./App.css";

import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";

class App extends Component {
  state = {
    users: ["Shahid", "Zain", "Luffy"],
  };

  inputChangeHandler = (event) => {
    this.setState({ users: [event.target.value, "Zain", "Luffy"] });
  };
  render() {
    return (
      <div className="App">
        <UserInput changed={this.inputChangeHandler}></UserInput>
        <UserOutput userName={this.state.users[0]}></UserOutput>
        <UserOutput userName={this.state.users[2]}></UserOutput>
      </div>
    );
  }
}

export default App;
