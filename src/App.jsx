import { Header } from './section/Header';
import {Posts} from './section/Posts'
import './App.css'
import { UsetProvider } from './provider/UserProvider';

function App() {

  return (
    <>
    <UsetProvider>
      <Header/>
      <Posts/>
    </UsetProvider>
    </>
  )
}

export default App
