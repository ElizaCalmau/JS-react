import './App.css'
import { useState, useMemo } from 'react';
import {arr as array} from './utils/math'

console.log(array)

function App() {
  const [count, setCount] = useState(0)
  const memoValue = useMemo(()=> {
    let sum = 0;
    for(let i = 0; i < 10000; i++){
      sum += i;
    }
    return sum;
  }, [])


  return (
    <>
    <div>
    {memoValue}
    <button onClick={()=> {
      setCount((prevState) => {
        return prevState + 1;
      })
    }}>{count}</button>
    </div>
    </>
  )
}

export default App
