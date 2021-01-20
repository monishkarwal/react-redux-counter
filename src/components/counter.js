import React from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions";

const Counter = () => {
  const state = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch(allActions.increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(allActions.decrement())}>
        decrement
      </button>
      <button onClick={() => dispatch(allActions.reset())}>Reset</button>
    </>
  );
};

export default Counter;
