import React, { Component } from "react";
import "./App.css";

import Validation from "./Validation/Validation";
import Char from "./Character/Character";

class App extends Component {
  //State
  state = {
    str: "",
    strLen: 0,
  };

  //  Handler Methods
  outputLengthHandler = (event) => {
    const strLen = event.target.value.length;
    document.querySelector(".output").innerHTML = strLen;
    this.setState({ str: event.target.value, strLen: strLen });
  };

  deleteCharHandler = (event, index) => {
    let newString = this.state.str.split("");
    newString.splice(index,1);
    this.setState({ str: newString.join(""), strLen: newString.length });
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

    let chars = null;
    if (this.state.strLen !== 0) {
      chars = (
        <div className="task task3">
          {this.state.str.split("").map((char, index) => {
            return (
              <Char
                letter={char}
                click={(event) => this.deleteCharHandler(event, index)}
                key={index}
              />
            );
          })}
        </div>
      );
    }
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
        {chars}

        {/* Footer */}
        <p style={style}>&copy; Shahid Dhariwala</p>
      </div>
    );
  }
}

export default App;
