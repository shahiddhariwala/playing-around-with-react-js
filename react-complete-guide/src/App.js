import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import luffy from "./Resources/luffy.gif";

class App extends Component {
  state = {
    person: [
      { name: "Shahid", age: 23 },
      { name: "Luffy", age: 18 },
      { name: "Zoro", age: 30 },
    ],
    otherState: "This is some state",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log("I was clicked");
    // DONT DO THIS : this.state.person[0]="Zain";
    this.setState({
      person: [
        { name: newName, age: 23 },
        { name: "Luffy", age: 18 },
        { name: "Zoro", age: 30 },
      ],
    });
  };

  changeHandler = (event) => {
    this.setState({
      person: [
        { name: "Shahid", age: 23 },
        { name: event.target.value, age: 18 },
        { name: "Zoro", age: 30 },
      ],
    });
  };

  togglePersonHandler = () => {
    const doPerson = this.state.showPersons;
    this.setState({ showPersons: !doPerson });
  };
  render() {
    const buttonStyle = {
      backgroundColor: "orange",
      padding: "10px",
      font: "San-serif",
      border: "3px solid green",
      borderRadius: "200px",
      cursor: "pointer",
      letterSpacing: "3px",
    };

    return (
      <div className="App">

        <h1>Hi, I am react app</h1>
        <p>Hola</p>

        <img id="funImage" src={luffy} alt="luffy"></img>

        <button style={buttonStyle} onClick={this.togglePersonHandler}>
          Hide / Unhide
        </button>
        
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.person[0].name}
              age={this.state.person[0].age}
            />
            <Person
              name={this.state.person[1].name}
              age={this.state.person[1].age}
              click={this.switchNameHandler.bind(
                this,
                "Er. Shahid Dhariwala !! "
              )}
              changed={this.changeHandler}
            >
              <h3> Strawhats : Captain </h3>
            </Person>
            <Person
              name={this.state.person[2].name}
              age={this.state.person[2].age}
            >
              <h4> Strawhats : Vice-Captain / Swordsman </h4>
            </Person>
          </div>
        ) : null}

        
      </div>
      // <p>Hola</p> not allowed , it is recommended to have one root elements inside it
      // other elements to be wrapped ( * before React 16);
    );

    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,' I am a react App'));
  }
}

export default App;
