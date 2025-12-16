import {useState} from "react";
function Input(){
 const [text, setText] = useState("");

  return (
    <>
    <div className="myinfo">
        <h1>Assignment 7</h1>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid black",
         
        }}
      />
      <p>You typed: {text}</p>
    </div>
    </>
  );
}

export default Input;

