import React from "react";
import { useState } from "react";
import useCountStore from "../store/countStore";

const CountTest = () => {
  const { count, up, down } = useCountStore();
  const [text, setText] = useState(null);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => up(text ? Number(text) : 1)}>+</button>
      <button
        onClick={() => down(text ? Number(text) : 1)}
        disabled={count === 0}
      >
        -
      </button>
      <input
        type="text"
        value={text || ""}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default CountTest;
