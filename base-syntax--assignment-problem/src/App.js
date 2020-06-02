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
    const style = {

      position: "fixed",
      left: "0",
      bottom: "0",
      width: '100%',
      height:'30px',
      paddingTop: '10px',
      background: 'linear-gradient(to right, #4ca2cd,#67b26f)',
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 'large',
    };

    return (
      <div className="App">
        <UserInput 
          changed={this.inputChangeHandler}
          name={this.state.users[0]}
        ></UserInput>
        <UserOutput userName={this.state.users[0]}></UserOutput>
        <UserOutput userName={this.state.users[2]}></UserOutput>
        <p style={style}>&copy; Shahid Dhariwala</p>
      </div>
    );
  }
}

export default App;
