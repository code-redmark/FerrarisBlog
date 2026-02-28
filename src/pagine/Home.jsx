import { Link } from 'react-router-dom'
import Testa from "../componenti/Testa.jsx"
import './Pagina.css'

export default function Home() {
    return (
        <main>            
            <Testa></Testa>

            <div className='Contenuto'>
                <p>Contenuto</p>
            </div>

            <div className='Piedi'>
            <p>piedi</p>
            </div>
            
        </main>
        
    )
}