import { useState } from "react";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState(null);
  const handleUserInput = (e) => {
    const value = e.target.value;
    setUserInput(value);
  };
  const increment = () => {
    if (+userInput) {
      setCounter((counter) => counter + +userInput);
    } else {
      setCounter((counter) => counter + 1);
    }
  };
  const decrement = () => {
    if (userInput) {
      setCounter((counter) => counter - +userInput);
    } else {
      setCounter((counter) => counter - 1);
    }
  };
  const reset = () => {
    setCounter(0);
    setUserInput("");
  };
  return (
    <div className="App">
      <h1>{counter}</h1>
      <div className="btns">
        <button className="btn icrement" onClick={() => increment()}>
          {" "}
          +{" "}
        </button>
        <button className="btn decrement" onClick={() => decrement()}>
          {" "}
          -{" "}
        </button>
      </div>
      <div className="input-holder">
        <label htmlFor="input">Increment/Decrement By : </label>
        <input
          onChange={(e) => handleUserInput(e)}
          type="number"
          className="user_input"
          value={userInput}
        />
      </div>
      <div className="reset_container">
        <button type="reset" onClick={() => reset()} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}
