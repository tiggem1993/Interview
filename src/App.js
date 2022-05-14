import { useEffect } from "react";
import "./styles.css";
import MyComponent from "./MyComponent";
import CompA from "./HOC/CompA";
import CompB from "./HOC/CompB";
export default function App() {
  useEffect(() => {
    const box = document.getElementById("myid");
    box.style.color = "red";
  }, []);
  return (
    <div className="App">
      <h1 id="myid">Hello CodeSandbox</h1>
      <h2 id="myid">Start editing to see some magic happen!</h2>
      <MyComponent myTitle="Fruit search" />
      <CompA myName="Ram" />
      <CompB myName="Arjun" />
    </div>
  );
}
