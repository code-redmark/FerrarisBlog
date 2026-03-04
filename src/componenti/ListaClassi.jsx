import data from "../classi.json"

import "../stile/RiquadroClasse.css"

export default function ListaClassi() {
    return (
        <div>
            {data.classi.map(classe => (
                <div className="RiquadroClasse">
                    <h1>{classe.anno} {classe.sezione}</h1>
                </div>

                
            )
        )}
        </div>
    )
}