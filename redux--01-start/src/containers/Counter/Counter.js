import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/action";

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
        <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul style={{ listStyle: "none" }}>
          {this.props.storeResults.map((strRes) => (
            <li
              key={strRes.id}
              onClick={() => this.props.onDeleteResult(strRes.id)}
            >
              {strRes.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
//slice of state
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    // this state counter is coming from reducer
    storeResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddToCounter: (num) => dispatch({ type: actionTypes.ADD, value: num }),
    onSubtractToCounter: (num) =>
      dispatch({ type: actionTypes.SUBTRACT, value: num }),
    onStoreResult: (res) => dispatch({ type: actionTypes.STORE_RESULT, result:res }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, resultElementID: id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// connect returns a functions and we pass Counter to it
