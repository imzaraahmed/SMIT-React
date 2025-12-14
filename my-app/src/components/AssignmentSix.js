import { useState } from "react";
function CounterApp() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    width: "150px",
    margin:"10px"
  };

  return (
    <>
    <div className="myinfo">
        <h1>Assignment 6</h1>
      <h2>Count: {count}</h2>

      <button className="button" style={buttonStyle} onClick={() => setCount(count + 1)}>
        + Increment
      </button>

      <button className="button" style={buttonStyle} onClick={() => setCount(count - 1)}>
        - Decrement
      </button>
    </div>
    </>
  );
}

export default CounterApp;
