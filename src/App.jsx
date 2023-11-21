import { useCallback, useState } from 'react'
import { Input } from './components/Input';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('');

  const handleChange = useCallback((newVal)=>{
    setValue(newVal)
  }, []);
    
  function handleClick () {
    setCount( count + 1)
  }
  
  return (
    <>
    <div>
      <Input defaultValue={value} onChange={handleChange}/>
      <br/>
      <button onClick={handleClick}>{count}</button>
    </div>
    </>
  )
}

export default App
