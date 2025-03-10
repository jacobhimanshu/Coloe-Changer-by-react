import React from 'react'
import { useState } from 'react'
const App = () => {
  const [color,setcolor] = useState("yellow");
    
  return (
    <div>
      <>
     
      <div className='flex justify-center gap-6 pt-8'>
        <button className='bg-red-800  px-4 py-2 rounded-md ' onClick={()=>setcolor("red")} >red</button>
        <button className='bg-blue-700  px-4 py-2 rounded-md' onClick={()=>setcolor("blue")}>blue</button>
        <button className='bg-green-700  px-4 py-2 rounded-md' onClick={()=>setcolor("green")}>green</button>
      </div>
      <div
        className="mt-6  w-40 h-40 rounded-md border-2 border-black"
        style={{ backgroundColor: color }}  
      ></div>
      </>

    </div>
    
  )
}

export default App
