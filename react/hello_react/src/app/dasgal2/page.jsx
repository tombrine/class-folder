"use client";

import { useState } from "react";

const Page = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [operator, setOperator] = useState("+");

  console.log({ input1, input2, operator });

  let result = 0;

  switch (operator) {
    case "+":
      result = Number(input1) + Number(input2);
      break;
    case "-":
      result = Number(input1) - Number(input2);
      break;
    case "*":
      result = Number(input1) * Number(input2);
      break;
    case "/":
      result = Number(input1) / Number(input2);
      break;
  }

  return (
    <div className="dasgal2">
      <span>Dasgal 2</span>

      <div className="calculator">
        <input
          type="number"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />

        <select name="" id="" onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">x</option>
          <option value="/">/</option>
        </select>

        <input
          type="number"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />

        <span>= {result}</span>
      </div>
    </div>
  );
};

export default Page;
