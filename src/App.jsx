import { Provider } from 'react-redux'
import './App.css'
import { store } from './store/store'
import { Products } from './pages/Products'

function App() {

  return (
    <>
      <Provider store={store}>
        <Products/>
      </Provider>
    </>
  )
}

export default App
