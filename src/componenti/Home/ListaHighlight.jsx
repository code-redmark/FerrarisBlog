import listaHighlight from "../../highlights.json"
import Highlight from "./Highlight"

import { useContext } from "react"
import { ContextClassi } from "../../../server/ContextClassi.jsx"

import "../../stile/HighlightHome.css"

export default function ListaHighlight() {

    const classi = useContext(ContextClassi)
    return (
        <div className="ListaHighlight">
            {
                listaHighlight.highlights.map(highlight => {
                    <div key={highlight.codice}>
                        <Highlight
                        post={() => {
                            const classe = classi.findById(highlight.idClasse)
                            const post = classe.posts.findById(highlight.idPost)
                            return post

                            }
                        }
                        />
                    </div>
                
                }
            )}
        </div>
    )
}