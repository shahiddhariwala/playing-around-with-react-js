import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    person: [
      { name: "Shahid", age: 23 },
      { name: "Luffy", age: 18 },
      { name: "Zoro", age: 30 },
    ],
  };

  switchNameHandler = ()=>
  {
    console.log("I was clicked");
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <p>Hola</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>
          <h3> Strawhats : Captain </h3>
        </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}>
          <h4> Strawhats : Vice-Captain / Swordsman </h4>
        </Person>
      </div>
      // <p>Hola</p> not allowed , it is recommended to have one root elements inside it
      // other elements to be wrapped ( * before React 16);
    );

    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,' I am a react App'));
  }
}

export default App;
