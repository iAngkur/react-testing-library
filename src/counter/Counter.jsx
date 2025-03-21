import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          setCount(amount);
          setAmount("");
        }}
      >
        Set
      </button>
    </div>
  );
}

export default Counter;
