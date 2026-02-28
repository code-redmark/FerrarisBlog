import Testa from "../componenti/Testa.jsx"
import Contenuto from '../componenti/Contenuto.jsx'
import './Pagina.css'

export default function Home() {
    return (
        <main>            
            <Testa></Testa>
            
            <div className="Contenitore">
                <Contenuto larghezza="25%">
                <p>Ciao Contenuto 1</p>
                </Contenuto>
                <Contenuto larghezza="60%">
                <p>Ciao Contenuto 2</p>
                </Contenuto>
                <Contenuto larghezza="15%">
                <p>Ciao Contenuto 3</p>
                </Contenuto>
            </div>
            

            <div className='Piedi'>
            <p>piedi</p>
            </div>
            
        </main>
        
    )
}