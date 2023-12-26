import { Provider } from 'react-redux'
import './App.css'
import { store } from './store/store'
import { Home } from './pages/Home'
import { Todo } from './pages/Todo'


function App() {

return (
  <>
  <Provider store={store}>
    <Home/>
    <Todo/>
  </Provider>
  </>
)
  
}

export default App
