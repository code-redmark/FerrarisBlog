import './App.css'

import Testa from './componenti/base/Testa.jsx'
import Piedi from './componenti/base/Piedi.jsx'

import Home from './pagine/Home.jsx'
import PaginaClasse from './pagine/PaginaClasse.jsx'
import PaginaPost from './componenti/PaginaPost.jsx'

import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [ datiClassi, setDatiClassi ] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/classes`)
      .then(res => res.json())
      .then(data => setDatiClassi(data))
      .catch(err => console.log(err))
  }, []);


  return (
    <main>
      <Testa/>

<Routes>
  <Route path='/' element={<Home />}></Route>
  {
    datiClassi && datiClassi.map(classe => (
      <>
        <Route 
          key={`classe-${classe._id}`}
          path={`/classe/${classe.anno}${classe.sezione}`} 
          element={<PaginaClasse idClasse={classe._id}/>}
        />
        {
          classe.posts && classe.posts.map(post => (
            <Route 
              key={`post-${post.slug}`}
              path={`/classe/${classe.anno}${classe.sezione}/post/${post.slug}`}
              element={<PaginaPost post={post}/>}
            />
                ))
              }
            </>
          ))
        }
      </Routes>

      <Piedi/>
    </main>
    
  )
}

export default App
