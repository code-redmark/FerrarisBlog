import { Link } from "react-router-dom"
import datiClassi from "../../classi.json"

import "../../stile/RiquadroClasse.css"

export default function ListaClassi() {
    return (
        <div style={{overflowY: "scroll", position: "sticky", scrollbarWidth: "none"}}>
            {datiClassi.classi.map(classe => (
                <div key={classe.id} className="RiquadroClasse">
                    <Link to={`/classe/${classe.id}`}>
                        <button className="BottoneClasse">
                            <h1>{classe.anno} {classe.sezione}</h1>
                        </button>
                    </Link>
                </div>
            )
        )}
        </div>
    )
}