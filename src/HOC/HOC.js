import React, { useState } from "react";

export const HOC = (Comp, iincrementBy = 1) => {
  const NewComp = (props) => {
    const [myAge, setAge] = useState(0);
    const incrementAge = () => {
      const count = myAge + iincrementBy;
      setAge(count);
    };
    return <Comp myAge={myAge} setAge={incrementAge} {...props} />;
  };

  return NewComp;
};
