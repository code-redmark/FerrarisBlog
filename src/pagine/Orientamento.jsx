import { Link } from 'react-router-dom'
import './Pagina.css'

export default function Orientamento() {
    return (
        <main>
            <div>
                <Link to="/"> Torna a home </Link>
            </div>
            <div className='Testa'> 
                <p>Testa Orientamento</p>
            </div>

            <div className='Contenuto'>
                <p>Contenuto Orientamento</p>
            </div>

            <div className='Piedi'>
            <p>Piedi Orientamento</p>
            </div>

        </main>
    )
}