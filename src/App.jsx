import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { store } from '../store/store'
import { Settings } from './pages/Settings'
import './App.css'


function App() {

  return(
    <>
    <BrowserRouter>
     <Provider store={store}>
        <main>
          <Switch>
            <Route path='/' exact>
              <h1>home</h1>
              <Link to='/settings'>Settings</Link>
            </Route>
            <Route path='/settings'>
              <Settings/>
            </Route>
          </Switch>
        </main>
      </Provider>

    </BrowserRouter>
    </>
  )
}

export default App
