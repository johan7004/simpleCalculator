import React from 'react'
import './calcDisplay.css'

export default function CalcDisplay(props) {
  return (
    <div className="calcDisplay__container">
    <form>
    <input className='calcDisplay__output' type="text" defaultValue={props.displayValue}  value={props.displayValue}/>
    <input className='calcDisplay__output--result' type="text" defaultValue={props.displayValue} value={props.result}/>
    </form>
    
    </div>
  )
}
