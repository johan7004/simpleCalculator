import {React, useEffect, useState} from 'react';
import CalcDisplay from '../calcDisplay/CalcDisplay';

export default function CalcValue() {

  const [value, setValue]=useState("");
  const [evalValue, setEvalValue]= useState(null);



    const numGenerator =()=>{

        let numbers=[];

        for(let i=1; i<10; i++){

            
                numbers.push(<button key={i} className="calcButton__numbers-digits" onClick={calcValue}>{i}</button>)
            

        }
        

        return numbers;

    }

    const calcValue =(e)=>{

        let numberPressed = e.target.innerHTML;

        setValue((prevValue) => prevValue + numberPressed );
        
    }

    useEffect(()=>{

      if(value){
        console.log(value)
      }
    })


    

  return (
      <div>
      <CalcDisplay
      displayValue={value}
      />
    <div className="calcButtons__container">
    <div className="calcButtons__numbers">
    <button className="calcButton__numbers-digits" onClick={calcValue}>0</button>
    {numGenerator()}

    
    </div>
    <div className="calcButtons__opertation">
    <button className="calcButtons__operation-operators" onClick={calcValue}>+</button>
    <button className="calcButtons__operation-operators" onClick={calcValue}>-</button>
    <button className="calcButtons__operation-operators" onClick={calcValue}>*</button>
    <button className="calcButtons__operation-operators" onClick={calcValue}>/</button>
    </div>
    </div>
    </div>
  )
}
