import path from 'path'

import listaHighlight from "../../highlights.json"
import Highlight from "./Highlight"

import "../../utility/Post.js"

import "../../stile/ListaHighlight.css"
import { getPosts, getPostbyId } from "../../utility/Post.js"

export default function ListaHighlight() {
    return (
        <div className="ListaHighlight">
            {
            
                listaHighlight.highlights.map(highlight =>{
                    const post = getPostbyId(highlight.id)
                    return (
                        <div key={highlight.id}>
                            <Highlight
                            titolo={post.title}
                            data={post.date}
                            descrizione={post.description}
                            />
                            <p>{contenuto}</p>
                        </div>
                    )
                }
            )}
        </div>
    )
}