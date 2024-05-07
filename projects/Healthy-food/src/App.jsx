
import React, { useState } from 'react'
import AddItem from './AddItem.jsx'



function App() {
   
  return (
    <div>
      <div className="text-center mt-10 max-w-[400px] mx-auto">
        <h1>Healthy Food</h1>
        <AddItem/>
        <ul className="list-group ">
  <li className="list-group-item ">
        <div className='flex justify-between items-center'>
    <p>An item</p>
    <button className='p-2 bg-blue-400 rounded-md'>buy</button>
  </div>
  </li>
  <li className="list-group-item ">
        <div className='flex justify-between items-center'>
    <p>An item</p>
    <button className='p-2 bg-blue-400 rounded-md'>buy</button>
  </div>
  </li>
  <li className="list-group-item ">
        <div className='flex justify-between items-center'>
    <p>An item</p>
    <button className='p-2 bg-blue-400 rounded-md'>buy</button>
  </div>
  </li>
  <li className="list-group-item ">
        <div className='flex justify-between items-center'>
    <p>An item</p>
    <button className='p-2 bg-blue-400 rounded-md'>buy</button>
  </div>
  </li>
  <li className="list-group-item ">
        <div className='flex justify-between items-center'>
    <p>An item</p>
    <button className='p-2 bg-blue-400 rounded-md'>buy</button>
  </div>
  </li>
</ul>
      </div>
      
    </div>
  )
}

export default App
