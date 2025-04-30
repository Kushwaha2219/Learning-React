import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByValue,reset } from './counterSlice';

const Counter = () => {
    const count = useSelector   ((state) => state.counter.value)
    const dispatch = useDispatch();
    const[amount,setAmount] = useState(0);
    function handleClick(){
        dispatch(increment())
    }

    function handleDec(){
        dispatch(decrement())
    }

    function handleValue(){
        dispatch(incrementByValue(amount));
    }
  return (
    <div>
      <button onClick={handleClick}>
        Increment
      </button>
      <p>
        Count:- {count}
      </p>

      <button onClick={handleDec}>
        Decrement
      </button>

      <br />
      <br />
        <input type="Number" placeholder='Enter Amount'style={{width:100, borderRadius:50, margin:10,padding:10}} 
        value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        <br />
      <button onClick={handleValue}>
        Inc By Value
      </button>
      <br />
      <br />
      <button onClick={()=> dispatch(reset())}> Reset</button>
    </div>
  )
}

export default Counter
