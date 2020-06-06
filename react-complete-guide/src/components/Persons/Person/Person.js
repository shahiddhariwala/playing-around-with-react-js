import React, { Component } from "react";
// We need to import css , so that webpack can handle it and inject into our bundle

import classes from "./Person.css";
import { render } from "react-dom";

class Person extends Component {
  render() {
    //react passes paramter internally even if its not mentioned
    console.log("[Person.js] rendering...");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I am {this.props.name} & I am {this.props.age} years old
        </p>
        {this.props.children}
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}
export default Person;

/*
JSX is NOT HTML but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components, you have the choice between two different ways:

Functional components (also referred to as "presentational", "dumb" or "stateless" components) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)
class-based components (also referred to as "containers", "smart" or "stateful" components) => class Cmp extends Component { render () { return <div>some JSX</div> } } 
*/
