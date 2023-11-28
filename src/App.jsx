import {useRef, useState} from 'react'
import './App.css'
import { ColorPicker } from './components/ColorPicker'

function App() {
  const ref = useRef(null)
  const [color, setColor] = useState()
  return (
    <>
        <ColorPicker ref={ref}/>
        <div>
          {color}
        <button onClick={()=> {
          setColor(ref.current)
        }}>click</button>
        </div>
    </>
  )
}

export default App
