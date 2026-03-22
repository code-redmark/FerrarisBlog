import './App.css'

import Testa from './componenti/base/Testa.jsx'
import Piedi from './componenti/base/Piedi.jsx'

import Home from './pagine/Home.jsx'
import PaginaClasse from './pagine/PaginaClasse.jsx'
import PaginaPost from './pagine/PaginaPost.jsx'

import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { fetchClasses } from "./api/Class.mjs"
import { fetchPopulatedPosts } from "./api/Post.mjs"

function App() {
  const [ datiClassi, setDatiClassi ] = useState([]);
  const [ datiPost, setDatiPost ] = useState([]);

  useEffect(() => {
      fetchClasses()
      .then(data => setDatiClassi(data))
    fetch(`${import.meta.env.VITE_SERVER}/posts/pop`)
      fetchPopulatedPosts()
        .then(data => setDatiPost(data))
  }, []);


  return (
    <main>
      <Testa/>

  <Routes>
    <Route path='/' element={<Home />}></Route>
    {
      datiClassi && datiClassi.map(classe => (
        
            <Route 
              key={`classe-${classe._id}`}
              path={`/classe/${classe.anno}${classe.sezione}`} 
              element={<PaginaClasse idClasse={classe._id}/>}
            />
        ))
    }
    {
      datiPost && datiPost.map(post => (
            
            <Route
              key={`post-${post._id}`}
              path={`/classe/${post.class.anno}${post.class.sezione}/post/${post.slug}`}
              element={<PaginaPost idPost={post._id}/>}
            />
      
      ))
    }
      </Routes>

      <Piedi/>
    </main>
    
  )
}

export default App
