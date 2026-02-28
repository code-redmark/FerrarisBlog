import './Pagina.css'
import Testa from '../componenti/Testa'
import Contenuto from '../componenti/Contenuto'

export default function Orientamento() {
    return (
        <main>
            <Testa></Testa>

            <Contenuto><p>Contenuto Orientamento</p></Contenuto>

            <div className='Piedi'>
            <p>Piedi Orientamento</p>
            </div>

        </main>
    )
}