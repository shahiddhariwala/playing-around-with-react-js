import React, { Component } from "react";
import "./App.css";

class App extends Component {
  //  Handler Methods

  outputLengthHandler = (event) => {
    const str = event.target.value;
    document.querySelector(".output").innerHTML = str.length;
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
        <div className="task1">
          <label>
            <b>Type Something : </b>
          </label>
          <input type="text" onChange={this.outputLengthHandler}></input>
          <p className="output">0</p>
        </div>
        {/* Footer */}
        <p style={style}>&copy; Shahid Dhariwala</p>
      </div>
    );
  }
}

export default App;
