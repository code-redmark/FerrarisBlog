import './App.css'
import Home from './pagine/Home.jsx'
import Orientamento from './pagine/Orientamento.jsx'

import { Route, Routes } from 'react-router-dom'
import PaginaClasse from './pagine/PaginaClasse.jsx'

import datiPost from "./post/posts.json"
import datiClassi from "./classi.json"
import PaginaPost from './componenti/PaginaPost.jsx'
import Testa from './componenti/base/Testa.jsx'
import Piedi from './componenti/base/Piedi.jsx'

function App() {
  return (
    <main>
      <Testa/>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/orientamento' element={<Orientamento></Orientamento>}></Route>

        {datiClassi.classi.map(classe => 
          <Route 
              path={`/classe/${classe.id}`} 
              element={<PaginaClasse anno={classe.anno} sezione={classe.sezione}/>}
            />)}
            
        {
          Object.entries(datiPost).map(([idClasse, listaPosts]) =>
            Object.values(listaPosts).map(post => 
              <Route 
              path={`/classe/${idClasse}/post/${post.slug}`}
              element={<PaginaPost post={post}/>}>
          
              </Route>
            
            ))
        
        }

      </Routes>

      <Piedi/>
    </main>
    
  )
}

export default App
