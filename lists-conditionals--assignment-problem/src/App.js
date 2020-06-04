import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
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
        <p style={style}>&copy; Shahid Dhariwala</p>
      </div>
    );
  }
}

export default App;
