import React from "react";

import "./style.css";

const userOutput = (props) => {
  return (
    <div class="box">
      <p>This paragraph 1 by {props.name}</p>
      <p>This paragraph 2 by  XYZ</p>
    </div>
  );
};

export default userOutput;
