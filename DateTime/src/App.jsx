
import './App.css'

function App() {
 
  function CurrTime(){
     let time = ""
    const now = new Date();
    time += now.getHours();
    time += ':'
    time += now.getMinutes() + ':';
    time += now.getSeconds() ;
  return time;
  }
  function CurrDate(){
    let date = ""
    const now = new Date();
    
    date += now.getDate() 
    date += ':'
    
    date += now.getMonth()+1 < 10 
    ? "0"+(now.getMonth() + 1 )+":" 
    :now.getMonth()+1 + ":";

    date += now.getFullYear();
  return date;
  }
  

  return (
    <>
      <h1>Current Time is :- {CurrTime()} </h1>
      <h2>Today Date is :- {CurrDate()}</h2>
    </>
  )
}

export default App
 