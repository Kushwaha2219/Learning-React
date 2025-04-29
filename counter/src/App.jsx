import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function add(){
    if(count < 21) setCount(count+1)
    
  }
  
  function remove(){
    if(count >0)setCount(count-1)
  }
  

  return (
    <>

    <h1 className='text-center m-10 text-5xl text-green-200'>Hello , This is counter project {count } </h1>
    <div className='flex justify-center gap-3'>
    <button onClick={add} className='border-3 border-black rounded-4xl p-2.5 text-blue-200 text-2xl bg-amber-50'> Click to Increase</button>
    <button onClick={remove} className='border-3 rounded-4xl p-2.5 text-2xl text-cyan-200'>Click to Decrease</button>  
    </div>  
    </>
  )
}

export default App
