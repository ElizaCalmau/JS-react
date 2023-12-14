import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import { HomePage } from './Homepage'
import './App.css'
import { Contacts } from './Contacts'


function App() {
    return(
      <main>
        <BrowserRouter>
          <header>My website</header>
          <nav>
            <NavLink to='/contacts' activeClassName='selected'> go to contacts </NavLink>
            <NavLink to='/' exact activeClassName='selected'>go home</NavLink>
          </nav>
          <Switch>
            <Route path='/contacts'>
              <Contacts/>
            </Route>
            <Route path='/'>
              <HomePage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    )
}

export default App
