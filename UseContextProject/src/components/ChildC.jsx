import React, {useContext} from 'react'
import { ThemeContext } from '../App'
const ChildC = () => {
  const {theme,setTheme} = useContext(ThemeContext)
  function ChangeTheme(){
    if(theme === 'Light'){
      setTheme('Dark');
    }
    else setTheme('Light')
  }
  return (
    <div>
      <button onClick={ChangeTheme} style={{width:100, borderRadius: 50, backgroundColor:'lightblue', color:'white'} }>Change Theme</button>
    </div>
  )
}

export default ChildC
