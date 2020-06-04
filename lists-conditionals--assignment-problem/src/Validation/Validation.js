import React from "react";

const validation = (props) => {
  let validationResult;
  if (props.length === 0) {
    validationResult = "NA";
  } else if (props.length <= 5) {
    validationResult = "Text too short";
  } else if (props.length >= 15) {
    validationResult = "Text long enough";
  }
  else
  {
      validationResult="Looking Good!";
  }
  return (
    <div>
      <p>Validation Check : </p>
      <p>{validationResult}</p>
    </div>
  );
};
export default validation;
