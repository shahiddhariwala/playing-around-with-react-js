import React from "react";

import "./style.css";

const userOutput = (props) => {
  return (
    <div class="box">
      <p>I am {props.userName}</p>
      <p>This paragraph 2 </p>
    </div>
  );
};

export default userOutput;
