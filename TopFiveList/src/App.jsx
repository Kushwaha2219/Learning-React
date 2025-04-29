import series from "../src/api/series.json"
import './App.css'
import Card from './Components/Card'
function App() {
  

  return (
    <ul className="grid grid-3-col">
        {series.map((curEle) =>{
            return(
              <Card key={curEle.id} curEle={curEle} />
    )
  })}
    </ ul>
  )
}

export default App
