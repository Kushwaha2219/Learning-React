import React from 'react'

const Card = (props) => {
  return (
    <div>
      <label htmlFor="FirstInput"> Input:- 
        <input type="text" onChange={(e) =>{
           props.setName(e.target.value);
        }}/>
      </label>
      <p>Output:- {props.name}</p>
    </div>
  )
}

export default Card
