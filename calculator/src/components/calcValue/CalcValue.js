import { React, useState, useReducer } from "react";
import CalcDisplay from "../calcDisplay/CalcDisplay";
import "./calcValue.css";

let initialState = 0;

function reducer(state, action) {
  let operandValues = null;
  if (/[+-/*]$/.test(action.payload)) {
    console.log(`pass `);
    operandValues = action.payload * 0;
  } else {
    console.log(`error`);

    operandValues = action.payload;
  }

  switch (action.type) {
    case "CALC":
      // eslint-disable-next-line no-eval
      return eval(operandValues);

    case "RESET":
      return initialState;
    default:
      return state;
  }
}
export default function CalcValue() {
  const [operands, setOperands] = useState(" ");
  const [value, dispatch] = useReducer(reducer, initialState);

  function changeValue(e) {
    e.preventDefault();
    const pressedNum = e.target.innerText;
    setOperands((operands) => operands + pressedNum);
    if (pressedNum === "CE") {
      setOperands("");
    }
  }

  let numbers = [];

  for (let i = 1; i < 10; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <CalcDisplay displayValue={operands} displayResult={value} />
      <div className="calcButtons__container">
        <div className="calcButtons__numbers">
          <button
            className="calcButtons__numbers-digits"
            onClick={(e) => changeValue(e)}
          >
            0
          </button>
          {numbers.map((number, i) => {
            return (
              <button
                key={i}
                className="calcButtons__numbers-digits"
                onClick={changeValue}
              >
                {number}
              </button>
            );
          })}
        </div>
        <div className="calcButtons__operation">
          <button
            className="calcButtons__operation-operators"
            onClick={(e) => changeValue(e)}
          >
            +
          </button>
          <button
            className="calcButtons__operation-operators"
            onClick={(e) => changeValue(e)}
          >
            -
          </button>
          <button
            className="calcButtons__operation-operators"
            onClick={(e) => changeValue(e)}
          >
            *
          </button>
          <button
            className="calcButtons__operation-operators"
            onClick={(e) => changeValue(e)}
          >
            /
          </button>
          <button
            className="calcButtons__operation-operators"
            onClick={() => dispatch({ type: "CALC", payload: operands })}
          >
            =
          </button>
          <button
            className="calcButtons__operation-operators"
            onClick={(e) => {
              changeValue(e);
              dispatch({ type: "RESET", payload: operands });
            }}
          >
            CE
          </button>
        </div>
      </div>
    </div>
  );
}
