"use client";

import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="dasgal">
      <span>Dasgal 1</span>

      <div className="count1">
        <button onClick={minus}>-</button>
        <span>{count}</span>
        <button onClick={plus}>+</button>
      </div>
    </div>
  );
};

export default Page;
