import listaHighlight from "../../highlights.json"
import Highlight from "./Highlight"
import "../../stile/HighlightHome.css"

export default function ListaHighlight() {
    return (
        <div className="ListaHighlight">
            {
                listaHighlight.highlights.map(highlight => {
                     
                    return (
                        <div key={highlight.codice}>
                            <Highlight
                            post={post}
                            />
                        </div>
                    )
                }
            )}
        </div>
    )
}