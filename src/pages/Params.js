import React from "react";
import { useLocation } from "react-router";

export default function Params() {
  const { state = {} } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Params</h1>
      <p>I came from: {state.from} </p>
    </div>
  );
}
