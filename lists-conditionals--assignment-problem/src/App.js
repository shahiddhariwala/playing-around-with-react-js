import React, { Component } from "react";
import "./App.css";

import Validation from "./Validation/Validation";
import Char from "./Character/Character";

class App extends Component {
  //State
  state = {
    strLen: 0,
  };

  //  Handler Methods

  outputLengthHandler = (event) => {
    const strLen = event.target.value.length;
    document.querySelector(".output").innerHTML = strLen;
    this.setState({ strLen: strLen });
  };

  render() {
    // footer style
    const style = {
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
      height: "30px",
      paddingTop: "10px",
      background: "linear-gradient(to right, #4ca2cd,#67b26f)",
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "large",
    };

    return (
      <div className="App">
        <div className="task task1">
          <label>
            <b>Type Something : </b>
          </label>
          <input type="text" onChange={this.outputLengthHandler}></input>
          <p className="output">0</p>
        </div>

        <div className="task task2">
          <Validation length={this.state.strLen} />
        </div>
        <div className="task task3">
          <Char />
        </div>

        {/* Footer */}
        <p style={style}>&copy; Shahid Dhariwala</p>
      </div>
    );
  }
}

export default App;
