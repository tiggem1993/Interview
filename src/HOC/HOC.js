import React, { useState } from "react";

export const HOC = (Comp, iincrementBy = 1) => {
  const NewComp = (props) => {
    const [myAge, setAge] = useState(0);
    const incrementAge = () => {
      const count = myAge + iincrementBy;
      setAge(count);
    };
    return (
      <div>
        <h1>This is HOC</h1>
        <Comp myAge={myAge} setAge={incrementAge} {...props} />
      </div>
    );
  };

  return NewComp;
};
