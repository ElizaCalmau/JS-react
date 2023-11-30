import { useState } from 'react'
import {Button} from './cmps/Button'
import './App.css'

function App() {
let [count, setCount] = useState('')
const [disabled, setDisabled] =useState(true)
  return(
    <>
    <input value={count} onChange={(e)=>{
      if(e.target.value.length < 5){
      setCount(e.target.value);
      }
    }}/>
    <div>
      <input type='number' onBlur={(e)=>{
        const num = +e.target.value 
        setDisabled(num < 18 ? true : false)
      }}/>
      <Button value={disabled}/>
    </div>
    </>
  )
}

export default App
