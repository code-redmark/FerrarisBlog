import Testa from '../componenti/Testa'
import Contenuto from '../componenti/Contenuto'
import '../stile/Piedi.css'


export default function Orientamento() {
    return (
        <main>
            <Testa></Testa>

            <Contenuto><h1 className='HeaderContenuto'>Contenuto Orientamento</h1></Contenuto>

            <div className='Piedi'>
            <p>Piedi Orientamento</p>
            </div>

        </main>
    )
}