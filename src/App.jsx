import './App.css'
import Home from './pagine/Home.jsx'
import Orientamento from './pagine/Orientamento.jsx'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/orientamento' element={<Orientamento></Orientamento>}></Route>
    </Routes>
  )
}

export default App
