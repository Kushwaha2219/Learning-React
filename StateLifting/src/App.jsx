import { useState } from 'react'
import Card from "./components/Card"
import './App.css'

function App() {
  const [name, setName] = useState(" ")

  return (
    <>
      <Card name={name} setName= {setName}/>
      <p>I am inside Parent:- {name}</p>
    </>
  )
}

export default App
