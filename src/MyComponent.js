import React, { useEffect, useState } from "react";

const MyComponent = (props) => {
  const list = ["apple", "banana", "orange", "mango", "Angir", "Angoor"];
  useEffect(() => {
    const box = document.getElementById("mypid");
    box.style.color = "pink";
    console.log(list.sort());
  }, []);

  const [val, setVal] = useState(null);
  const [result, setResult] = useState(list);

  const handleChange = (e) => {
    setVal(e.target.value);
    if (e.target.value === "") {
      setResult(list);
      return;
    }
    //setResult(list.filter((item) => item === e.target.value));
    const searchResult = list.filter((item) => item === e.target.value);
    setResult(searchResult);
  };

  return (
    <div>
      <p id="mypid">{props.myTitle}</p>
      <p id="mypid">my paragraph</p>
      <input type="text" onChange={handleChange} />
      {val && (
        <p
          style={{ border: val.length > 3 ? "1px solid red" : "3px solid red" }}
        >
          {val}
        </p>
      )}
      {result.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
      {val && !result.length && <p>No result found</p>}
    </div>
  );
};

export default MyComponent;
