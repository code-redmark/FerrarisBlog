import { Link } from "react-router-dom"
import datiClassi from "../../classi.json"

import "../../stile/ClassiHome.css"

export default function ListaClassi() {
    return (
        
        <div className="ListaClassi">
            {
                datiClassi.classi.map(classe => (
                  
                    <div key={classe.codice} className="RiquadroClasse">
                        <Link id="LinkRiquadro" to={`/classe/${classe.codice}`}>
                            <h1>{classe.anno} {classe.sezione}</h1>
                        </Link>
                    </div>
                
            )
        )}
        </div>
            
    )
}