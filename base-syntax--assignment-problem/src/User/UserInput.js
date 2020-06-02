import React from "react";

import "./style.css";
const userInput = (props) => {
  return (
    <div className="box">
      <label>User Input : </label>
      <input type="text" onChange = {props.changed}></input>
    </div>
  );
};

export default userInput;
