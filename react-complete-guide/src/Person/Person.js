import React from "react";
import Radium from "radium";
// We need to import css , so that webpack can handle it and inject into our bundle

import "./Person.css";

const person = (props) => {
  //react passes paramter internally even if its not mentioned

  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
    },
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I am {props.name} & I am {props.age} years old
      </p>
      {props.children}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default Radium(person);

/*
JSX is NOT HTML but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components, you have the choice between two different ways:

Functional components (also referred to as "presentational", "dumb" or "stateless" components) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)
class-based components (also referred to as "containers", "smart" or "stateful" components) => class Cmp extends Component { render () { return <div>some JSX</div> } } 
*/
