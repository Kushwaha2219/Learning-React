import React from 'react'
import './userCard.css'
const UserCard = (props) => {
  return (
    <div className='container' style={props.style}>
      <p className='name' >{props.name}</p>
      <img className='image' src="./src/assets/pic.jpeg" alt="" />
      <p className='desc'>{props.desc} {props.name}</p>
    </div>
  )
}

export default UserCard
