import React from "react";
import { HOC } from "./HOC";

const CompB = (props) => {
  const { myName, myAge, setAge } = props;
  return (
    <div>
      <h4>Component B</h4>
      <button onClick={() => setAge()}>Age</button>
      <p>{`My Name is ${myName} & I am ${myAge} old`}</p>
    </div>
  );
};

export default HOC(CompB, 10);
