import { Link } from 'react-router-dom'
import './Pagina.css'
import Testa from '../componenti/Testa'

export default function Orientamento() {
    return (
        <main>
            <Testa></Testa>

            <div className='Contenuto'>
                <p>Contenuto Orientamento</p>
            </div>

            <div className='Piedi'>
            <p>Piedi Orientamento</p>
            </div>

        </main>
    )
}