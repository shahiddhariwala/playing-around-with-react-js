import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddToCounter(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractToCounter(5)}
        />
        <hr style={{ border: "15px outset #ccc", borderRadius: "200px" }} />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul style={{listStyle:'none'}}>
          {this.props.storeResults.map((strRes) => (
            <li key={strRes.id}>{strRes.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}
//slice of state
const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    // this state counter is coming from reducer
    storeResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddToCounter: (num) => dispatch({ type: "ADD", value: num }),
    onSubtractToCounter: (num) => dispatch({ type: "SUBTRACT", value: num }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// connect returns a functions and we pass Counter to it
