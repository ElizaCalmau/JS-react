import './App.css'
import { ThemeProvider } from './provider/ThemeProvider'
import { Button } from './components/Button';
import { UserProvider } from './provider/UserProvider';
import { Header } from './section/Header';
import { Posts } from './section/Posts';

export const App = () => {
  return (
    <>
    <ThemeProvider>
      <Button/>
    </ThemeProvider>
    <UserProvider>
      <Header/>
      <Posts/>
    </UserProvider>
  
    </>
  )
}

export default App
