import { Link } from "react-router-dom"
import datiClassi from "../../classi.json"

import "../../stile/ClassiHome.css"

export default function ListaClassi() {
    return (
        
        <div className="ListaClassi">
            {
                datiClassi.classi.map(classe => (
                  
                    <div key={classe.id} className="RiquadroClasse">
                        <Link id="LinkRiquadro" to={`/classe/${classe.id}`}>
                            <h1>{classe.anno} {classe.sezione}</h1>
                        </Link>
                    </div>
                
            )
        )}
        </div>
            
    )
}