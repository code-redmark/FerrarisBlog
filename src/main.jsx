import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/* Crea un root object, in pratica va a modficare
l'elemento specificato, in questo caso l'elemento con 
l'id "root" (la div in index.html) in document che sarebbe il documento html
*/

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter basename="/FerrarisBlog/">
        <App />
      </BrowserRouter>
    </StrictMode>
)
