import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <h2 className="counter-display">{count}</h2>
      <button
        onClick={decrement}
        className="button button-decrement"
        disabled={count === 0}
      >
        -
      </button>
      <button onClick={increment} className="button button-increment">
        +
      </button>
      <br />
      <button onClick={reset} className="button button-reset">
        Reset
      </button>
    </div>
  );
}

export default Counter;
