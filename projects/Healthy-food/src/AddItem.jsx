import { Container } from 'postcss'
import React from 'react'

function AddItem() {
    const[addItem, setAddItem] = useState()

   const handelItem = ()=>{
    
   }

  return (
   
    <div className='flex justify-around Container my-2'>
      <input type="text" placeholder='Enter item name' className='p-2 rounded-lg' />
      <button className='p-2 bg-green-400 rounded-lg'>Add item</button>
    </div>
    
  )
}

export default AddItem
