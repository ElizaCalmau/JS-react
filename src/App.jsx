import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { store } from './store/store'
import { Products } from './pages/Products'
import { Users } from './pages/Users'
import { UserPage } from './pages/UserPage'
import './App.css'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact>
              <Link to='/users'>Users</Link>
              <Products/>
            </Route>
            <Route path='/users'>
              <Link to='/'>Products</Link>
              <Users/>
            </Route>
            <Route path='/:id'>
              <UserPage/>
            </Route>
          </Switch>
        </BrowserRouter>
        
      </Provider>
    </>
  )
}

export default App
