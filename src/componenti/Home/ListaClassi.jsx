import { Link } from "react-router-dom"
import datiClassi from "../../classi.json"

import "../../stile/RiquadroClasse.css"

export default function ListaClassi() {
    return (
        <div style={{overflowY: "scroll", position: "sticky"}}>
            {datiClassi.classi.map(classe => (
                <div key={classe.id} className="RiquadroClasse">
                    <Link to={`/classe/${classe.id}`}>
                        <h1>{classe.anno} {classe.sezione}</h1>
                    </Link>
                </div>
            )
        )}
        </div>
    )
}