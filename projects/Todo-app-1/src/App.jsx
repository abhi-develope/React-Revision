
import React from 'react'

function App() {
  return (
    <div >
    <div className="container shadow p-3 mb-5 bg-body-tertiary rounded mt-10  ">
    <center>
      <h1 className='fw-bold'>Todo App</h1>
       <div className='space-x-3'>
       <input type="text" className='bg-slate-400 rounded p-2' />
        <input type='date' className='bg-slate-400 rounded p-2' />
        <input type="submit" value="Add" className='p-2 px-4 rounded-lg bg-green-500' />
        <div className="task items-center flex justify-center space-x-24">
        <p className='pt-4'>Buy Milk</p>
        <p className='pt-4 pl-10'>4/10/2023</p>
        <button className='bg-red-600 text-white rounded-lg p-2 px-3 '>Delete</button>
        </div>


        <div className="task items-center flex justify-center space-x-24">
        <p className='pt-4'>Buy Milk</p>
        <p className='pt-4 pl-10'>4/10/2023</p>
        <button className='bg-red-600 text-white rounded-lg p-2 px-3 '>Delete</button>
        </div>
       </div>
    </center>
    </div>
    </div>
  )
}

export default App
