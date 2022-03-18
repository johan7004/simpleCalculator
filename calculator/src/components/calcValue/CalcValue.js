import {React, useEffect, useState} from 'react';
import CalcDisplay from '../calcDisplay/CalcDisplay';
import './calcValue.css'

export default function CalcValue() {

  const [value, setValue]=useState("");
  const [evalValue, setEvalValue]= useState("");



    const numGenerator =()=>{

        let numbers=[];

        for(let i=1; i<10; i++){

            
                numbers.push(<button key={i} className="calcButtons__numbers-digits" onClick={calcValue}>{i}</button>)
            

        }
        

        return numbers;

    }

    const calcValue =(e)=>{

        let numberPressed = e.target.innerHTML;
        
    
          setValue((prevValue) => prevValue + numberPressed );
        
        
    }

  

    useEffect(()=>{

      if(value.endsWith('+')||value.endsWith('-')||value.endsWith('/')||value.endsWith('*')){
        console.log(`syntax Error`)
      }else{
        console.log(eval(value))
        setEvalValue(eval(value))
      }
    })

    const calcEqual=()=>{
      console.log(evalValue)
      setValue(`${evalValue}`)
    }
    const resetCalc=()=>{
      setValue("")
    }


    

  return (
      <div>
      <CalcDisplay
      displayValue={value}
      result={evalValue}
      />
    <div className="calcButtons__container">
    <div className="calcButtons__numbers">
    <button className="calcButtons__numbers-digits" onClick={calcValue}>0</button>
    {numGenerator()}

    
    </div>
    <div className="calcButtons__operation">
    <button className="calcButtons__operation-operators" onClick={calcValue}>+</button>
    <button className="calcButtons__operation-operators" onClick={calcValue}>-</button>
    <button className="calcButtons__operation-operators" onClick={calcValue}>*</button>
    <button className="calcButtons__operation-operators" onClick={calcValue}>/</button>
    <button className="calcButtons__operation-operators" onClick={calcEqual}>=</button>
    <button className="calcButtons__operation-operators" onClick={resetCalc}>CE</button>
    </div>
    </div>
    </div>
  )
}
