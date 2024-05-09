import React from 'react'

function Display({displayValue}) {
  return (
    <div>
      <input type="text" className=' p-4 m-4 w-[300px] shadow-lg text-2xl font-medium' readOnly value={displayValue} />
    </div>
  )
}

export default Display
