import React from 'react'
import './calcDisplay.css'

export default function CalcDisplay(props) {
  return (
    <div className="calcDisplay__container">
    
    <input className='calcDisplay__output' type="text" placeholder={props.displayValue}></input>
    <input className='calcDisplay__output' type="text" placeholder={`=>  ${isNaN(props.displayResult)?`Syntax Error`:props.displayResult}`}></input>
    
    
    </div>
  )
}
