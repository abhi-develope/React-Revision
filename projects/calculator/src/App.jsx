import React, { useState } from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
    const [displayValue, setDisplayValue]= useState("0")
    const onButtonClick = (buttonText)=> {
        
        if(buttonText === "c"){
            setDisplayValue("")
        }else if (buttonText === "="){
            const result = eval(displayValue);
            setDisplayValue(result);
        }else {
            
            
            const newDisplayValue = displayValue + buttonText;
            setDisplayValue(newDisplayValue);
        }
    }
  return (
    <div className='container'>
      <Display displayValue={displayValue}/>
      <Buttons onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
