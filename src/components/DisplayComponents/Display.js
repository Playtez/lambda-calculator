import React from "react";
import { numbers, specials, operator } from "./../../data";

const Display = props => {
  console.log(props);
  return (
    <div className="display">
      {/* Display any props data here */} {props.displayState}
    </div>
  );
};

export default Display;
