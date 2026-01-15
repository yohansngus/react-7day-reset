import { useState } from "react";
import "./App.css";
import Reset from "./components/reset";
import Increment from "./components/increment";
import Decrement from "./components/decrement";

function App() {
  const [counter, setCounter] = useState(0);
  const decrement = () => {
    setCounter((prev) => (prev <= 0 ? 0 : prev - 1));
  };
  const increment = () => {
    setCounter((prev) => (prev >= 10 ? 10 : prev + 1));
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="App">
      <div className="container">
        <Reset onClick={reset}></Reset>
        <div className="counter">{counter}</div>
        <div className="controller">
          <Decrement onClick={decrement} />
          <Increment onClick={increment} />
        </div>
      </div>
    </div>
  );
}

export default App;
