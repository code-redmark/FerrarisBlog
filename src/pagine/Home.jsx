import Testa from "../componenti/Testa.jsx"
import Contenuto from '../componenti/Contenuto.jsx'
import Piedi from "../componenti/Piedi.jsx"
import './Pagina.css'
import "../componenti/Contenitore.css"

export default function Home() {
    return (
        <main>            
            <Testa></Testa>
            
            <div className="Contenitore">
                <Contenuto larghezza="25%" altezza="200vh">
                <p>Ciao Contenuto 1</p>
                </Contenuto>
                <Contenuto larghezza="60%" altezza="200vh">
                <p>Ciao Contenuto 2</p>
                </Contenuto>
                <Contenuto larghezza="15%" altezza="200vh">
                <p>Ciao Contenuto 3</p>
                </Contenuto>
            </div>
            
            <Piedi></Piedi>
            
        </main>
        
    )
}