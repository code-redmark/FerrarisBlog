import datiClassi from "../classi.json"

import "../stile/RiquadroClasse.css"

export default function ListaClassi() {
    return (
        <div style={{overflowY: "scroll", position: "sticky"}}>
            {datiClassi.classi.map(classe => (
                <div key={classe.id} id="bordoFuori">
                    <div className="RiquadroClasse">
                    <h1>{classe.anno} {classe.sezione}</h1>
                    </div>
                </div>
            )
        )}
        </div>
    )
}