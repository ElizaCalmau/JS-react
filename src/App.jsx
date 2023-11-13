import math from './utils/math'
import './App.css'
import { useState } from 'react';
import {arr as array} from './utils/math'

console.log(array)

function App() {
  const divide = math.div(10, 5);
  const multiply = math.mul(2, 4)
  let [color, setColor] = useState('light');
  const setTheme = ()=> {
    setColor(color ==='light' ? 'black' : 'light');
  }
  let [arr, setArr] = useState(array);
  return(
    <>
    <h2>{divide}</h2>
    <h3>{multiply}</h3>
    <div style={{backgroundColor: color === 'light' ? 'beige' : 'grey', width: 200, height: 200}}>
    <button onClick={setTheme}>{color}</button>
    </div>
    <div style={{width: 200, height: 200, backgroundColor: 'pink'}}>
      {arr}
      <button onClick={()=> {
        setArr((prevState) => {
          let nextState = prevState.slice(0)
          nextState.sort((a,b) => a - b);
          console.log(nextState);
          return nextState;
        })
      }}>Sort</button>
    </div>
    </>
  )

}

export default App
