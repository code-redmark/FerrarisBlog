import Testa from "../componenti/base/Testa.jsx"
import Contenuto from '../componenti/base/Contenuto.jsx'
import Piedi from "../componenti/base/Piedi.jsx"
import "../stile/Contenitore.css"

export default function Home() {
    return (
        <main>
            <Testa></Testa>
            <div id="Contenitore">
                <Contenuto larghezza="25%" altezza="60vh">
                    <div className="HeaderContenuto">
                        <h1 className="Le Classi">Le Classi</h1>
                    </div>
                    
                </Contenuto>
                <Contenuto larghezza="75%" altezza="60vh">
                    <Contenuto larghezza="100%" altezza="100%"><h1>Marco</h1></Contenuto> 
                </Contenuto>
            </div>
            
            <Piedi></Piedi>

        </main>
        
    )
}