import { React, useEffect, useState, useReducer } from "react";
import CalcDisplay from "../calcDisplay/CalcDisplay";
import "./calcValue.css";

export default function CalcValue() {
  const [value, setValue] = useState([0])
  const [evalValue, setEvalValue] = useState("");

  let numbers = [];

  for (let i = 1; i < 10; i++) {
    numbers.push(i);
  }

  function init(){}


 const initialValue = value

  function reducer(state, action) {
    console.log(state)
    switch (action.type) {
      case "increment":
        return state + 1 ;
      case "decrement":
        return  state - 1;
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialValue, init);



  return (
    <div>
       Count: {state}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <CalcDisplay displayValue={value} result={evalValue} />
      <div className="calcButtons__container">
        <div className="calcButtons__numbers">
          <button className="calcButtons__numbers-digits">0</button>
          {numbers.map((number) => {
            return (
              <button
                key={number}
                className="calcButtons__numbers-digits"
                onClick={(e)=> setValue(value => value,Number(e.target.innerText))}
              
              >
                {number}
              </button>
            );
          })}
        </div>
        <div className="calcButtons__operation">
          <button className="calcButtons__operation-operators" onClick={() => dispatch({ type: "increment" })}>+</button>
          <button className="calcButtons__operation-operators"onClick={() => dispatch({ type: "decrement" })}>-</button>
          <button className="calcButtons__operation-operators">*</button>
          <button className="calcButtons__operation-operators">/</button>
          <button className="calcButtons__operation-operators"onClick={() => dispatch({ type: "increment" })}>=</button>
          <button className="calcButtons__operation-operators">CE</button>
        </div>
      </div>
    </div>
  );
}
