import listaHighlight from "../../highlights.json"
import Highlight from "./Highlight"
import listaPost from "../../post/posts.json"
import "../../stile/ListaHighlight.css"

export default function ListaHighlight() {
    return (
        <div className="ListaHighlight">
            {
            
                listaHighlight.highlights.map(highlight =>{
                    const post = listaPost[highlight.id]
                    return (
                        <div key={highlight.id}>
                            <Highlight
                            titolo={post.title}
                            data={post.date}
                            />
                        </div>
                    )
                }
            )}
        </div>
    )
}