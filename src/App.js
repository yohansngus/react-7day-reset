import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const decrement = () => {
    setCounter(counter - 1);
  };
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reset">Reset</div>
        <div className="counter">{counter}</div>
        <div className="controller">
          <div className="decrement" onClick={() => decrement()}>
            -
          </div>
          <div className="increment" onClick={() => increment()}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
