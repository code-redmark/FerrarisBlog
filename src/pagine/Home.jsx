import { Link } from 'react-router-dom'
import './Pagina.css'

export default function Home() {
    return (
        <main>
            <div>
                <Link to="/Orientamento"> Orientamento </Link>
            </div>

            <div className='Testa'> 
                <p>Testa</p>
            </div>

            <div className='Contenuto'>
                <p>Contenuto</p>
            </div>

            <div className='Piedi'>
            <p>piedi</p>
            </div>

            
        </main>
        
    )
}