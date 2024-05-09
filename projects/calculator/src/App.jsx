import React, { useState } from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
    const [displayValue, setDisplayValue]= useState("0")
  return (
    <div className='container'>
      <Display displayValue={displayValue}/>
      <Buttons/>
    </div>
  )
}

export default App
