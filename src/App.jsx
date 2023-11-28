import {useRef} from 'react'
import { Block } from './components/Block'
import './App.css'


function App() {
  const refBlockOne = useRef(null)
  const refBlockTwo = useRef(null)
  const refBlockThree = useRef(null)

  function onClick(ref){
    ref.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
        <div>
        <div style={{position: 'fixed', top: 0}}>
          <button onClick={()=> {
            onClick(refBlockOne.current)
          }}>to 1</button>
          <button onClick={() => {
            onClick(refBlockTwo.current)
            }}>to 2</button>
          <button onClick={() => {
            onClick(refBlockThree.current);
            }}>to 3</button>
        </div>

        <Block ref={refBlockOne} value='1'/>
        <Block ref={refBlockTwo} value='2'/>
        <Block ref={refBlockThree} value='3' />
        </div>
    </>
  )
}

export default App
