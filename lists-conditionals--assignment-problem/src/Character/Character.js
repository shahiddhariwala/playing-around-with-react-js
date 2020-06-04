import React from "react";

const charComponent = (props) => {
  const charStyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    marging: "16px",
    border: "1px solid black",
  };
  return <div style={charStyle} onClick={props.click}>{props.letter}</div>;
};

export default charComponent;
