import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <p>Hola</p>
        <Person name="Shahid Dhariwala" age="23" />
        <Person name=" Luffy" age ="18"/>
        <Person name="Zoro" age="30"> I am Swordsman at Strawhats Pirates</Person>
      </div>
      // <p>Hola</p> not allowed , it is recommended to have one root elements inside it 
      // other elements to be wrapped ( * before React 16);
    );

    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,' I am a react App'));
  }
}

export default App;
