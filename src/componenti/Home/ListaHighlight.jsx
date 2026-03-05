import datiNotizie from "../../highlights.json"
import Highlight from "./Highlight"

import "../../stile/ListaHighlight.css"

export default function ListaHighlight() {
    return (
        <div className="ListaHighlight">
            {datiNotizie.highlights.map(highlight =>
                <div key={highlight.id}>
                    <Highlight 
                    titolo={highlight.titolo}
                    stringaData={highlight.data}
                    descrizione={highlight.descrizione}
                    />
                </div>
                
            )}
        </div>
    )
}