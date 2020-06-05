import React, { Component } from "react";
import classes from './App.css';
import Person from "../components/Persons/Person/Person";
import luffy from "../assets/luffy.gif";


class App extends Component {
  state = {
    person: [
      { id: "asds1d", name: "Shahid", age: 23 },
      { id: "as2dsd", name: "Luffy", age: 18 },
      { id: "asd4sd", name: "Zoro", age: 30 },
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

  changeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.person[personIndex] };

    person.name = event.target.value;

    const newPersons = [...this.state.person];
    newPersons[personIndex] = person;

    this.setState({ person: newPersons });
  };

  togglePersonHandler = () => {
    const doPerson = this.state.showPersons;
    this.setState({ showPersons: !doPerson });
  };

  deletedHandler = (index) => {
    console.log("imahere");
    const newPerson = [...this.state.person];
    newPerson.splice(index, 1);
    this.setState({ person: newPerson });
  };
  render() {

    let persons = null;
    let btnClass="";
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletedHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.changeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    
    }

    const assignedClasses = [];
    if(this.state.person.length <=2)
    {
      assignedClasses.push(classes.red);
    }
    if(this.state.person.length <=1)
    {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Hi, I am react app</h1>
        <p className={assignedClasses.join(' ')}>This is a working app</p>

        <img id={classes.funImage} src={luffy} alt="luffy"></img>

        <button  className={btnClass} onClick={this.togglePersonHandler}>
          Hide / Unhide
        </button>

        {persons}
      </div>
      // <p>Hola</p> not allowed , it is recommended to have one root elements inside it
      // other elements to be wrapped ( * before React 16);
    );

    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,' I am a react App'));
  }
}

export default App;
