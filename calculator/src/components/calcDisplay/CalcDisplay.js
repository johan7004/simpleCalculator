import React from 'react'

export default function CalcDisplay(props) {
  return (
    <div className="calcDisplay__container">
    <form>
    <input className='calcDisplay__output' type="text"  value={props.displayValue}/>
    </form>
    
    </div>
  )
}
