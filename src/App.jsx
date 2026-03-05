import './App.css'
import Home from './pagine/Home.jsx'
import Orientamento from './pagine/Orientamento.jsx'
import datiClassi from "./classi.json"
import { Route, Routes } from 'react-router-dom'
import PaginaClasse from './pagine/PaginaClasse.jsx'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/orientamento' element={<Orientamento></Orientamento>}></Route>

      {datiClassi.classi.map(classe => 
        <Route 
            path={`/classe/${classe.id}`} 
            element={<PaginaClasse anno={classe.anno} sezione={classe.sezione}/>}
          />)}
          
    </Routes>
  )
}

export default App
