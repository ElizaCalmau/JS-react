import './App.css'
import { useRef } from 'react';

function App() {
  const inputRef = useRef(null)

  return(
    <>
    <input ref={inputRef}/>
    <button onClick={()=> {
      inputRef.current.focus();
    }}>click</button>
    </>
  )
}

export default App
