import React from "react";
import { HOC } from "./HOC";

const CompA = (props) => {
  const { myName, myAge, setAge } = props;
  return (
    <div>
      <h4>Component A</h4>
      <button onClick={() => setAge()}>Age</button>
      <p>{`My self ${myName} & I am ${myAge} years old`}</p>
    </div>
  );
};

export default HOC(CompA);
