import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import luffy from "../assets/luffy.gif";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    person: [
      { id: "asds1d", name: "Shahid", age: 23 },
      { id: "as2dsd", name: "Luffy", age: 18 },
      { id: "asd4sd", name: "Zoro", age: 30 },
    ],
    otherState: "This is some state",
    showPersons: false,
    showCockpit : true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }
  componentDidMount() {
      console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState)
  {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate()
  {
    console.log('[App.js] componentDidUpdate');
  }
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
    const newPerson = [...this.state.person];
    newPerson.splice(index, 1);
    this.setState({ person: newPerson });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.person}
          clicked={this.deletedHandler}
          changed={this.changeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? 
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.person.length}
          clicked={this.togglePersonHandler}
        /> : null }
        {persons}

        {/*for fun  */}
        <img id={classes.funImage} src={luffy} alt="luffy"></img>
      </div>
      // <p>Hola</p> not allowed , it is recommended to have one root elements inside it
      // other elements to be wrapped ( * before React 16);
    );

    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,' I am a react App'));
  }
}

export default App;
