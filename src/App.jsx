import './App.css'

import Testa from './componenti/base/Testa.jsx'
import Piedi from './componenti/base/Piedi.jsx'

import Home from './pagine/Home.jsx'
import PaginaClasse from './pagine/PaginaClasse.jsx'
import PaginaPost from './componenti/PaginaPost.jsx'

import { Route, Routes } from 'react-router-dom'

function App() {
  const [ datiClassi, setDatiClassi ] = React.useState(datiClassi)

  React.useEffect(() => {
    fetch(`${process.env.DEV_SERVER}/classes`)
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
        datiClassi.classi.map(classe => 
          <Route 
              path={`/classe/${classe.anno}${classe.sezione}`} 
              element={<PaginaClasse idClasse={classe._id}/>}
            />,
            
            classe.posts.map(post =>
              <Route 
                path={`/classe/${classe.anno}${classe.sezione}/post/${post.slug}`}
                element={<PaginaPost post={post}/>}
              />
            )
          )
        }
      </Routes>

      <Piedi/>
    </main>
    
  )
}

export default App
