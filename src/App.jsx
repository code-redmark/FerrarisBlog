import './App.css'

import Testa from './componenti/base/Testa.jsx'
import Piedi from './componenti/base/Piedi.jsx'

import Home from './pagine/Home.jsx'
import PaginaClasse from './pagine/PaginaClasse.jsx'
import PaginaPost from './pagine/PaginaPost.jsx'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <main>
      <Testa/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/classe/:ASclasse/:idClasse' element={<PaginaClasse/>}/>
          <Route path='/classe/:ASclasse/:idClasse/post/:slug/:idPost' element={<PaginaPost/>}/>
        </Routes>
      <Piedi/>
    </main>
    
  )
}

export default App
