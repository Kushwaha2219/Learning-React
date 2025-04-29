import React from 'react'
import { useState , useEffect } from 'react'
const Counter = () => {
    const [count,setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }
    useEffect(() =>{
        alert("Count is clicked");
    },[])
  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
      <p>Value of Count- {count}</p>
    </div>
  )
}

export default Counter
