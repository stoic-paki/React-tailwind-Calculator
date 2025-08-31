import React from "react";
import "./../App.css";

export const NumericBtn = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export const OperatorBtn = ({text, onClick, classHere}) => {
  return (
    <button
      onClick={onClick}
      className={classHere}
    >
      {text}
    </button>
  );
};



