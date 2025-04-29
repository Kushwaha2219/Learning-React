import UserCard from "./Components/UserCard"
import "./App.css"

function App() {
  

  return (
    <div className="main">
      < UserCard name="Vishal Kushwaha" desc = "This pic belongs to " style={{ borderRadius: "10px" }}/>
      < UserCard name="Himanshu Bhadoria" desc = "This pic belongs to " style={{ borderRadius: "10px" }}/>
      < UserCard name="Amit Kushwaha" desc = "This pic belongs to " style={{ borderRadius: "10px" }}/>
    </div>
  )
}

export default App
