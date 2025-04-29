import { createContext, useState } from 'react'
import ChildA from "./components/ChildA"
import './App.css'
const ThemeContext = createContext();
function App() {
  
  const [theme,setTheme] = useState('Light');
  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div className='Container' style={{backgroundColor:theme === 'Light' ? 'beige' : 'black'}}>
          <ChildA/>
        </div>  
      </ThemeContext.Provider>

    </>
  )
}

export default App
export {ThemeContext}
