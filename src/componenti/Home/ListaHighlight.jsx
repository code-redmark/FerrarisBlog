import listaHighlight from "../../highlights.json"
import Highlight from "./Highlight"
import listaPost from "../../post/posts.json"
import "../../stile/HighlightHome.css"

export default function ListaHighlight() {
    return (
        <div className="ListaHighlight">
            {
                listaHighlight.highlights.map(highlight => {
                    const classe = listaPost[highlight.id.slice(0, 2)]
                    const post = classe[highlight.id]
                    return (
                        <div key={highlight.id}>
                            <Highlight
                            titolo={post.title}
                            descrizione={post.description}
                            stringaData={post.dataPost}
                            />
                        </div>
                    )
                }
            )}
        </div>
    )
}