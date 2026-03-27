import './App.css'

import Testa from './componenti/base/Testa.jsx'
import Piedi from './componenti/base/Piedi.jsx'

import Home from './pagine/Home.jsx'
import PaginaClasse from './pagine/PaginaClasse.jsx'
import PostGenerico from './pagine/PostGenerico.jsx'

import { Route, Routes } from 'react-router-dom'
import PaginaLogin from './pagine/PaginaLogin.jsx'

function App() {
  return (
    <main>
      <Testa/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/classe/:ASclasse/:idClasse' element={<PaginaClasse/>}/>
          <Route path='/classe/:ASclasse/:idClasse/post/:slug/:idPost' element={<PostGenerico/>}/>
          <Route path='/login' element={<PaginaLogin/>}/>
        </Routes>
      <Piedi/>
    </main>
    
  )
}

export default App
