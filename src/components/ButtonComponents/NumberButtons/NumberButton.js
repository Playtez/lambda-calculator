import React from "react";

const NumberButton = props => {
  console.log(props);
  return (
    <button
      className="props"
      onClick={() => {
        props.setDisplayState(oldState => {
          return oldState === 0 ? props.num : oldState + props.num;
        });
      }}>
      {/* Display a button element rendering the data being 
      passed down from the parent container on props */}
      <div className="props">{props.num}</div>
    </button>
  );
};

export default NumberButton;
